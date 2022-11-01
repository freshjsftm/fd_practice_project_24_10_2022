const jwt = require('jsonwebtoken');
const CONSTANTS = require('../constants');
const TokenError = require('../errors/TokenError');
const userQueries =require('../controllers/queries/userQueries');
const JwtService = require('../services/jwtService')

module.exports.checkAuth = async (req, res, next) => {
  try {  
    const {
      headers: { authorization } // 'Bearer feesgfyhef.ertetet.ertetret'
    } = req
    const [, token] = authorization.split(' ');
    const tokenData = await JwtService.verifyAccessToken(token);
    const foundUser = await userQueries.findUser({ id: tokenData.userId });
    foundUser.password = undefined
    res.send(foundUser);
  } catch (err) {
    next(new TokenError());
  }
};

module.exports.checkToken = async (req, res, next) => {
  const accessToken = req.headers.authorization;
  if (!accessToken) {
    return next(new TokenError('need token'));
  }
  try {
    req.tokenData = jwt.verify(accessToken, CONSTANTS.JWT_SECRET);
    next();
  } catch (err) {
    next(new TokenError());
  }
};
