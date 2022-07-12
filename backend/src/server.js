const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv').config()
const blogRoutes = require('../routes/blogRoutes')
const { errorHandler } = require('../middleware/errorMiddleware')

const app = express()
const PORT = process.env.PORT || 8000


app.use(express.json())
app.use(express.urlencoded({ extended : false }))
app.use('/api/blogs', blogRoutes)
app.use(errorHandler)

app.listen(PORT, () => {
    console.log(`Server Running on http://localhost:${PORT}`);
})