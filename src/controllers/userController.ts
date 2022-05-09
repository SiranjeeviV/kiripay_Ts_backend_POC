import { RequestHandler } from "express";
import { User } from "../models/userModel";

export const createUser: RequestHandler = async (req, res, next) => {
  if (req.body.userType === "C") {
    if (!req.body.customerType) {
      res.status(404).json({ Error: { message: "please enter customer type" } });
    } else if (!req.body.description) {
      res.status(404).json({ Error: { message: "please enter description " } });
    } else if (!req.body.customerType || !req.body.description) {
      res.status(500).json({
        Error: { message: "please enter customer type & description " },
      });
    } else {
      let user = new User(req.body);
      user.save((err, result) => {
        if (err) {
          res.json({ message: err.message });
        } else {
          res
            .status(201)
            .send({ message: "created user successfully", _id: result._id });
        }
      });
    }
  } else if (req.body.userType === "B") {
    if (!req.body.businessName) {
      res.json({
        Error: { message: "please provide business establishment name" },
      });
    } else {
      let user = new User(req.body);
      user.save((err, result) => {
        if (err) {
          res.json({ message: err.message });
        } else {
          res
            .status(201)
            .send({ message: "created user successfully", _id: result._id });
        }
      });
    }
  }
};

export const getUser: RequestHandler = (req, res, next) => {};
