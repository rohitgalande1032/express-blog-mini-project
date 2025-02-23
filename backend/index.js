import express from 'express';
import cors from "cors";

const app = express();

const blogs = [
    {
      id: 1,
      title: "The Future of Web Development",
      author: "John Doe",
      content: "Web development is constantly evolving with new technologies like WebAssembly, AI-powered design, and the rise of serverless architecture.",
    },
    {
      id: 2,
      title: "Understanding React Hooks",
      author: "Jane Smith",
      content: "React Hooks introduced a revolutionary way to handle state and side effects in functional components without needing class components.",
    },
    {
      id: 3,
      title: "A Guide to Node.js Performance Optimization",
      author: "Robert Brown",
      content: "Optimizing Node.js applications involves techniques like caching, clustering, and using async operations effectively.",
    },
    {
      id: 4,
      title: "Why TypeScript is the Future of JavaScript",
      author: "Emily White",
      content: "TypeScript adds static typing to JavaScript, reducing bugs and making large-scale application development easier.",
    },
    {
      id: 5,
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
  blogs.push(req.body)
  res.status(200).send("Blog added!!!")
})

app.listen(8080, () => {
    console.log('Server is running on port 8080');
})