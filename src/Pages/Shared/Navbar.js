import React from 'react';
import { Link } from 'react-router-dom';
import image from '../../Images/pic.jpg'

const Navbar = () => {
    const navItem =
    <>
                    <li> <Link to='/' className='text-xl'>Home</Link></li>
                    <li> <Link to='about' className='text-xl'>About</Link></li>
                    <li> <Link to='projects' className='text-xl'>Projects</Link></li>
                    <li> <Link to='contact' className='text-xl'>Contact</Link></li>

      

       
        

        


    </>
    return (
        <div class="navbar bg-purple-100 sticky top-0 z-50">
        <div class="navbar-start">
          <div class="dropdown">
            <label tabindex="0" class="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            
             {navItem}
            </ul>
          </div>

          
             <a class="btn btn-ghost normal-case text-4xl ">Sayma</a>
        </div>
        <div class="navbar-center hidden lg:flex">
          <ul class="menu menu-horizontal p-0">
            
           {navItem}
          </ul>
          </div>
          </div>
    );
};

export default Navbar;