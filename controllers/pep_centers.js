const Pepcenter = require('../models/pep_centers');

export const getAllPepcenters = async (req, res, next) => {
    try {
        const pepcenter = await Pepcenter.find();
        res.status(201).json({pepcenter});
    } catch (error) {
           res.status(500).json({msg: error});
           
    }
}

export const createPepcenter = async (req, res) => {
   try {
    const pepcenter = await Pepcenter.create(req.body);
    res.status(201).json(req.body);
    
} catch (error) {
       res.status(500).json({msg: error});
       
   }
}

export const getSinglePepcenter = async (req, res) => {
   
    try {
        const {id:pepcenterID} = req.params;
        const pepcenter = await Pepcenter.findOne({_id:pepcenterID});

        if(!pepcenter){
            return  res.status(404).json(`No pepcenter with id: ${id}`);
        } else {
           return res.status(201).json({pepcenter});

        }
        
    } catch (error) {res.status(500).json({msg: error});}
    
}

export const updatePepcenter = (req, res) => {
    res.send('Update pepcenter - From the controller')
    
}

export const deletePepcenter = async (req, res) => {
   
    try {
        
        const {id:pepcenterID} = req.params;
        const pepcenter = await Pepcenter.deleteOne({_id:pepcenterID});

        if(!pepcenter){
            return  res.status(404).json(`No pepcenter with id: ${id}`);
        } else {
           return res.status(201).json({pepcenter});

        }
        
    } catch (error) {
        res.status(500).json({ msg: error });
    }
    
}

export const editPepcenter = (req, res) => {
    res.send('Edit : PUT pepcenter - From the controller')
    
}

