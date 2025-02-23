import express from 'express';
import cors from "cors";
import { v4 as uuidv4 } from 'uuid';

const app = express();

let blogs = [
    {
      id: uuidv4(),
      title: "The Future of Web Development",
      author: "John Doe",
      content: "Web development is constantly evolving with new technologies like WebAssembly, AI-powered design, and the rise of serverless architecture.",
    },
    {
      id: uuidv4(),
      title: "Understanding React Hooks",
      author: "Jane Smith",
      content: "React Hooks introduced a revolutionary way to handle state and side effects in functional components without needing class components.",
    },
    {
      id: uuidv4(),
      title: "A Guide to Node.js Performance Optimization",
      author: "Robert Brown",
      content: "Optimizing Node.js applications involves techniques like caching, clustering, and using async operations effectively.",
    },
    {
      id: uuidv4(),
      title: "Why TypeScript is the Future of JavaScript",
      author: "Emily White",
      content: "TypeScript adds static typing to JavaScript, reducing bugs and making large-scale application development easier.",
    },
    {
      id: uuidv4(),
      title: "Exploring AI in Web Applications",
      author: "Michael Johnson",
      content: "AI is transforming web applications with features like chatbots, recommendation systems, and personalized content.",
    }
  ];

  // Use CORS middleware
app.use(cors());
// Use JSON middleware
app.use(express.json());


// OR, if you want to allow only your frontend:
// app.use(cors({ origin: "http://localhost:5173" }));

app.get("/", (req, res) => {
    res.send("Welcome to the Blog API");
})


app.get("/blogs", (req, res) => {
    res.json(blogs);
})

app.post("/newblog", (req, res) => {
  console.log(req.body)
  blogs.push({...req.body, id: uuidv4()})
  res.status(200).json({msg: "Blog created successfully"})
})

app.delete("/delete/:id", (req, res) => {
  console.log(req.params.id)
  
  const filteredBlogs = blogs.filter((item) => {
    return item.id != req.params.id
  })

  console.log(filteredBlogs)
  blogs = filteredBlogs
  res.status(200).json(filteredBlogs)
})

app.listen(8080, () => {
    console.log('Server is running on port 8080');
})