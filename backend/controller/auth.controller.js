import User from "../model/user.model.js"
import bcryptjs from "bcryptjs"
export const signup = async (req, res) => {
    const cat_data = {
        userId: req.body.userId,
        name: req.body.name,
        email: req.body.email,
        password: await bcryptjs.hash(req.body.password, 10)
    }
    try {
        const user = await User.findOne({ userId: cat_data.userId })
        if (user)
            return res.status(400).json({ message: "User already logged in" })
        const category = await User.create(cat_data)
        return res.status(201).send(category)
    } catch (error) {
        console.log("Error while creating the category", error)
        return res.status(500).send({
            message: "Error while creating user"
        })
    }
}

export const login = async (req, res) => {
    try {
        const user_data = {
            userId: req.body.userId,
            email: req.body.email,
            password: req.body.password
        }
        const user = await User.findOne({ email: user_data.email })

        const match = await bcryptjs.compare(user_data.password, user.password)
        if (!user || !match) {
            return res.status(400).json({ message: "Invalid credentials" })
        } else {
            return res.status(201).json({
                message: "logged in Succesfully", user: {
                    _id: user._id,
                    name: user.name,
                    email: user.email,
                    userType: user.userType
                }
            })
        }
    } catch (error) {
        console.log("Error while creating the category", error)
        return res.status(500).send({
            message: "Internal Server Error!!!!"
        })
    }
}

export const change = async (req, res) => {
    try {
        const { userId, booksPurchased } = req.body;

        const updatedDocument = await User.findOneAndUpdate(
            { userId },
            {
                $push: { booksPurchased: { $each: booksPurchased } }, // Append new booksPurchased items
            },
            {
                new: true, // Return the updated document
                runValidators: true, // Ensure validation rules are applied
            }
        );

        if (!updatedDocument) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json(updatedDocument);
    } catch (error) {
        res.status(500).json({ message: "Error updating document", error });
    }
};
