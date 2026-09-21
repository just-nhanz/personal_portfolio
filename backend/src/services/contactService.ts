import { prisma } from '../config/database'
import nodemailer from 'nodemailer'
import { env }    from '../config/env'
import type { ContactInput } from '../validators/contactValidator'

async function sendEmail(data: ContactInput) {
  if (!env.SMTP.HOST || !env.SMTP.USER) return // email not configured

  const transporter = nodemailer.createTransport({
    host:   env.SMTP.HOST,
    port:   env.SMTP.PORT,
    secure: false,
    auth: { user: env.SMTP.USER, pass: env.SMTP.PASS },
  })

  await transporter.sendMail({
    from:    `"Portfolio Contact" <${env.SMTP.USER}>`,
    to:      env.SMTP.TO || env.SMTP.USER,
    subject: `New message from ${data.name}`,
    html: `
      <h3>New portfolio contact</h3>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Message:</strong></p>
      <p>${data.message.replace(/\n/g, '<br>')}</p>
    `,
  })
}

export const contactService = {
  create: async (data: ContactInput) => {
    const msg = await prisma.contactMessage.create({ data })
    await sendEmail(data).catch((e) => console.warn('Email send failed:', e.message))
    return msg
  },

  findAll: () =>
    prisma.contactMessage.findMany({ orderBy: { createdAt: 'desc' } }),

  markRead: (id: number) =>
    prisma.contactMessage.update({ where: { id }, data: { read: true } }),
}
