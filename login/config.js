class Config {
  constructor(env = process.env) {
    this.port = env.LOGIN_PORT || 4000
    this.decodeSecret = env.LOGIN_DECODE_SECRET || ""
    this.jwtSecret = env.LOGIN_JWT_SECRET || this.decodeSecret || "default_jwt_secret"
    this.allowedOrigin = 'http://localhost:3000'
  }
}

module.exports = Config
