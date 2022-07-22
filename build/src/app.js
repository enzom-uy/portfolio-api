"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const twitter_routes_1 = __importDefault(require("./routes/twitter.routes"));
const index_routes_1 = __importDefault(require("./routes/index.routes"));
const app = (0, express_1.default)();
app.listen(process.env.PORT);
console.debug(`Server listening on port ${process.env.PORT}`);
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use((0, cors_1.default)());
app.use(twitter_routes_1.default);
app.use(index_routes_1.default);
exports.default = app;
