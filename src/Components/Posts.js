    import React from 'react';
    import { useQuery } from '@tanstack/react-query';

    const fetchPosts = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
    };

    const Post = () => {
    const { data, status } = useQuery({
        queryKey: ['posts'],
        queryFn: fetchPosts,
    });
    console.log(status);
    if (status === 'pending') return <p>Loading...</p>;
    if (status === 'error') return <p>Error loading posts.</p>;

    return (
        
        <div className="container text-center my-5">
        <h1 className="text-center">Welcome to the Post Page</h1>
        <p className="lead">This is a simple Post application using React and React Query.</p>
        <div className="col-md-8 text-center mx-auto">
            <p>Here you can view and manage your posts.</p>
            <button className="btn btn-primary mb-3">Add Post</button>
            <table className="table">
            <thead>
                <tr>
                <th scope="col">ID</th>
                <th scope="col">Title</th>
                <th scope="col">Content</th>
                </tr>
            </thead>
            <tbody>
                {data?.map((post) => (
                <tr key={post.id}>
                    <td>{post.id}</td>
                    <td>{post.title}</td>
                    <td>{post.body}</td>
                </tr>
                ))}
            </tbody>
            </table>
        </div>
        </div>
    );
    };

    export default Post;
