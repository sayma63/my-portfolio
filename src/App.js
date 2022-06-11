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
import NotFound from './Pages/NotFound';
import Service from './Pages/Home/Service';
import Project1 from './Pages/Shared/Project1';
import Project2 from './Pages/Shared/Project2';
import Project3 from './Pages/Shared/Project3';
import Project4 from './Pages/Shared/Project4';
import Project5 from './Pages/Shared/Project5';

function App() {
  return (
    <div className="mx-auto bg-purple-100">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='home' element={<Home></Home>}></Route>
        <Route path='projects' element={<Projects></Projects>}></Route>
        <Route path='project1' element={<Project1></Project1>}></Route>
        <Route path='project2' element={<Project2></Project2>}></Route>
        <Route path='project3' element={<Project3></Project3>}></Route>
        <Route path='project4' element={<Project4></Project4>}></Route>
        <Route path='project5' element={<Project5></Project5>}></Route>
        <Route path='contact' element={<Contact></Contact>}></Route>
        <Route path='skill' element={<Skill></Skill>}></Route>
        <Route path='blog' element={<Blog></Blog>}></Route>
        <Route path='service' element={<Service></Service>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
        <Route path='/projects/:id' element={<DetailProject></DetailProject>}></Route>
        <Route path='about' element={<About></About>}></Route>

        
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
