import express from "express"
import { change, getUser, login, signup } from "../controller/auth.controller.js"
const router = express.Router()
router.post("/signup", signup)
router.post("/login", login)
router.put('/update', change);
router.get("/get", getUser);
export default router