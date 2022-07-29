import { NextFunction, RequestHandler } from 'express'
import { secretKey } from '../utils/config'
import jwt from 'jsonwebtoken'

export const verifyAuth: RequestHandler = (req, res, next: NextFunction) => {
  const authorization = req.get('authorization')
  const newLocal = 'bearer'

  let token = null
  if (authorization === undefined) {
    return res.status(403).json({ error: 'No token provided.' })
  }
  if (authorization.toLowerCase().startsWith(newLocal)) {
    token = authorization.substring(7)
  }

  if (token === null) {
    return res.status(403).json({ error: 'No token provided.' })
  }

  const verified = jwt.verify(token, secretKey)
  // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
  if (!verified) {
    return res
      .status(401)
      .send('Provided token is invalid or has insufficient permissions.')
  } else {
    next()
  }
}
