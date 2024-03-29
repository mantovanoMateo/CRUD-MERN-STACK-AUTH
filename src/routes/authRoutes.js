import { Router } from 'express'
import { logIn, logout, profile, register, verifyToken } from '../controllers/authController.js'
import { authRequired } from '../middlewares/validateToken.js'
import { validateSchema } from '../middlewares/validatormiddleware.js'
import { registerSchema, loginSchema } from '../schemas/authSchema.js'

const router = Router();

router.post('/register', validateSchema(registerSchema), register);
router.post('/login', validateSchema(loginSchema), logIn);
router.post('/logout', logout);
router.get('/profile', authRequired, profile);
router.get('/verify', verifyToken);

export default router;