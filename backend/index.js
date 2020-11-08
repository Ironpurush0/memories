const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cross = require('cors')

const app = express()

const PORT = 5000

app.listen(PORT, () => {
    console.log("Server is running.")
})