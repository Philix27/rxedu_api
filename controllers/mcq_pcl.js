const McqPcl = require('../models/mcq_pcl');
const sendQuestions = require('../db/firebase_config')

 const getAllMcqPcl = async (req, res, next) => {
    try {
        const mcq_pcl = await McqPcl.find();
        res.status(201).json({mcq_pcl});
    } catch (error) {
           res.status(500).json({msg: error});
           
       }
    
}

 const createMcqPcl = async (req, res) => {
   try {
       sendQuestions(req.body);
    // const mcq_pcl = await McqPcl.create(req.body);
    res.status(201).json(req.body);
    
} catch (error) {
       res.status(500).json({msg: error});
       
   }
}

 const getSingleMcqPcl = async (req, res) => {
   
    try {
        const {id:mcq_pclID} = req.params;
        const mcq_pcl = await McqPcl.findOne({_id:mcq_pclID});

        if(!mcq_pcl){
            return  res.status(404).json(`No mcq_pcl with id: ${id}`);
        } else {
           return res.status(201).json({mcq_pcl});

        }
        
    } catch (error) {res.status(500).json({msg: error});}
    
}


const deleteMcqPcl = async (req, res) => {
   
    try {
        
        const {id:mcq_pclID} = req.params;
        const mcq_pcl = await McqPcl.deleteOne({_id:mcq_pclID});

        if(!mcq_pcl){
            return  res.status(404).json(`No mcq_pcl with id: ${id}`);
        } else {
           return res.status(201).json({mcq_pcl});

        }
        
    } catch (error) {
        res.status(500).json({ msg: error });
    }
    
}

const updateMcqPcl = async (req, res) =>  {
    try {
        const { id: mcq_pclID } = req.params
        
        const mcq = await  McqPep.findOneAndUpdate({ _id: mcq_pclID }, req.body, {
            new: true, runValidators: true,
        });
        
        if (!mcq) {
            return res.status(404).json({ msg: `No question with id: ${mcq_pclID}` });
        }
        res.status(200).json({ mcq_pclID });
    } catch(error) {
        res.status(500).json({msg: mcq_pclID });
    
    }

    
    
}

const editMcqPcl = async (req, res) =>  {
    try {
        const { id: mcq_pclID } = req.params
        
        const mcq = await McqPep.findOneAndUpdate({ _id: mcq_pclID }, req.body, {
            new: true, runValidators: true, overwrite: false,
        });
        
        if (!mcq) {
            return res.status(404).json({ msg: `No question with id: ${mcq_pclID}` });
        }
        res.status(200).json({ mcq_pclID });
    } catch(error) {
        res.status(500).json({msg: mcq_pclID });
    
    }

    
    
}



module.exports = {
    getAllMcqPcl,
    createMcqPcl,
    getSingleMcqPcl,
    updateMcqPcl,
    deleteMcqPcl,
    editMcqPcl
   
}
