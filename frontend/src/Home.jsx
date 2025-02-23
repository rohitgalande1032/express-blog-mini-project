import React, { useEffect, useState } from 'react'

const Home = () => {
    const [blogs, setBlogs] = useState([])

    useEffect(()=>{
        const getData = async () => {
            try {
                const response = await fetch('http://localhost:8080/blogs')
                const data = await response.json()
                //console.log(data)
                setBlogs(data)
            } catch (error) {
                console.log("Error: ", error)
            }
        }

        getData()
    }, [])
  return (
    <div>
        {blogs && blogs.map((blog, index) => (
            <div key={index}>
                <h4>{blog.title}</h4>
                <h6>{blog.author}</h6>
                <p>{blog.content}</p>
            </div>
        ))}
    </div>
  )
}

export default Home