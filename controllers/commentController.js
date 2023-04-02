const commentModel= require("../models/commentModel");



const createComment=async (req,res)=>{
  try {
   
      let {content,postId,userId}=req.body;





      let commentDetails= await commentModel.create(req.body);

      return res.status(201).send({status:true,data:commentDetails})
    
  } catch (error) {
     return res.status(500).send({status:false,message:error.message});
  }

}


const getComment=async (req,res)=>{
try {
    
} catch (error) {
    return res.status(500).send({status:false,message:error.message}); 
}


}





const updateComment=async (req,res)=>{
    try {
        
    } catch (error) {
        return res.status(500).send({status:false,message:error.message}); 
    }
    
    
    }






const deleteComment=async (req,res)=>{
    try {
        
    } catch (error) {
        return res.status(500).send({status:false,message:error.message}); 
    }
    
    
    }