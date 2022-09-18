const express = require('express');
const router = express.Router();

const { 
    getAllMCQ,
    createMCQ,
    getSingleMCQ,
    updateMCQ,
    deleteMCQ,
    editMCQ
} = require('../controllers/mcq_pep');



router.route('/').get(getAllMCQ).post(createMCQ);
router.route('/:id').get(getSingleMCQ).patch(updateMCQ).delete(deleteMCQ);


module.exports = router;