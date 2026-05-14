require("dotenv").config()
const express = require("express")
const app = express()

app.use(express.json())

const port = process.env.LOGIN_PORT || 4000
const decodeSecret = process.env.LOGIN_DECODE_SECRET || ""

app.post("/api/auth/login", (req, res) => {
    const { usuario, password } = req.body

    if (!usuario || !password) {
        return res.status(400).json({ error: "usuario y password son requeridos" })
    }

    try {
        const decoded = Buffer.from(password, "base64").toString("utf-8")
        const plainPassword = decoded.startsWith(`${decodeSecret}:`)
            ? decoded.slice(decodeSecret.length + 1)
            : decoded

        console.log("Usuario:", usuario)
        console.log("Password desencriptada:", plainPassword)

        return res.json({ success: true, usuario })
    } catch (error) {
        console.error("Error al desencriptar password:", error)
        return res.status(400).json({ error: "Password inválida" })
    }
})

app.listen(port, () => {
    console.log(`APP in http://localhost:${port}`)
})