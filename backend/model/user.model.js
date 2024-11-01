import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    userId: {
        type: String,
        unique: true
    },
    name: {
        type: String,
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    booksPurchased : {
        type: [String],
    },
    userType: {
        type: String,
        default: "CUSTOMER",
        enum: ["CUSTOMER", "ADMIN"]
    }
}, { timestamps: true, versionKey: false })

const User = mongoose.model("User", userSchema)

export default User