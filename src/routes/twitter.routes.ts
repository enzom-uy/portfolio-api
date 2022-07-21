import { Router } from 'express'
import * as twitterControllers from '../controllers/twitter.controllers'

const twitterRoute = Router()

twitterRoute.get(
  '/api/twitter',
  twitterControllers.getTwitterFollowingsAndFollowers
)

export default twitterRoute
