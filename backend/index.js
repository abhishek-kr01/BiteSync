import exprress from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
dotenv.config();

const app = exprress();

const port = process.env.PORT || 5000;

app.listen(port, () => {
    connectDB();
    console.log(`server started at ${port}`)
})


