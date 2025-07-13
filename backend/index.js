import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import user_model from "./model/user.model.js"
import bookRouter from "./routes/book.routes.js"
import creatRouter from "./routes/category.routes.js"
import userRouter from "./routes/auth.routes.js"
import deleteBooksRouter from "./routes/deletebooks.routes.js"
import bcrypt from "bcryptjs"
import cors from "cors"

dotenv.config()
const app = express()
app.use(express.json())

app.use(cors())

const PORT = process.env.PORT || 3000
const db_URL = process.env.DB_URL

/**
 * connection to database
 */
try {
    mongoose.connect(db_URL)
    console.log("Connected to MongoDB")
} catch (error) {
    console.log("Error", error)
}

const db = mongoose.connection

db.on("error", () => {
    console.log("Error while connecting MongoDB")
})
db.once("open", () => {
    console.log("Connected to MongoDB")
    init()
})

async function init() {
    try {
        let user = await user_model.findOne({ userId: "admin" })
        if (user) {
            console.log("Admin is already present")
            return
        }
    } catch (err) {
        console.log("Error while reading the data", err)
    }


    try {
        user = await user_model.create({
            name: "Subham",
            email: "subham12345@gmail.com",
            userType: "ADMIN",
            password: bcrypt.hashSync("welcome1", 8)
        })
        console.log("Admin created", user)
    } catch (err) {
        console.log("Error while creating admin", err)
    }
}



/**
 * Stiching rouutes
 */
app.use("/book", bookRouter)
app.use("/category", creatRouter)
app.use("/user", userRouter)
app.use('/del', deleteBooksRouter)
app.use('/getUser', userRouter)
app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
})