const Book = require('../models/bookModel');


exports.getBooks = async (req, res) => {
  try {
    const books = await Book.find({}, { _id: 0, __v: 0 }); // Exclude _id & __v
    res.json(books);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};







exports.getBookById = async (req, res) => {
  try {
    const book = await Book.findOne({ id: req.params.id }, { _id: 0, __v: 0 });
    if (!book) return res.status(404).json({ message: 'Book not found' });
    res.json(book);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};




exports.createBook = async (req, res) => {
  const { title, author, publishedDate, genre } = req.body;
  if (!title || !author || !publishedDate || !genre) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const newBook = new Book({ title, author, publishedDate, genre });
    await newBook.save();
    res.status(201).json(newBook);
  } catch (error) {
    res.status(500).json({ message: 'Failed to create book', error });
  }
};






exports.updateBook = async (req, res) => {
  try {
    const book = await Book.findOneAndUpdate(
      { id: req.params.id },
      req.body,
      { new: true, projection: { _id: 0, __v: 0 } } // Exclude _id & __v
    );
    if (!book) return res.status(404).json({ message: 'Book not found' });
    res.json(book);
  } catch (error) {
    res.status(500).json({ message: 'Failed to update book', error });
  }
};




exports.deleteBook = async (req, res) => {
  try {
    const book = await Book.findOneAndDelete({ id: req.params.id });
    if (!book) return res.status(404).json({ message: 'Book not found' });
    res.json({ message: 'Book deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete book', error });
  }
};

