var jwt = require('jsonwebtoken');
require('dotenv').config()

let validation = (req,res,next) =>{
  let roleType = jwt.verify(req.headers.token, process.env.SECRET_KEY)
  if (roleType.role == 'admin') {  
    next()
  }else {
    res.send('you not authorized')
  }
};

let todoAuth = (req,res,next) => {
  let userCek = jwt.verify(req.headers.token, process.env.SECRET_KEY)
  if(userCek.role == 'user'){
    req.body.cekId = userCek.id
    next()
  }
}

module.exports = {
  validation,
  todoAuth
};