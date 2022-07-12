const express = require('express')
const cors = require('cors')
const colors = require('colors')
const dotenv = require('dotenv').config()
const blogRoutes = require('../routes/blogRoutes')
const { errorHandler } = require('../middleware/errorMiddleware')
const connectDB = require('../config/db')

const app = express()
const PORT = process.env.PORT || 8000


connectDB()


app.use(express.json())
app.use(express.urlencoded({ extended : false }))
app.use('/api/blogs', blogRoutes)
app.use(errorHandler)

app.listen(PORT, () => {
    console.log(`Server Running on http://localhost:${PORT}`);
})