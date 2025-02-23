import React, { useEffect, useState } from 'react';

const Home = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await fetch('http://localhost:8080/blogs');
                const data = await response.json();
                setBlogs(data);
            } catch (error) {
                console.log("Error: ", error);
            }
        };

        getData();
    }, []);

    return (
        <div className="max-w-4xl mx-auto p-4">
            {blogs && blogs.map((blog, index) => (
                <div key={index} className="flex border border-gray-300 bg-white shadow-md rounded-xl p-4 w-full md:w-3/4 lg:w-2/3 mx-auto mt-5">
                    <div>
                        <h4 className="text-2xl font-semibold text-gray-800">{blog.title}</h4>
                        <h6 className="text-lg text-gray-600 mb-2">By {blog.author}</h6>
                        <p className="text-gray-700 text-base">{blog.content}</p>
                    </div>

                    <div>
                        
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Home;
