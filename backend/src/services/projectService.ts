import { prisma } from '../config/database'

export const projectService = {
  findAll: () =>
    prisma.project.findMany({
      orderBy: [{ featured: 'desc' }, { order: 'asc' }],
    }),

  findById: (id: number) =>
    prisma.project.findUnique({ where: { id } }),
}
