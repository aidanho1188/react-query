require('dotenv').config()
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const routes = require('./routes')
const port = process.env.PORT
const dbUrl = process.env.DB_URL
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())

app.use('/', routes)

app.listen(port, async () => {
  await dbConnect()
  console.log(`Server is running on port ${port}`)
})

async function dbConnect() {
  try {
    await mongoose.connect(dbUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    console.log(`Connected to MongoDB at ${dbUrl}`)
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error}`)
  }
}
