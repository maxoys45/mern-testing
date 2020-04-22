import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

import { User } from '../models/user.model'

/**
 * Auth the user.
 */
export const authUser = (req, res) => {
  const { email, password } = req.body

  if (!email || !password) {
    return res.status(400).json({ msg: 'Please enter all fields.' })
  }

  User
    // Check for an existing email
    .findOne({ email })
    .then(user => {
      if (!user) return res.status(400).json({ msg: 'Invalid credentials.' })

      // Validate password
      bcrypt.compare(password, user.password)
        .then(isMatch => {
          if (!isMatch) return res.status(400).json({ msg: 'Invalid credentials.' })

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
}

/**
 * Get the user.
 */
export const getUser = (req, res) => {
  User
    .findById(req.user.id)
    .select('-password')
    .then(user => res.json(user))
}