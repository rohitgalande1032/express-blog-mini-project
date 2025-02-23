import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './Components/Home'
import Form from './Components/Form'

function App() {

  return (
    <BrowserRouter>

    <div>
      <Link to="/">Home</Link>
      <Link to={"/new"}>New Blog</Link>
    </div>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/new' element={<Form />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
