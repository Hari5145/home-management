import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import dotEnv from "dotenv";
import userRoutes from "./routes/user_routes.js";

dotEnv.config();

const app = express();

const DB_CONNECTION_URL =
	"mongodb+srv://hari:bemani51458691@freecluster.0ymw9.mongodb.net/home-management?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5145;

app.use(express.json());
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

(async () => {
	try {
		await mongoose.connect(DB_CONNECTION_URL, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});
		app.listen(PORT, () => console.log(`Server running on PORT=${PORT}`));
	} catch (error) {
		console.log(error.message);
	}
})();

// mongoose
// 	.connect(DB_CONNECTION_URL, {
// 		useNewUrlParser: true,
// 		useUnifiedTopology: true,
// 	})
// 	.then(() =>
// 		app.listen(PORT, () => console.log(`Server running on PORT=${PORT}`))
// 	)
// 	.catch(err => console.log(err.message));
// // mongoose.set("useFindAndModify", false);

app.use("/api/v1/user", userRoutes);
