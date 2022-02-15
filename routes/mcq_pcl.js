const express = require('express');
const router = express.Router();

const { 
    getAllMcqPcl,
    createMcqPcl,
    getSingleMcqPcl,
    updateMcqPcl,
    deleteMcqPcl,
    editMcqPcl
} = require('../controllers/mcq_pcl');



router.route('/').get(getAllMcqPcl).post(createMcqPcl);
router.route('/:id').get(getSingleMcqPcl).patch(updateMcqPcl).delete(deleteMcqPcl);


module.exports = router;