const ComicBook = require('../models/comicBook');

// Create a new comic book
exports.createComicBook = async (req, res) => {
    const comicBook = new ComicBook(req.body);
    try {
        await comicBook.save();
        res.status(201).send(comicBook);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Get all comic books with pagination, filtering, and sorting
exports.getComicBooks = async (req, res) => {
    try {
        let query = ComicBook.find();

        // Filtering
        if (req.query.authorName) {
            query = query.where('authorName').equals(req.query.authorName);
        }
        if (req.query.yearOfPublication) {
            query = query.where('yearOfPublication').equals(req.query.yearOfPublication);
        }
        if (req.query.price) {
            query = query.where('price').equals(req.query.price);
        }
        if (req.query.condition) {
            query = query.where('condition').equals(req.query.condition);
        }

        // Sorting
        if (req.query.sortBy) {
            const sortCriteria = req.query.sortBy.split(':');
            query = query.sort({ [sortCriteria[0]]: sortCriteria[1] === 'desc' ? -1 : 1 });
        }

        // Pagination
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const skip = (page - 1) * limit;

        query = query.skip(skip).limit(limit);

        const comicBooks = await query.exec();
        res.status(200).send(comicBooks);
    } catch (error) {
        res.status(400).send(error);
    }
};



// Get comic book details by ID
exports.getComicBookById = async (req, res) => {
    try {
        const comicBook = await ComicBook.findById(req.params.id);
        if (!comicBook) {
            return res.status(404).send();
        }
        res.status(200).send(comicBook);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Update comic book
exports.updateComicBook = async (req, res) => {
    try {
        const comicBook = await ComicBook.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!comicBook) {
            return res.status(404).send();
        }
        res.status(200).send(comicBook);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Delete comic book
exports.deleteComicBook = async (req, res) => {
    try {
        const comicBook = await ComicBook.findByIdAndDelete(req.params.id);
        if (!comicBook) {
            return res.status(404).send();
        }
        res.status(200).send(comicBook);
    } catch (error) {
        res.status(500).send(error);
    }
};
