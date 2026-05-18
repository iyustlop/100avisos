class Config {
  constructor(env = process.env) {
    this.port = env.LOGIN_PORT || 4000
    this.decodeSecret = env.LOGIN_DECODE_SECRET || ""
    this.allowedOrigin = 'http://localhost:3000'
  }
}

module.exports = Config
