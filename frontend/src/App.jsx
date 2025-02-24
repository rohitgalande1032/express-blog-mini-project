import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './Components/Home'
import Form from './Components/Form'
import Edit from './Components/Edit'


function App() {

  return (
    <BrowserRouter>

  <div className="bg-blue-600 p-4 shadow-md">
    
      <nav className="max-w-4xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-lg font-semibold hover:text-gray-200 transition duration-300">
          Home
        </Link>
        <Link to="/new" className="bg-white text-blue-600 px-4 py-2 rounded-lg font-medium hover:bg-gray-200 transition duration-300">
          New Blog
        </Link>
      </nav>
    </div>

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/new' element={<Form />} />
      <Route path='/edit/:id' element={<Edit />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
