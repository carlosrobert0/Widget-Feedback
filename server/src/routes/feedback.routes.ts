import { Router } from "express"
import { prisma } from './../prisma'

const feedbackRoutes = Router()

feedbackRoutes.post('/feedbacks', async (req, res) => {
  const { type, comment, screenshot } = req.body
  
  const feedback = await prisma.feedback.create({
    data: {
      type,
      comment,
      screenshot,
    }
  })
  
  return res.status(201).json({ data: feedback })
})

export { feedbackRoutes }