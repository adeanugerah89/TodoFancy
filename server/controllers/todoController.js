var Todo = require('../models/todo');

var createTodo = (req,res) => {
  Todo.create({
    userId: req.body.userId,
    title: req.body.title,
    content: req.body.content,
    createdAt: new Date()
  },(err,result) => {
    if(err) res.send(err)
    console.log(result);
    res.send(result)
  })
}

var getAllTodo = (req,res) => {
  Todo.find({ userId: req.body.cekId})
  .populate({path: 'userId', select: 'name'})
  .exec((err,result) => {
    if(err) res.send(err)
    console.log(result);
    res.send(result)
  })
}

var updateTodo = (req,res) => {
  Todo.findById(req.params.id,(err,result) => {
    if(err){
      res.send(err)
    }else {
      if(req.body.cekId == result.userId) {
        Todo.update(
          {_id: result._id},
          {$set: req.body},(err,result) => {
            if(err) res.send(err)
            res.send('data already updated')
          })
      } else {
        res.send('you not authorized')
      }
    }
  })
}

var deleteTodo = (req,res) => {
  Todo.findById(req.params.id,(err,result) => {
    if(err){
      res.send(err)
    }else {
      if(req.body.cekId == result.userId) {
        Todo.remove({
          _id:result._id
        },(err) => {
          if(err) res.send(err)
          res.send('data deleted')
        })
      } else {
        res.send('you not authorized')
      }
    }
  })
}

var getOneTodo = (req,res) => {
  Todo.findById(req.params.id)
  .populate({path: 'userId', select: 'name'})
  .exec((err,result) => {
    if(err) res.send(err)
    console.log(result);
    res.send(result)
  })
}

module.exports = {
  createTodo,
  getAllTodo,
  updateTodo,
  deleteTodo,
  getOneTodo
  
};