class RegistrationController {
  constructor(registrationService) {
    this.registrationService = registrationService
  }

  postNewUser(req, res) {
    try {
      const user = this.registrationService.createUser(req.body)
      return res.status(201).json({
        success: true,
        user: {
          id: user.id,
          usuario: user.usuario,
          createdAt: user.createdAt,
        },
      })
    } catch (error) {
      console.error('Error al crear usuario:', error)
      return res.status(400).json({ error: error.message || 'No se pudo crear el usuario' })
    }
  }
}

module.exports = RegistrationController
