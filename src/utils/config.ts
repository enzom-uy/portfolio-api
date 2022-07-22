// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config()

export const twitterId = process.env.TWITTER_ID as string
export const twitterApiKey = process.env.TWITTER_API_KEY as string
export const twitterApiKeySecret = process.env.TWITTER_API_KEY_SECRET as string
export const twitterBearerToken = process.env.TWITTER_BEARER_TOKEN as string
export const twitterFollowings = process.env.TWITTER_FOLLOWINGS as string
export const twitterFollowers = process.env.TWITTER_FOLLOWERS as string
