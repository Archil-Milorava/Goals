import "dotenv/config";
import { app } from "./app.js";
import mongoose from "mongoose";

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.DB_URI.replace("<db_password>", process.env.DB_PASSWORD))
  .then(() => {
    console.log("connected to db");
    app.listen(process.env.PORT, () => {
      console.log(`server running on port ${PORT}`);
    });
  }).catch((err) => console.log(err.message)
  )
