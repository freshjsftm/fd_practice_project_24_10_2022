const jwt = require('jsonwebtoken');
const createHttpError = require('http-errors');
const TokenError = require('../errors/TokenError');
const userQueries =require('../controllers/queries/userQueries');
const JwtService = require('../services/jwtService')

module.exports.checkAuth = async (req, res, next) => {
  try {  
    const {
      headers: { authorization } // 'Bearer feesgfyhef.ertetet.ertetret'
    } = req
    if(authorization){
      const [, token] = authorization.split(' ');
      const tokenData = await JwtService.verifyAccessToken(token);
      const foundUser = await userQueries.findUser({ id: tokenData.userId });
      foundUser.password = undefined
      return res.send(foundUser);
    }
    next(createHttpError(401, 'Need token'))
  } catch (err) {
    next(new TokenError());
  }
};
