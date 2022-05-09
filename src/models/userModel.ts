import { IUser } from "../interfaces/userInterface";
import { Schema, model } from "mongoose";

export const userSchema = new Schema<IUser>({
  userType: {
    type: String,
    required: true,
    message: "please mention userType",
  },
  firstName: {
    type: String,
    required: true,
    message: "please provide firstName",
  },
  lastName: {
    type: String,
    required: true,
    message: "please provide lastName",
  },
  email: {
    type: String,
    lowercase: true,
    required: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please fill a valid email address",
    ],
  },
  password: {
    type: String,
    required: true,
    match:
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,15}$/,
    message: "Please fill a valid password",
  },
  businessName: { type: String, required: false },
  description: { type: String, required: false },
  customerType: { type: String, required: false },
  key: { type: String, required: false },
});

export const User = model<IUser>("users", userSchema);
