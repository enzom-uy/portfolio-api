import { RequestHandler } from 'express'
import getDataFromTwitter from '../services/twitter.services'

export const getTwitterData: RequestHandler = async (_req, res) => {
  try {
    const data = await getDataFromTwitter()
    const followings = data.followings
    const followers = data.followers
    const twitterData = data.profileData
    res.status(200).json({
      followings,
      followers,
      twitterData
    })
  } catch (error) {
    res.status(404).json({
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      error: `There was an error while trying to fulfill your request: \n ${error}`
    })
  }
}
