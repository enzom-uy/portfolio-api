import {
  twitterBearerToken,
  twitterFollowers,
  twitterFollowings
} from './../utils/config'
import { RequestHandler } from 'express'
import axios from 'axios'

export const getTwitterFollowingsAndFollowers: RequestHandler = async (
  _req,
  res
) => {
  try {
    const followings = await axios({
      method: 'get',
      url: twitterFollowings,
      headers: {
        Authorization: `Bearer ${twitterBearerToken}`
      }
    }).then((res) => res.data)
    const followers = await axios({
      method: 'get',
      url: twitterFollowers,
      headers: {
        Authorization: `Bearer ${twitterBearerToken}`
      }
    }).then((res) => res.data)
    res.status(200).json({
      followings: followings.meta.result_count,
      followers: followers.meta.result_count
    })
  } catch (error) {
    res.status(404).json({
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      error: `There was an error while trying to fulfill your request: \n ${error}`
    })
  }
}
