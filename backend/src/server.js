const express = require('express')
const cors = require('cors')

const app = express()
const PORT = 8000


app.listen(PORT, () => {
    console.log(`Server Running on http://localhost:${PORT}`);
})