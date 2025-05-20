const express=require("express")
const router=express.Router();
const Book=require("../models/bookSchema")


//get all books

router.get("/",async(req,res)=>{
    try{
        const books=await Book.find();
        if(!books){
            return res.status(404).json({message:"No books found"});
        }
        res.status(200).json({message:"Books fetchd successfully",books});
    
    }catch(error){
        res.status(500).json({message:error.message});
    }
});

module.exports=router;

//post


//put


//delete

//get