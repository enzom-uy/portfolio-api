/* eslint-disable @typescript-eslint/restrict-template-expressions */
import axios from 'axios'
import { AsyncTask, SimpleIntervalJob } from 'toad-scheduler'
import {
  twitterBearerToken,
  twitterConfig,
  twitterFollowers,
  twitterFollowings,
  twitterUser
} from '../utils/config'

export let followers = 0
export let followings = 0
export let profileData = {}

const followersFromTwitterTask = new AsyncTask(
  'twitter fetch followers',
  async () => {
    return await axios.get(twitterFollowers, twitterConfig).then((res) => {
      followers = res.data.meta.result_count
    })
  }
)

export const getFollowersFromTwitter = new SimpleIntervalJob(
  { minutes: 40 },
  followersFromTwitterTask
)

const followingsFromTwitterTask = new AsyncTask(
  'twitter fetch followings',
  async () =>
    await axios({
      method: 'get',
      url: twitterFollowings,
      headers: {
        Authorization: `Bearer ${twitterBearerToken}`
      }
    }).then((res) => {
      followings = res.data.meta.result_count
    })
)

export const getFollowingsFromTwitter = new SimpleIntervalJob(
  {
    minutes: 40
  },
  followingsFromTwitterTask
)

const dataFromTwitterTask = new AsyncTask(
  'twitter fetch user data',
  async () =>
    await axios
      .get(twitterUser, {
        headers: { Authorization: `Bearer ${twitterBearerToken}` },
        params: {
          'user.fields': 'profile_image_url,description'
        },
        responseEncoding: 'utf8'
      })
      .then((res) => {
        profileData = res.data.data
      })
)

export const getUserDataFromTwitter = new SimpleIntervalJob(
  {
    minutes: 40
  },
  dataFromTwitterTask
)

const getDataFromTwitter = async (): Promise<{
  followings: number
  followers: number
  profileData: {}
}> => {
  const twitterData = { followings, followers, profileData }
  return twitterData
}

export default getDataFromTwitter
