import Book from "../model/book.model.js"
export const creatNewCategory = async (req, res) => {
    const cat_data = {
        id:req.body.id,
        name: req.body.name,
        price: req.body.price,
        category: req.body.category,
        title: req.body.title,
        image: req.body.image
    }
    try {
        const category = await Book.create(cat_data)
        return res.status(201).send(category)
    } catch (error) {
        console.log("Error while creating the category", error)
        return res.status(500).send({
            message: "Error while creating category"
        })
    }
}