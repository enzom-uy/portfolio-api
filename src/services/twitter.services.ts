import axios from 'axios'
import {
  twitterBearerToken,
  twitterFollowers,
  twitterFollowings,
  twitterUser
} from '../utils/config'

const getDataFromTwitter = async (): Promise<{
  followings: number
  followers: number
  profileData: {
    username: string
    profile_image_url: string
    id: string
    name: string
  }
}> => {
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
  const profileData = await axios
    .get(twitterUser, {
      headers: { Authorization: `Bearer ${twitterBearerToken}` },
      params: { 'user.fields': 'profile_image_url' }
    })
    .then((res) => res.data)

  const twitterData = { followings, followers, profileData }

  return twitterData
}

export default getDataFromTwitter
