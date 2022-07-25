import { RequestHandler } from 'express'
import { ToadScheduler } from 'toad-scheduler'
import getDataFromTwitter, {
  getUserDataFromTwitter,
  getFollowersFromTwitter,
  getFollowingsFromTwitter
} from '../services/twitter.services'

const scheduler = new ToadScheduler()

scheduler.addSimpleIntervalJob(getFollowersFromTwitter)
scheduler.addSimpleIntervalJob(getFollowingsFromTwitter)
scheduler.addSimpleIntervalJob(getUserDataFromTwitter)

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
      error: `There was an error while trying to fulfill your request: ${error}`
    })
  }
}
