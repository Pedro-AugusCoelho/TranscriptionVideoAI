import { FastifyInstance } from "fastify"
import { prisma } from "../lib/prisma"


export async function getAllPromptsRoute(app: FastifyInstance) {
    app.get('/prompts', async (req, reply) => {
        const prompts = await prisma.prompt.findMany()
        return reply.status(200).send(prompts)
    })
}