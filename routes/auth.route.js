import { Router } from 'express'

import { auth } from '../middleware/auth'
import { loginUser, getUser } from '../controllers/auth.controller'

const router = Router()

router
  .route('/')
  .post(loginUser)

router
  .route('/user')
  .get(auth, getUser)

export default router