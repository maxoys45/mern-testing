import dotenv from 'dotenv'
import express from 'express'
import mongoose from 'mongoose'
import path from 'path'

import itemsRoute from './routes/item.route'
import usersRoute from './routes/user.route'

// Init dotenv
dotenv.config()

// Init express
const app = express()

// Bodyparser
app.use(express.json())

// Connect to Mongo
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  })
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.error(err))

// Routes
app.use('/api/items', itemsRoute)
app.use('/api/users', usersRoute)

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'))

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))