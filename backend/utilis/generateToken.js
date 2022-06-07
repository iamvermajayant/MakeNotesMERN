const jwt = require('jsonwebtoken');

const generateToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET_KEY, {
        expiresIn: process.env.EXPIRES_IN_DAYS,
    });
};

module.exports = generateToken;