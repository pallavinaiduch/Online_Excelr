const express = require('express');
const router = express.Router();
const Book = require('../models/bookSchema');

// GET all books
router.get('/fetchALLBooks', async (req, res) => {
    try {
        const books = await Book.find();
        if (books.length === 0) {
            return res.status(404).json({ message: "No books found" });
        }
        res.status(200).json({ message: "Books fetched successfully", books });
   } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


//api for save book

router.post('/saveBook',async(req,res)=>{
    const {title,author,genre,price}=req.body;
    try{
        const newBook=new Book({
            title,
            author,
            genre,
            price
        })
        await newBook.save()
    res.status(201).json({message:"Book saved successfually",book:newBook});
    }
    catch(error){
        res.status(500).json({message:error.message});
    }
})

//delete book by id

router.delete('deleteBook/:id',async(req,res)=>{
    try{
        const book=await Book.findByIdAndDelete(req.params.id);
        if(!book){
            return res.status(404).json({message:"Book not found"});
        }
        res.status(200).json({message:"Book deleted successfuly"});
    }
    catch(error){
        res.status(500).json({message:error.message});
    }
})





router.get("/",async(req,res)=>{
    res.json({
        message:"Hello from book routes"
    })
})
module.exports = router;