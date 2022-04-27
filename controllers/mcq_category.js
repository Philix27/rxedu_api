const McqCategory = require('../models/mcq_category');
const asyncWrapper = require('../middleware/asyncWrapper');
const { createCustomError } = require('../errors/custom-error')

const getAll = asyncWrapper(async (req, res, next) => {
        const data = await McqCategory.find().sort('title');
        res.status(201).json({ data, length: data.length });
});

const create = asyncWrapper(async (req, res,) => {
        const data = await McqCategory.create(req.body);
        res.status(201).json(req.body);
});

const getSingle = asyncWrapper(async (req, res, next) => {
        const { id: docID } = req.params;
        const doc = await McqCategory.findOne({ _id: docID });

        if (!doc) {
            return next(createCustomError(`No mcq category found with the id: ${docID}`, 404));
        } else {
            return res.status(201).json({ doc });

        }
    
});

const deleteMcqCategory = asyncWrapper(async (req, res, next) => {
        const { id: docID } = req.params;
        const doc = await McqCategory.findOneAndDelete({ _id: docID });

        if (!doc) {
            return next(createCustomError(`No mcq category found with the id: ${docID}`, 404));
        } else {
            return res.status(201).json({ doc });
        }

});

const update = asyncWrapper(async (req, res, next) =>  {
        const { id: docID } = req.params
        const doc = await McqPep.findOneAndUpdate(
            { _id: docID },
            req.body,
            { new: true, runValidators: true,}
        );
        
        if (!doc) {
            return next(createCustomError(`No mcq category found with the id: ${docID}`, 404));
        }
        res.status(200).json({ docID }); 
    
});

const edit = asyncWrapper(async (req, res) => {
        const { id: docID } = req.params
        const doc = await McqPep.findOneAndUpdate(
            { _id: docID },
            req.body,
            { new: true, runValidators: true, overwrite: false, }
        );
        
        if (!doc) {
            return res.status(404).json({ msg: `No question with id: ${docID}` });
        }
        res.status(200).json({ docID });
    
});

module.exports = {
    getAll,
    create,
    getSingle,
    update,
    deleteMcqCategory,
    edit
   
}
