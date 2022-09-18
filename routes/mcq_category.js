const express = require('express');
const router = express.Router();

const { 
    getAll,
    create,
    getSingle,
    update,
    deleteMcqCategory,
    edit
} = require('../controllers/mcq_category');

router.route('/').get(getAll).post(create);
router.route('/:id').get(getSingle).patch(update).delete(deleteMcqCategory);

module.exports = router;