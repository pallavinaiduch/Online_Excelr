/* eslint-disable no-unused-vars */
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Dashboard = () => {

  useEffect(()=>{
        const fetchBooks=async()=>{
            try{
                const res= await axios.get("http://localhost:5000/api/books/fetchAllBooks");
                console.log(res.data);
            }
            catch(error){
                console.log(error);
            }
        }
        fetchBooks();
  }, []);
  return (
    <>
    <Link to={'/save'} className='btn btn-primary'>AddBook</Link>
    <div>Table to print</div>
    </>
  )
}

export default Dashboard
