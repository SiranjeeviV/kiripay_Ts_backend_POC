import express from "express";
import userRoute from "./routes/userRoutes";
import { json } from "body-parser";
import db_connect from "./config/db_connect";
import cors from "cors";

const app = express();
app.use(json());
app.use(cors());
const port = 9000;

db_connect();
app.use("/user", userRoute);
app.use(
  (
    err: Error,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    res.status(500).json({ message: err.message });
  }
);

app.listen(port, () => {
  console.log("listening to port " + port);
});
