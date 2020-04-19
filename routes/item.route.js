import { Router } from 'express'

import { getItems, newItem, deleteItem } from '../controllers/item.controller'

const router = Router()

router
  .route('/')
  .get(getItems)
  .post(newItem)

router
  .route('/:id')
  .delete(deleteItem)

export default router