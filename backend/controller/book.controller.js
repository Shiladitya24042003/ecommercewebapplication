import Book from "../model/book.model.js"

export const getBook = async (req, res) => {
    try {
        const book = await Book.find();
        res.status(200).json(book)
    } catch (error) {
        console.log("Error :", error)
        return res.status(500).send({
            message: "Error while creating category"
        })
    }
}


export const deleteBook = async (req, res) => {
    try {
        // Await the result of the delete operation
        const query = { id: req.body.id };
        const result = await Book.deleteOne(query);

        // Check if a book was deleted
        if (result.deletedCount === 1) {
            console.log("Successfully deleted one document.");
        } else {
            console.log("No documents matched the query. Deleted 0 documents.");
        }

        // Send a success message if deleted
        res.status(200).json({ message: 'Successfully Deleted' });

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error deleting book', error });
    }
};
