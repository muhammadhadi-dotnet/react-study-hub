const BlogsList = (props) => {

    const blogItems = props.blogItems;
    return ( 
        <div className="container text-center my-5">
            <h1 className="text-center">{props.title}</h1>
        <table className="table table-striped table-bordered">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Title</th>
                    <th scope="col">Author</th>
                    <th scope="col">price</th>
                </tr>
            </thead>
            <tbody>
                {blogItems.map((blog, index) => (
                    <tr key={index}>
                        <th scope="row">{index + 1}</th>
                        <td>{blog.title}</td>
                        <td>{blog.Author}</td>
                        <td>{blog.price}</td>
                    </tr>
                ))}
                
            </tbody>
        </table>
        </div>
     );

}
 
export default BlogsList;