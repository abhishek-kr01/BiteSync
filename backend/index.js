import exprress from "express";
import dotenv from "dotenv";
dotenv.config();
import connectDB from "./config/db.js";
import cookieParser from "cookie-parser";
import authRouter from "./routes/auth.routes.js";
import cors from "cors";
const app = exprress();

const port = process.env.PORT || 5000;

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))
app.use(exprress.json())
app.use(cookieParser())
app.use("/api/auth", authRouter)

app.listen(port, () => {
    connectDB();
    console.log(`server started at ${port}`)
})


