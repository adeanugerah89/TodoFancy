var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var todoSchema = new Schema({
  userId: { 
    type: Schema.Types.ObjectId, 
    ref: 'user' },
  title: String,
  content: String,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
})

var Todo = mongoose.model('todo',todoSchema);

module.exports = Todo;