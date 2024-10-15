const mongoose = require('mongoose');

const comicBookSchema = new mongoose.Schema({
    bookName: String,
    authorName: String,
    yearOfPublication: Number,
    price: Number,
    discount: Number,
    numberOfPages: Number,
    condition: String,
    description: String,
});

const ComicBook = mongoose.model('ComicBook', comicBookSchema);

module.exports = ComicBook;
