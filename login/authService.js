const crypto = require('crypto')

const base64urlEncode = (value) =>
  Buffer.from(value)
    .toString('base64')
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '')

class AuthService {
  constructor(decodeSecret, jwtSecret) {
    this.decodeSecret = decodeSecret
    this.jwtSecret = jwtSecret || decodeSecret || 'default_jwt_secret'
    this.tokenExpirationSeconds = 60 * 60
  }

  validateCredentials({ usuario, password }) {
    if (!usuario || !password) {
      throw new Error('usuario y password son requeridos')
    }
  }

  isEncrypted(password) {
    if (!password) return false

    try {
      const decoded = Buffer.from(password, 'base64').toString('utf-8')
      return decoded.startsWith(`${this.decodeSecret}:`)
    } catch (error) {
      return false
    }
  }

  encryptPassword(password) {
    if (this.isEncrypted(password)) {
      return password
    }

    return Buffer.from(`${this.decodeSecret}:${password}`).toString('base64')
  }

  verifyPassword(password, passwordHash) {
    const encodedPassword = this.encryptPassword(password)
    return encodedPassword === passwordHash
  }

  encryptUsuario(usuario) {
    return Buffer.from(`${this.decodeSecret}:${usuario}`).toString('base64')
  }

  createUserData(credentials) {
    this.validateCredentials(credentials)

    const passwordHash = this.encryptPassword(credentials.password)

    return {
      usuario: credentials.usuario,
      passwordHash,
    }
  }

  generateToken(payload) {
    const header = base64urlEncode(JSON.stringify({ alg: 'HS256', typ: 'JWT' }))
    const body = base64urlEncode(
      JSON.stringify({
        ...payload,
        iat: Math.floor(Date.now() / 1000),
        exp: Math.floor(Date.now() / 1000) + this.tokenExpirationSeconds,
      }),
    )
    const signature = crypto
      .createHmac('sha256', this.jwtSecret)
      .update(`${header}.${body}`)
      .digest('base64')
      .replace(/\+/g, '-')
      .replace(/\//g, '_')
      .replace(/=+$/, '')

    return `${header}.${body}.${signature}`
  }
}

module.exports = AuthService
