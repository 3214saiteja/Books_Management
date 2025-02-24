const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  id: { type: Number, unique: true }, // Custom auto-increment ID
  title: { type: String, required: true },
  author: { type: String, required: true },
  publishedDate: { type: Date, required: true },
  genre: { type: String, required: true }
}, { timestamps: true });

// Auto-increment logic before saving a new book
bookSchema.pre('save', async function (next) {
  if (!this.id) {
    const lastBook = await this.constructor.findOne().sort({ id: -1 });
    this.id = lastBook ? lastBook.id + 1 : 1;
  }
  next();
});

const Book = mongoose.model('Book', bookSchema);
module.exports = Book;
