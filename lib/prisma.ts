import { PrismaClient } from '@prisma/client'

const globalForPrisma = global as unknown as { prisma: PrismaClient }

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    log: ['query'], // نمایش لاگ کوئری‌ها در حالت dev (اختیاری)
  })

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma

export default prisma