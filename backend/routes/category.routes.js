import express from "express"
import { creatNewCategory } from "../controller/category.controller.js"
const router = express.Router()
router.post("/", creatNewCategory)
export default router