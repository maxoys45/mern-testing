import { Router } from 'express'

import { auth } from '../middleware/auth'
import { getItems, newItem, deleteItem } from '../controllers/item.controller'

const router = Router()

router
  .route('/')
  .get(getItems)
  .post(auth, newItem)

router
  .route('/:id')
  .delete(auth, deleteItem)

export default router