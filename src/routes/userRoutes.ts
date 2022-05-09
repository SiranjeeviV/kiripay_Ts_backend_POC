import { Router } from "express";

import  {createUser, getUser}  from "../controllers/userController";

const router = Router();

router.get("/", getUser);

router.post("/register", createUser);

export default router;
