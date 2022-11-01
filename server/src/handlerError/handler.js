const { TokenExpiredError, JsonWebTokenError } = require('jsonwebtoken')

module.exports = (err, req, res, next) => {
  console.log('LOG ERROR=====>>>>>>>>>>>', err)
    
  if(err instanceof TokenExpiredError){
    return res.status(419).send('Token Expired')
  }
  if(err instanceof JsonWebTokenError){
    return res.status(401).send('Token invalid')
  }

  if (
    err.message ===
      'new row for relation "Banks" violates check constraint "Banks_balance_ck"' ||
    err.message ===
      'new row for relation "Users" violates check constraint "Users_balance_ck"'
  ) {
    err.message = 'Not Enough money'
    err.status = 406
  }

  if (!err.message || !err.status) {
    return res.status(500).send('Server Error')
  }
  res.status(err.status).send(err.message)
}
