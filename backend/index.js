import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import mongoose from 'mongoose'

import postRouter from './routes/posts.js'

const app = express()

app.use('/posts', postRouter)

app.use(bodyParser.json({limit: "30mb", extended: true}))
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}))
app.use(cors())

const CONNECTION_URL = 'mongodb+srv://tonystark:QGrBYHfEl7DUi1Wv@cluster0.qbrbf.mongodb.net/test?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000


mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => app.listen(PORT, () => {
    console.log("Server is running.")
}))
.catch((error) => console.log(error.message) )

mongoose.set('useFindAndModify', false)