import prisma from '@prisma/client';

const database = new prisma.PrismaClient();

export default database;