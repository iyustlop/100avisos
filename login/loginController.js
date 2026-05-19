class LoginController {
  constructor(authService, userRepository) {
    this.authService = authService
    this.userRepository = userRepository
  }

  postLogin(req, res) {
    const { usuario, password } = req.body

    try {
      this.authService.validateCredentials({ usuario, password })

      const user = this.userRepository.findByUsuario(usuario)
      if (!user || !this.authService.verifyPassword(password, user.passwordHash)) {
        throw new Error('usuario o password inválidos')
      }

      const encryptedUsuario = this.authService.encryptUsuario(usuario)
      const token = this.authService.generateToken({ usuario: encryptedUsuario })

      console.log('Usuario login:', usuario)
      console.log('Password encriptada recibida:', password)

      res.setHeader('token', token)
      return res.json({ success: true, token })
    } catch (error) {
      console.error('Error al procesar login:', error)
      return res.status(400).json({ error: error.message || 'Password inválida' })
    }
  }
}

module.exports = LoginController
