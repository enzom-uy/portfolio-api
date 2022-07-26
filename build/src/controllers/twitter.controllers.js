"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTwitterData = void 0;
const toad_scheduler_1 = require("toad-scheduler");
const twitter_services_1 = __importStar(require("../services/twitter.services"));
const scheduler = new toad_scheduler_1.ToadScheduler();
scheduler.addSimpleIntervalJob(twitter_services_1.getFollowersFromTwitter);
scheduler.addSimpleIntervalJob(twitter_services_1.getFollowingsFromTwitter);
scheduler.addSimpleIntervalJob(twitter_services_1.getUserDataFromTwitter);
const getTwitterData = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield (0, twitter_services_1.default)();
        const followings = data.followings;
        const followers = data.followers;
        const twitterData = data.profileData;
        res.status(200).json({
            followings,
            followers,
            twitterData
        });
    }
    catch (error) {
        res.status(404).json({
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            error: `There was an error while trying to fulfill your request: ${error}`
        });
    }
});
exports.getTwitterData = getTwitterData;
