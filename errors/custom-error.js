class CustomError extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;

    }
}

const createCustomError = (msg, statusCode) => new CustomError(msg, statusCode);

module.exports = {createCustomError, CustomError}