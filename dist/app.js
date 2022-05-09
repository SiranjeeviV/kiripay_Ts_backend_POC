"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const body_parser_1 = require("body-parser");
const db_connect_1 = __importDefault(require("./config/db_connect"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use((0, body_parser_1.json)());
app.use((0, cors_1.default)());
const port = 9000;
(0, db_connect_1.default)();
app.use("/user", userRoutes_1.default);
app.use((err, req, res, next) => {
    res.status(500).json({ message: err.message });
});
app.listen(port, () => {
    console.log("listening to port " + port);
});
