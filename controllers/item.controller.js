import { Item } from '../models/item.model'

/**
 * Get the items
 */
export const getItems = (req, res) => {
  Item.find()
    .sort({ date: -1 })
    .then(items => res.json(items))
}

/**
 * Create a new item
 */
export const newItem = (req, res) => {
  const newItem = new Item({
    name: req.body.name,
  })

  newItem
    .save()
    .then(item => res.json(item))
}

/**
 * Remove an item
 */
export const deleteItem = (req, res) => {
  Item
    .findById(req.params.id)
    .then(item => item.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }))
}