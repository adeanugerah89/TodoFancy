const express = require('express');
const router = express.Router();
const controller = require('../controllers/todoController');
const auth = require('../helpers/helper');

router.post('/',controller.createTodo);
router.get('/',auth.todoAuth,controller.getAllTodo);
router.put('/:id',auth.todoAuth, controller.updateTodo);
router.delete('/:id',auth.todoAuth ,controller.deleteTodo);
router.get('/:id',controller.getOneTodo);

module.exports = router;