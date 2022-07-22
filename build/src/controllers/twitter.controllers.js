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
exports.getTwitterFollowingsAndFollowers = void 0;
const config_1 = require("./../utils/config");
const axios_1 = __importDefault(require("axios"));
const getTwitterFollowingsAndFollowers = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const followings = yield (0, axios_1.default)({
            method: 'get',
            url: config_1.twitterFollowings,
            headers: {
                Authorization: `Bearer ${config_1.twitterBearerToken}`
            }
        });
        const followers = yield (0, axios_1.default)({
            method: 'get',
            url: config_1.twitterFollowers,
            headers: {
                Authorization: `Bearer ${config_1.twitterBearerToken}`
            }
        });
        res.status(200).json({
            followings: followings.data.meta.result_count,
            followers: followers.data.meta.result_count
        });
    }
    catch (error) {
        res.status(404).json({
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            error: `There was an error while trying to fulfill your request: \n ${error}`
        });
    }
});
exports.getTwitterFollowingsAndFollowers = getTwitterFollowingsAndFollowers;
