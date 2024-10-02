import mongoose from "mongoose"

const bookSchema = new mongoose.Schema({
    id: {
        type: String
    },
    name: {
        type: String
    },
    title: {
        type: String
    },
    price: {
        type: Number
    },
    category: {
        type: String
    },

    image: {
        type: String
    }

}, { timestamps: true, versionKey: false })

const Book = mongoose.model("Book", bookSchema)
export default Book