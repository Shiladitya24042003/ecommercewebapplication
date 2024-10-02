import express from "express"
import { deleteBook } from "../controller/book.controller.js"
const router = express.Router()
router.delete('/', deleteBook)
export default router       