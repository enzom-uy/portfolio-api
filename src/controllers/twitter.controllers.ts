import {
  twitterBearerToken,
  twitterFollowers,
  twitterFollowings
} from './../utils/config'
import { RequestHandler } from 'express'
import axios from 'axios'

export const getTwitterFollowingsAndFollowers: RequestHandler = async (
  req,
  res
) => {
  try {
    const followings = await axios({
      method: 'get',
      url: twitterFollowings,
      headers: {
        Authorization: `Bearer ${twitterBearerToken as string}`
      }
    })
    const followers = await axios({
      method: 'get',
      url: twitterFollowers,
      headers: {
        Authorization: `Bearer ${twitterBearerToken as string}`
      }
    })
    res
      .status(200)
      .json({ followings: followings.data, followers: followers.data })
  } catch (error) {
    res
      .status(404)
      .send('There was an error while trying to fulfill your request.')
      .json(error)
  }
}
