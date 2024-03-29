import { Router } from 'express'
import { authRequired } from '../middlewares/validateToken.js'
import { getTasks, getTask, createTask, updateTask, deleteTask} from '../controllers/taskController.js'
import {validateSchema} from '../middlewares/validatormiddleware.js'
import {createTaskScehma} from '../schemas/taskSchema.js'

const router = Router();

router.get('/task', authRequired,getTasks)
router.get('/task/:id', authRequired,getTask)
router.post('/task', authRequired,validateSchema(createTaskScehma),createTask)
router.delete('/task/:id', authRequired,deleteTask)
router.put('/task/:id', authRequired,updateTask)


export default router;