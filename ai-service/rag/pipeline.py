from langchain_openai import ChatOpenAI
from langchain.chains import ConversationalRetrievalChain
from langchain.memory import ConversationBufferMemory
from langchain.prompts import PromptTemplate
from rag.retriever import retriever
from rag.prompts import SYSTEM_PROMPT, CONDENSE_QUESTION_PROMPT
import os

class RAGPipeline:
    def __init__(self):
        self._chain = None

    async def initialise(self):
        import asyncio
        loop = asyncio.get_event_loop()
        await loop.run_in_executor(None, self._build)

    def _build(self):
        ret = retriever.build().as_retriever()
        llm = ChatOpenAI(
            model=os.getenv("OPENAI_MODEL", "gpt-4o-mini"),
            temperature=0.3,
            api_key=os.getenv("OPENAI_API_KEY"),
        )
        memory = ConversationBufferMemory(
            memory_key="chat_history",
            return_messages=True,
            output_key="answer",
        )
        qa_prompt = PromptTemplate(
            input_variables=["context", "question"],
            template=SYSTEM_PROMPT + "\nQuestion: {question}\nAnswer:"
        )
        condense_prompt = PromptTemplate(
            input_variables=["chat_history", "question"],
            template=CONDENSE_QUESTION_PROMPT,
        )
        self._chain = ConversationalRetrievalChain.from_llm(
            llm=llm,
            retriever=ret,
            memory=memory,
            combine_docs_chain_kwargs={"prompt": qa_prompt},
            condense_question_prompt=condense_prompt,
            return_source_documents=True,
            verbose=False,
        )

    async def arun(self, question: str) -> dict:
        import asyncio
        if self._chain is None:
            await self.initialise()
        loop = asyncio.get_event_loop()
        result = await loop.run_in_executor(
            None, lambda: self._chain({"question": question})
        )
        sources = list({
            doc.metadata.get("source", "")
            for doc in result.get("source_documents", [])
        })
        return {"answer": result["answer"], "sources": sources}

rag_pipeline = RAGPipeline()
