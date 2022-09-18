const express = require('express');
const router = express.Router();

const { 
    getAll,
    create,
    getSingle,
    update,
    deleteArticle,
    edit
} = require('../controllers/article');



router.route('/').get(getAll).post(create);
router.route('/:id').get(getSingle).patch(update).delete(deleteArticle);


module.exports = router;