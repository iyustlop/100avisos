class AuthService {
  constructor(decodeSecret) {
    this.decodeSecret = decodeSecret
  }

  validateCredentials({ usuario, password }) {
    if (!usuario || !password) {
      throw new Error('usuario y password son requeridos')
    }
  }

  decodePassword(password) {
    return Buffer.from(password, 'base64').toString('utf-8')
  }

  getPlainPassword(decoded) {
    return decoded.startsWith(`${this.decodeSecret}:`)
      ? decoded.slice(this.decodeSecret.length + 1)
      : decoded
  }

  authenticate(credentials) {
    this.validateCredentials(credentials)

    const decoded = this.decodePassword(credentials.password)
    const plainPassword = this.getPlainPassword(decoded)

    return {
      usuario: credentials.usuario,
      plainPassword,
    }
  }

  createUserData(credentials) {
    this.validateCredentials(credentials)

    const decoded = this.decodePassword(credentials.password)
    const plainPassword = this.getPlainPassword(decoded)
    const passwordHash = Buffer.from(`${this.decodeSecret}:${plainPassword}`).toString('base64')

    return {
      usuario: credentials.usuario,
      passwordHash,
    }
  }

  generateToken(usuario) {
    return Buffer.from(`${usuario}:${Date.now()}`).toString('base64')
  }
}

module.exports = AuthService
