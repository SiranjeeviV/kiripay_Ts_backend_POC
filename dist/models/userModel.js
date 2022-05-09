"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = exports.userSchema = void 0;
const mongoose_1 = require("mongoose");
exports.userSchema = new mongoose_1.Schema({
    userType: { type: String, required: true, message: "please mention userType" },
    firstName: { type: String, required: true, message: "please provide firstName" },
    lastName: { type: String, required: true, message: "please provide lastName" },
    email: { type: String,
        lowercase: true,
        required: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'] },
    password: { type: String, required: true, match: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,15}$/, message: 'Please fill a valid password' },
    businessName: { type: String, required: false },
    description: { type: String, required: false },
    customerType: { type: String, required: false },
    key: { type: String, required: false },
});
exports.User = (0, mongoose_1.model)("users", exports.userSchema);
