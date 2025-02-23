import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Form = () => {
    const [title, setTitle] = useState("")
    const [author, setAuthor] = useState("")
    const [content, setContent] = useState("")

    const navigate = useNavigate()

    const handleClick = async () => {
        const data = await fetch("http://localhost:8080/newblog", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                title: title,
                author: author,
                content: content
            })
        })
        //const json = await data.json()
        console.log(data)
        navigate("/")

        setTitle("")
        setAuthor("")
        setContent("")
    }


  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-2xl mt-24">
      <h2 className="text-2xl font-semibold text-center mb-4 text-gray-800">Create a Blog</h2>
      <div className="space-y-4">
        <input
          onChange={(e)=> setTitle(e.target.value)}
          value={title}
          name="title"
          id="title"
          placeholder="Enter your blog title"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          onChange={(e)=> setAuthor(e.target.value)}
          value={author}
          name="author"
          id="author"
          placeholder="Enter your name"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <textarea
          onChange={(e)=> setContent(e.target.value)}
          value={content}
          name="content"
          id="content"
          placeholder="Enter your blog content"
          rows="4"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button onClick={handleClick} className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition duration-300">
          Add Blog
        </button>
      </div>
    </div>
  );
};

export default Form;
