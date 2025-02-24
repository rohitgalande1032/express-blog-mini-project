import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Edit = () => {
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const { id } = useParams();

  const navigate = useNavigate()

  useEffect(() => {
    const getData = async () => {
      const data = await fetch(`http://localhost:8080/edit/${id}`);
      const json = await data.json();

      const { author, title, content } = json;

      setTitle(title);
      setAuthor(author);
      setContent(content);
    };

    getData();
  }, [id]); // ✅ dependency array to [id]


  const handleClick = async (id) => {
    await fetch(`http://localhost:8080/edit/${id}`, {
        method: "POST",
        headers: {
            "Content-type" : "application/json"
        }, 
        body: JSON.stringify({
            author: author,
            title: title,
            content: content
        })
    })
    navigate("/")
    

  }

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Edit Blog</h2>

      <div className="mb-4">
        <label htmlFor="title" className="block text-gray-700 font-medium">
          Title
        </label>
        <input
          type="text"
          id="title"
          value={title}
          name="title"
          onChange={(e) => setTitle(e.target.value)}
          className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="author" className="block text-gray-700 font-medium">
          Author
        </label>
        <input
          type="text"
          id="author"
          value={author}
          name="author"
          onChange={(e) => setAuthor(e.target.value)}
          className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="content" className="block text-gray-700 font-medium">
          Content
        </label>
        <textarea
          rows={6}
          id="content"
          value={content}
          name="content"
          onChange={(e) => setContent(e.target.value)}
          className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <button onClick={()=>handleClick(id)} className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300">
        Save Changes
      </button>
    </div>
  );
};

export default Edit;
