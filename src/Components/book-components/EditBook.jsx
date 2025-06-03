import React, { use } from 'react'
import { useState,useEffect } from 'react';
import { useParams,useNavigate } from "react-router-dom";
import { BOOK_API_ENDPOINTS } from '../Api/bookEndPoint';
import { showToast } from '../ToastAlert';
import usePost from "../usePost";

const EditBook = () => {
const { id } = useParams();
const { sendData, loading } = usePost();
const navigate = useNavigate();

const [formData, setFormData] = useState({
    Id: '',
    Name: '',
    Author: '',
    Price: ''
});

useEffect(() => {
     let isMounted = true;
    fetch(BOOK_API_ENDPOINTS.GET_BOOK_BY_ID + `/${id}`)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        if(isMounted){
        const bookData = data.result;
        showToast('Book data fetched successfully!', 'success');
        setFormData({
            Id: bookData.id,
            Name: bookData.name,
            Author: bookData.author,
            Price: bookData.price
         })
        }
    })
     .catch((error) => {
      if (isMounted) {
            showToast('Error fetching book data!'+error, 'error');
        }    
     });

   return () => {
        isMounted = false;  
    };
}, [id]);


const submitForm =async (e) => {
    e.preventDefault();
    // console.log("id",id);
    const bookData = {
        Id: id,
        Name: formData.Name,
        Author: formData.Author,
        Price: formData.Price
    };    

    const result =await sendData(BOOK_API_ENDPOINTS.UPDATE_BOOK, bookData, "PUT");
    showToast(result.message, 'success');
    navigate('/book');
} 
 return (
        <div className="row justify-content-center">
            <div className="col-6 my-5">
                <h1 className="text-center my-5">Edit Book </h1>
                <form onSubmit={submitForm}>
                    <input htmlFor="Id" type="hidden" value={formData.Id} />
                    <div className="mb-3">
                        <label htmlFor="bookName" className="form-label">Book Name</label>
                        <input type="text"
                         value={formData.Name}
                         onChange={(e) => setFormData({ ...formData, Name: e.target.value })}
                         className="form-control" 
                         placeholder='book name' id="bookName" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="author" className="form-label">Author</label>
                        <input type="text"
                         value={formData.Author}
                         onChange={(e) => setFormData({ ...formData, Author: e.target.value })}
                         className="form-control" placeholder='author name' id="author" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="price" className="form-label">Price</label>
                        <input type="number"
                            value={formData.Price}
                            onChange={(e) => setFormData({ ...formData, Price: e.target.value })}    
                        className="form-control"
                         placeholder='price' id="price" required />
                    </div>
                    <button type="submit" className="btn btn-primary">Edit Book</button>
                    
                </form>
            </div>
        </div>   
      );
}
 
export default EditBook;