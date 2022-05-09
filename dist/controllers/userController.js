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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUser = exports.createUser = void 0;
const userModel_1 = require("../models/userModel");
const createUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    if (req.body.userType === "C") {
        if (!req.body.customerType) {
            res.status(404).json({ Error: { message: "please enter customer type" } });
        }
        else if (!req.body.description) {
            res.status(404).json({ Error: { message: "please enter description " } });
        }
        else if (!req.body.customerType || !req.body.description) {
            res.status(500).json({
                Error: { message: "please enter customer type & description " },
            });
        }
        else {
            let user = new userModel_1.User(req.body);
            user.save((err, result) => {
                if (err) {
                    res.json({ message: err.message });
                }
                else {
                    res
                        .status(201)
                        .send({ message: "created user successfully", _id: result._id });
                }
            });
        }
    }
    else if (req.body.userType === "B") {
        if (!req.body.businessName) {
            res.json({
                Error: { message: "please provide business establishment name" },
            });
        }
        else {
            let user = new userModel_1.User(req.body);
            user.save((err, result) => {
                if (err) {
                    res.json({ message: err.message });
                }
                else {
                    res
                        .status(201)
                        .send({ message: "created user successfully", _id: result._id });
                }
            });
        }
    }
});
exports.createUser = createUser;
const getUser = (req, res, next) => { };
exports.getUser = getUser;
