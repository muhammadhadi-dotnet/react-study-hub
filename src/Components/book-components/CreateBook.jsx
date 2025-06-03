import React from "react";
import { showToast } from '../ToastAlert';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BOOK_API_ENDPOINTS } from '../Api/bookEndPoint';

const CreateBook = () => {
    
   const navigate = useNavigate(); 
   const [formData, setFormData] = useState({
      Name: '',
      Author:'',
      Price: ''
   });
   const submitForm = (e) => {
      e.preventDefault();
      const bookData= {
         Name: formData.Name,
         Author: formData.Author,
        Price: formData.Price
        };
        console.log('bookData', bookData);
        fetch(BOOK_API_ENDPOINTS.ADD_BOOK, {
             method: 'POST',
             headers: {
                'Content-Type': 'application/json',
             },
             body: JSON.stringify(bookData),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log('Success:', data);
            showToast('Book created successfully!', 'success');
            navigate('/book');
        })
        .catch((error) => {
            console.error('Error:', error);
        });

   }
    return (
        <div className="row justify-content-center">
            <div className="col-6 my-5">
                <h1 className="text-center my-5">Create New Book</h1>
                <form onSubmit={submitForm}>
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
                    <button type="submit" className="btn btn-primary">Create Book</button>
                    
                </form>
            </div>
        </div>   
      );
}
 
export default CreateBook;