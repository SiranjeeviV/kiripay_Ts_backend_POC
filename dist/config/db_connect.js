"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const dbURL = "mongodb://127.0.0.1:27017/";
const DBNAME = "Kiripay";
const db_connection = () => {
    mongoose_1.default
        .connect(`${dbURL}${DBNAME}`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
        .then((res) => {
        console.log("Connected to Database $$", DBNAME);
    })
        .catch((err) => {
        console.log(`Initial Distribution API Database connection error occured -`, err);
    });
};
exports.default = db_connection;
