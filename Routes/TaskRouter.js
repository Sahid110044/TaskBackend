const express = require('express')
const { CreateTask, FetchAllTask, updateTaskById, deleteTaskById,  } = require('../Controllers/TaskController.js')
const router = express.Router()


router.get('/', FetchAllTask)
router.post('/', CreateTask)
router.put('/:id', updateTaskById)
router.delete('/:id',deleteTaskById)



module.exports = router