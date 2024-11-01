import express from "express"
import { change, login, signup } from "../controller/auth.controller.js"
const router = express.Router()
router.post("/signup", signup)
router.post("/login", login)
router.put('/update', change);

export default router