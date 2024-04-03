import Book from "../model/book.model";

export const getBooks = async (req, res) => {
    try {
        const books = await Book.find();
        res.status(200).json(books);
    } catch (error) {
       console.log("Error", error);
       res.status(500).json(error)
    }
}