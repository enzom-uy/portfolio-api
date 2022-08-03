import { adminUser, adminPassword, secretKey } from './../utils/config'
import { RequestHandler } from 'express'
import Posts from '../models/post'
import jwt from 'jsonwebtoken'

export const getAllPosts: RequestHandler = async (_req, res) => {
  const posts = await Posts.find({})

  if (posts.length === 0) {
    return res.status(204).json({ error: 'There are no posts yet.' })
  }
  return res.status(200).json({ posts: posts })
}

export const loginUser: RequestHandler = async (req, res) => {
  const body = req.body
  const userIsAdmin =
    body.username === adminUser && body.password === adminPassword

  if (!userIsAdmin) {
    return res
      .status(401)
      .send({
        error: "Login failed: you clearly shouldn't be here.",
        status: 'ERROR'
      })
  }

  const userForToken = { username: body.username }
  const authToken = jwt.sign(userForToken, secretKey)
  return res
    .status(200)
    .send({ authToken, username: body.username, status: 'OK' })
}
