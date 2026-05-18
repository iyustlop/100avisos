class RegistrationService {
  constructor(authService, userRepository) {
    this.authService = authService
    this.userRepository = userRepository
  }

  createUser(credentials) {
    const { usuario, passwordHash } = this.authService.createUserData(credentials)

    if (this.userRepository.findByUsuario(usuario)) {
      throw new Error('usuario ya existe')
    }

    return this.userRepository.create({ usuario, passwordHash })
  }
}

module.exports = RegistrationService
