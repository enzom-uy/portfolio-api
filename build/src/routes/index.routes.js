"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const indexRoute = (0, express_1.Router)();
indexRoute.get('/api', (_req, res) => {
    res.send('Enzomdev API: Index');
});
exports.default = indexRoute;
