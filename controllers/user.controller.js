import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

import { User } from '../models/user.model'

/**
 * Register the user.
 */
export const registerUser = async (req, res) => {
  const { username, email, password } = req.body

  if (!username || !email || !password) {
    return res.status(400).json({ msg: 'Please enter all fields.' })
  }

  // @TODO make this cleaner, seems clunky to search twice.
  const usernameExists = await User.findOne({ username })
  const emailExists = await User.findOne({ email })

  if (usernameExists || emailExists) return res.status(400).json({ msg: 'User already exists.' })

  // Create new user.
  const newUser = new User({
    username,
    email,
    password,
  })

  // Hash the password
  bcrypt.genSalt(10, (err, salt) => {
    if (err) throw err

    bcrypt.hash(newUser.password, salt, (err, hash) => {
      if (err) throw err

      newUser.password = hash

      // Save the new user to the DB.
      newUser
        .save()
        .then(user => {
          jwt.sign(
            { id: user.id },
            process.env.JWT_SECRET,
            { expiresIn: '90d' },
            (err, token) => {
              if (err) throw err

              res.json({
                token,
                user: {
                  id: user.id,
                  username: user.username,
                  email: user.email,
                },
              })
            }
          )
        })
    })
  })
}