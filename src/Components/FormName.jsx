import { useState } from 'react';

const FormName = () => {
   
    const [name, setName] = useState('');
    const [data, setData] = useState([]);
    
    const handelSubmit = (e) => {
        e.preventDefault();
        const data = name;
        setData(data);
    }
  
    return ( 
        <div className="row justify-content-center">
        <div className="col-6 my-5">

            <h1 className="text-center my-5">Name Form</h1>
            <form onSubmit={handelSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text"
                     className="form-control"
                     value={name}
                     onChange={(e) => setName(e.target.value)}
                     placeholder="Enter your name" />
                </div>
                {/* <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" placeholder="Enter your email" />
                </div>
                <div className="mb-3">
                    <label htmlFor="phone" className="form-label">Phone</label>
                    <input type="tel" className="form-control" id="phone" placeholder="Enter your phone number" />
                </div> */}
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            <p className="mt-3">Your name is: {data}</p>
         </div>
        </div>
     );
}
 
export default FormName;