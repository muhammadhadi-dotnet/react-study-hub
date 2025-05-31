const BlogsList = ({blogItems,handleClick}) => {
    return ( 
        <div className="container text-center my-5">
        <table className="table table-striped table-bordered">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Title</th>
                    <th scope="col">Author</th>
                    <th scope="col">price</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                {blogItems.map((blog, index) => (
                    <tr key={index}>
                        <th scope="row">{index + 1}</th>
                        <td>{blog.name}</td>
                        <td>{blog.email}</td>
                        <td>{blog.phone}</td>
                        <th scope="row">
                            <button type="button" className="btn btn-primary">Edit</button>
                            <button type="button" onClick={()=>handleClick(blog.id)} className="btn btn-danger">Delete</button>
                        </th>
                    </tr>
                ))}
                
            </tbody>
        </table>
        </div>
     );

}
 
export default BlogsList;