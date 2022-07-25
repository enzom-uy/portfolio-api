"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserDataFromTwitter = exports.getFollowingsFromTwitter = exports.getFollowersFromTwitter = exports.profileData = exports.followings = exports.followers = void 0;
/* eslint-disable @typescript-eslint/restrict-template-expressions */
const axios_1 = __importDefault(require("axios"));
const config_1 = require("../utils/config");
const toad_scheduler_1 = require("toad-scheduler");
exports.followers = 0;
exports.followings = 0;
exports.profileData = {};
const followersFromTwitterTask = new toad_scheduler_1.AsyncTask('twitter fetch followers', () => __awaiter(void 0, void 0, void 0, function* () {
    return yield axios_1.default.get(config_1.twitterFollowers, config_1.twitterConfig).then((res) => {
        exports.followers = res.data.meta.result_count;
    });
}));
exports.getFollowersFromTwitter = new toad_scheduler_1.SimpleIntervalJob({ minutes: 30 }, followersFromTwitterTask);
const followingsFromTwitterTask = new toad_scheduler_1.AsyncTask('twitter fetch followings', () => __awaiter(void 0, void 0, void 0, function* () {
    return yield (0, axios_1.default)({
        method: 'get',
        url: config_1.twitterFollowings,
        headers: {
            Authorization: `Bearer ${config_1.twitterBearerToken}`
        }
    }).then((res) => {
        exports.followings = res.data.meta.result_count;
    });
}));
exports.getFollowingsFromTwitter = new toad_scheduler_1.SimpleIntervalJob({
    minutes: 30
}, followingsFromTwitterTask);
const dataFromTwitterTask = new toad_scheduler_1.AsyncTask('twitter fetch user data', () => __awaiter(void 0, void 0, void 0, function* () {
    return yield axios_1.default
        .get(config_1.twitterUser, {
        headers: { Authorization: `Bearer ${config_1.twitterBearerToken}` },
        params: { 'user.fields': ['profile_image_url', 'description'] }
    })
        .then((res) => {
        exports.profileData = res.data.data;
        console.log(exports.profileData);
    });
}));
exports.getUserDataFromTwitter = new toad_scheduler_1.SimpleIntervalJob({
    minutes: 30
}, dataFromTwitterTask);
const getDataFromTwitter = () => __awaiter(void 0, void 0, void 0, function* () {
    const twitterData = { followings: exports.followings, followers: exports.followers, profileData: exports.profileData };
    return twitterData;
});
exports.default = getDataFromTwitter;
