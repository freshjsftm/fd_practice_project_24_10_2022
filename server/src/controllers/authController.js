const { Users } = require('../models');

module.exports.signIn = async (req, res, next) =>{
  try {
    const {body:{email, password}} = req;

    // find user by unique email
    const user = await Users.findOne({
      where: {email}
    });
    // compare password (hash)
    
    // create token pair
    // send user with token
    
  } catch (error) {
    next(error)
  }
}

module.exports.signUp = async (req, res, next) =>{
  try {
    
  } catch (error) {
    next(error)
  }
}

module.exports.refresh = async (req, res, next) =>{
  try {
    
  } catch (error) {
    next(error)
  }
}