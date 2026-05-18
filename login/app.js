require("dotenv").config()
const express = require("express")
const cors = require("cors")
const Config = require("./config")
const AuthService = require("./authService")
const LoginController = require("./loginController")
const UserRepository = require("./userRepository")
const RegistrationService = require("./registrationService")
const RegistrationController = require("./registrationController")

const config = new Config()
const authService = new AuthService(config.decodeSecret)
const userRepository = new UserRepository()
const registrationService = new RegistrationService(authService, userRepository)
const loginController = new LoginController(authService)
const registrationController = new RegistrationController(registrationService)

const app = express()

app.use(cors({ origin: config.allowedOrigin }))
app.use(express.json())
app.post("/api/auth/login", (req, res) => loginController.postLogin(req, res))
app.post("/api/auth/new", (req, res) => registrationController.postNewUser(req, res))

app.listen(config.port, () => {
    console.log(`APP in http://localhost:${config.port}`)
})