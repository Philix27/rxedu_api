const express = require('express');
const router = express.Router();

const { 
    getAll,
    create,
    getSingle,
    update,
    deleteUser,
    edit
} = require('../controllers/user');



router.route('/').get(getAll).post(create);
router.route('/:id').get(getSingle).patch(update).delete(deleteUser);


module.exports = router;