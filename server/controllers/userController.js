'use strict'

var User = require('../models/user');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcrypt');
var salt = bcrypt.genSaltSync(10);
require('dotenv').config()

var createUser = (req,res) => {
  var hash = bcrypt.hashSync(req.body.password, salt);
  
  User.create({
    name: req.body.name,
    email: req.body.email,
    username: req.body.username,
    password: hash,
    role: 'user',
    createdAt: new Date()
  },(err,result) => {
    if(err) res.send(err)
    console.log(result);
    res.send(result);
  })
}

var getAllUser = (req,res) => {
  User.find({},(err,result) => {
    if(err) res.send(err)
    console.log(result);
    res.send(result);
  })
}

var updateUser = (req,res) => {
  User.update(
    {id: req.params.id},
    {$set: req.body, updatedAt: new Date()},(err,result) => {
    if(err) res.send(err)
    res.send('data already update');
  })
}

var deleteUser = (req,res) => {
  User.findByIdAndRemove(req.params.id,(err) => {
    if(err) res.send(err)
    res.send('data already deleted');
  })
}

var getOneUser = (req,res) => {
  User.findById(req.params.id, (err,result) => {
    if(err) res.send(err)
    console.log(result);
    res.send(result)
  })
}

var signUp = (req,res) => {
  var hash = bcrypt.hashSync(req.body.password, salt);
  
  User.create({
    name: req.body.name,
    email: req.body.email,
    username: req.body.username,
    password: hash,
    role: req.body.role,
    createdAt: new Date()
  },(err,result) => {
    if(err) res.send(err)
    console.log(result);
    res.send(result);
  })
}

var signIn = (req,res) => {
  User.findOne({username: req.body.username})
  .then(data => {
    if (bcrypt.compareSync(req.body.password, data.password)){
      var token = jwt.sign({username: data.username, role: data.role, id: data._id}, process.env.SECRET_KEY)
      res.send({
        msg: 'login sukses',
        token: token,
        user_id: data._id,
        username: data.username
      })
    }else{
      res.send('invalid username or password')
    }
  })
}

module.exports = {
  createUser,
  getAllUser,
  updateUser,
  deleteUser,
  getOneUser,
  signUp,
  signIn
};
