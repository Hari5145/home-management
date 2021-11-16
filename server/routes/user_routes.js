import express from "express";
import { userController as uc } from "../controllers/userController.js";

const userRoutes = express.Router();

userRoutes.get("/", uc.getallusers);
userRoutes.post("/", uc.createuser);

export default userRoutes;
