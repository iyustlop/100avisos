class UserRepository {
  constructor() {
    this.users = []
    this.nextId = 1
  }

  findByUsuario(usuario) {
    return this.users.find((user) => user.usuario === usuario)
  }

  create({ usuario, passwordHash }) {
    const user = {
      id: this.nextId++,
      usuario,
      passwordHash,
      createdAt: new Date().toISOString(),
    }

    this.users.push(user)
    return user
  }
}

module.exports = UserRepository
