import logo from './logo.svg';
import './App.css';
import Navbar from './Pages/Shared/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Skill from './Pages/Home/Skill';
import Projects from './Pages/Home/Projects';
import About from './Pages/Home/About';

function App() {
  return (
    <div className="mx-auto">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='home' element={<Home></Home>}></Route>
        <Route path='projects' element={<Projects></Projects>}></Route>
        <Route path='skill' element={<Skill></Skill>}></Route>
        <Route path='about' element={<About></About>}></Route>

        
      </Routes>
    </div>
  );
}

export default App;
