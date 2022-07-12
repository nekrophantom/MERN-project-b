const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 8000


app.listen(PORT, () => {
    console.log(`Server Running on http://localhost:${PORT}`);
})