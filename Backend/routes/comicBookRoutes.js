const express = require('express');
const router = express.Router();
const comicBookController = require('../controllers/comicBookController');

router.post('/comicBooks', comicBookController.createComicBook);
router.get('/comicBooks', comicBookController.getComicBooks);
router.get('/comicBooks/:id', comicBookController.getComicBookById);
router.patch('/comicBooks/:id', comicBookController.updateComicBook);
router.delete('/comicBooks/:id', comicBookController.deleteComicBook);

module.exports = router;
