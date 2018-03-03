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

// GET /api/questions
app.get('/', (req, res) => res.status(200).json(questions))

// /api/questions - con setTimeout
// app.get('/', (req, res) => {
//   setTimeout(() => {
//     res.status(200).json(questions)
//   }, 2000)
// })

// GET /api/questions/:id
app.get('/:id', (req, res) => {
  const { id } = req.params
  const q = questions.find(({ _id }) => _id === +id)
  res.status(200).json(q)
})

// POST /api/questions
app.post('/', (req, res) => {
  const question = req.body
  question._id = +new Date()
  question.user = {
    email: 'thomasnrgsen@gmail.com',
    password: 'pyndagon',
    firstName: 'Thomas',
    LastName: 'Nogales'
  }
  question.createdAt = new Date()
  question.answers = []
  questions.push(question)
  res.status(201).json(question)
})

export default app
