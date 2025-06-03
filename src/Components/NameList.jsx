
import { Link } from "react-router-dom";
import { useState } from "react";

const NameList = () => {
 const NameList = [
    {
        id: 1,
        name: "John Doe"
    },
 ];

 const [names, setNames] = useState(NameList);
 
  const addNew = (name) => {
    setNames([...names, { id: names.length + 1, name }]);
  };

    return ( 

        <div className="row justify-content-center">
            <div className="col-6 my-5">
                <h1 className="text-center my-5">Name List</h1>
            <Link to="/nameForm" className="btn btn-primary mb-3">Add New Name</Link>
            <ul className="list-group">
                {NameList.map((item) => (
                    <li key={item.id} className="list-group-item text-center d-flex justify-content-between align-items-center">
                        {item.name}
                        <Link to={`/nameForm/${item.id}`} className="btn btn-secondary mx-2">Edit</Link>
                        <button className="btn btn-danger">Delete</button>
                    </li>
                ))}
            </ul>
           </div>     
            
            </div>
     );
}
 
export default NameList;