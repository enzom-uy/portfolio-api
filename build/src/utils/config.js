"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.twitterConfig = exports.twitterUser = exports.twitterFollowers = exports.twitterFollowings = exports.twitterBearerToken = exports.twitterApiKeySecret = exports.twitterApiKey = exports.twitterId = void 0;
// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();
exports.twitterId = process.env.TWITTER_ID;
exports.twitterApiKey = process.env.TWITTER_API_KEY;
exports.twitterApiKeySecret = process.env.TWITTER_API_KEY_SECRET;
exports.twitterBearerToken = process.env.TWITTER_BEARER_TOKEN;
exports.twitterFollowings = process.env.TWITTER_FOLLOWINGS;
exports.twitterFollowers = process.env.TWITTER_FOLLOWERS;
exports.twitterUser = process.env.TWITTER_USER;
exports.twitterConfig = {
    headers: { Authorization: `Bearer ${exports.twitterBearerToken}` }
};
