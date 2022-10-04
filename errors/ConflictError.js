class ConflictError extends Error {
  constructor(message = 'Rонфликт') {
    super(message);
    this.statusCode = 409;
  }
}

module.exports = ConflictError;
