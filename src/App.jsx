import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';



function App() {
  const [count, setCount] = useState(0)

  return (
    <>

	 <Router>
      
      <nav style={{ padding: '10px', backgroundColor: '#f0f0f0', marginBottom: '20px' }}>
        <Link to="/" style={{ margin: '10px' }}>🏠 Home</Link>
        <Link to="/about" style={{ margin: '10px' }}>📖 About</Link>
        <Link to="/contact" style={{ margin: '10px' }}>📞 Contact</Link>
      </nav>

      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>

      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          
        </p>
      </div>
      <p className="read-the-docs">
       
      </p>
    </>
  )
}

export default App
