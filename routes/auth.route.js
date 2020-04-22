import { Router } from 'express'

import { auth } from '../middleware/auth'
import { authUser, getUser } from '../controllers/auth.controller'

const router = Router()

router
  .route('/')
  .post(authUser)

router
  .route('/user')
  .get(auth, getUser)

export default router