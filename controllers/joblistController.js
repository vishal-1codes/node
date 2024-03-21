const Joblist=require('../models/joblist')

const createJoblist=async(req,res)=>{
    try{
        const {postuser,jobposition,joblocation,joblink,companyname}=req.body;
        const joblist=await Joblist.create({postuser,jobposition,joblocation,joblink,companyname})
        res.status(201).json(joblist)
    }catch(error){
        res.status(500).json({message:error.message})
    }
};

module.exports={
    createJoblist
}