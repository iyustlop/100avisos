class LoginController {
  constructor(authService) {
    this.authService = authService
  }

  postLogin(req, res) {
    const { usuario, password } = req.body

    try {
      const { plainPassword } = this.authService.authenticate({ usuario, password })

      console.log('Usuario:', usuario)
      console.log('Password desencriptada:', plainPassword)

      const token = this.authService.generateToken(usuario)
      res.setHeader('token', token)
      return res.json({ success: true })
    } catch (error) {
      console.error('Error al procesar login:', error)
      return res.status(400).json({ error: error.message || 'Password inválida' })
    }
  }
}

module.exports = LoginController
