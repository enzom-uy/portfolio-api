import { Secret } from 'jsonwebtoken'

// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config()

const env = process.env

export const twitterId = env.TWITTER_ID as string
export const twitterApiKey = env.TWITTER_API_KEY as string
export const twitterApiKeySecret = env.TWITTER_API_KEY_SECRET as string
export const twitterBearerToken = env.TWITTER_BEARER_TOKEN as string
export const twitterFollowings = env.TWITTER_FOLLOWINGS as string
export const twitterFollowers = env.TWITTER_FOLLOWERS as string
export const twitterUser = env.TWITTER_USER as string
export const mongoURL = env.MONGODB_URL as string
export const adminUser = env.ADMIN_USER as string
export const adminPassword = env.ADMIN_PASSWORD as string
export const secretKey = env.SECRET_KEY as Secret

export const twitterConfig = {
  headers: { Authorization: `Bearer ${twitterBearerToken}` }
}
