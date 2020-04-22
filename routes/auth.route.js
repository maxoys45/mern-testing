import { Router } from 'express'

import { authUser } from '../controllers/auth.controller'

const router = Router()

router
  .route('/')
  .post(authUser)

export default router