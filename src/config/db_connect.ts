import mongoose, { ConnectOptions } from "mongoose";
const dbURL = "mongodb://127.0.0.1:27017/"
const DBNAME = "Kiripay"
const db_connection = () => {
  mongoose
    .connect(`${dbURL}${DBNAME}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as ConnectOptions)
    .then((res) => {
      console.log(
        "Connected to Database $$",
        DBNAME
      );
    })
    .catch((err) => {
      console.log(
        `Initial Distribution API Database connection error occured -`,
        err
      );
    });
};

export default db_connection