require("dotenv").config()
const express = require("express")
const app = express()

const port = process.env.LOGIN_PORT || 3000

app.listen(port, () => {
    console.log(`APP in http://localhost:${port}`)
})