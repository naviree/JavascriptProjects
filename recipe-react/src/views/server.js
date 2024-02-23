import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { userRouter } from "../routes/users.js";
const app = express();
app.use(express.json());
app.use(cors());

app.use("/auth", userRouter);

mongoose.connect(
	"mongodb+srv://admin:1234@jun.wvbznxb.mongodb.net/recipe?retryWrites=true&w=majority&appName=jun"
);

app.listen(3001, () => {
	console.log("Server is running on port 3001");
});
