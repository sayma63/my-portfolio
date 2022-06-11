import logo from './logo.svg';
import './App.css';
import Navbar from './Pages/Shared/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Skill from './Pages/Home/Skill';
import Projects from './Pages/Home/Projects';
import About from './Pages/Home/About';
import DetailProject from './Pages/Home/DetailProject';
import Footer from './Pages/Shared/Footer';
import Contact from './Pages/Home/Contact';
import Blog from './Pages/Home/Blog';

function App() {
  return (
    <div className="mx-auto bg-purple-100">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='home' element={<Home></Home>}></Route>
        <Route path='projects' element={<Projects></Projects>}></Route>
        <Route path='contact' element={<Contact></Contact>}></Route>
        <Route path='skill' element={<Skill></Skill>}></Route>
        <Route path='blog' element={<Blog></Blog>}></Route>
        <Route path='/projects/:id' element={<DetailProject></DetailProject>}></Route>
        <Route path='about' element={<About></About>}></Route>

        
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
