const MCQ = require('../models/mcq_pep');
// const sendQuestions = require('../db/firebase_config')
const asyncWrapper = require('../middleware/asyncWrapper');

const getAllMCQ = asyncWrapper(async (req, res, next) => {
        const data = await MCQ.find().sort('question');
        res.status(201).json({ data, length: data.length });
});

const createMCQ = asyncWrapper(async (req, res) => {
        const mcq_pcl = await MCQ.create(req.body);
        res.status(201).json(req.body);
});

const getSingleMCQ = asyncWrapper(async (req, res) => {
        const { id: mcq_pclID } = req.params;
        const mcq_pcl = await MCQ.findOne({ _id: mcq_pclID });

        if (!mcq_pcl) {
            return res.status(404).json(`No mcq_pcl with id: ${id}`);
        } else {
            return res.status(201).json({ mcq_pcl });

        }
    
});

const deleteMCQ = asyncWrapper(async (req, res) => {
        const { id: mcq_pclID } = req.params;
        const mcq = await MCQ.findOneAndDelete({ _id: mcq_pclID });

        if (!mcq) {
            return res.status(404).json(`No mcq with id: ${id}`);
        } else {
            return res.status(201).json({ mcq });

        }

});

const updateMCQ = asyncWrapper(async (req, res) =>  {
        const { id: mcq_pclID } = req.params
        const mcq = await McqPep.findOneAndUpdate(
            { _id: mcq_pclID },
            req.body,
            { new: true, runValidators: true,}
        );
        
        if (!mcq) {
            return res.status(404).json({ msg: `No question with id: ${mcq_pclID}` });
        }
        res.status(200).json({ mcq_pclID }); 
    
});

const editMCQ = asyncWrapper(async (req, res) => {
        const { id: mcq_pclID } = req.params
        const mcq = await McqPep.findOneAndUpdate(
            { _id: mcq_pclID },
            req.body,
            { new: true, runValidators: true, overwrite: false, }
        );
        
        if (!mcq) {
            return res.status(404).json({ msg: `No question with id: ${mcq_pclID}` });
        }
        res.status(200).json({ mcq_pclID });
    
});

module.exports = {
    getAllMCQ,
    createMCQ,
    getSingleMCQ,
    updateMCQ,
    deleteMCQ,
    editMCQ
   
}
