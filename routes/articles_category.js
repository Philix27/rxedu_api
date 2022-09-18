const express = require('express');
const router = express.Router();

const { 
    getAll,
    create,
    getSingle,
    update,
    deleteArticleCategory,
    edit
} = require('../controllers/articles_category');

router.route('/').get(getAll).post(create);
router.route('/:id').get(getSingle).patch(update).delete(deleteArticleCategory);

module.exports = router;