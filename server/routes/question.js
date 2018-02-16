import express from 'express'

const app = express.Router()

const question = {

  _id: 1,
  title: '¿Cómo utilizo un componerte en IOS?',
  description: 'Mirad esta es mi pregunta...',
  createdAt: new Date(),
  icon: 'devicon-android-plain',
  answers: [],
  user: {
    firstName: 'Thomas',
    LastName: 'Nogales',
    email: 'thomasnrgsen@gmail.com',
    password: 'pyndagon'
  }
}

const questions = new Array(10).fill(question)

// /api/questions
app.get('/', (req, res) => res.status(200).json(questions))

// /api/questions/:id
app.get('/:id', (req, res) => res.status(200).json(question))

export default app
