import React from 'react';

const Navbar = () => {
    const navItem =
    <>
        <li> <a href='#home' className='text-xl'>Home</a></li>
        <li> <a href='#contact' className='text-xl'>Contact</a></li>
        <li> <a href='#about'  className='text-xl'>About</a></li>
        <li> <a href='#skill'  className='text-xl'>Skils</a></li>
        <li> <a href='#projects'  className='text-xl'>Projects</a></li>

       
        

        


    </>
    return (
        <div class="navbar bg-white sticky top-0 z-50">
        <div class="navbar-start">
          <div class="dropdown">
            <label tabindex="0" class="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            
             {navItem}
            </ul>
          </div>
          <a class="btn btn-ghost normal-case text-4xl">Sayma</a>
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