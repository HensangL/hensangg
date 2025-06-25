import React from 'react';

function Navbar() {
  return (
    <div  className='text-white '>
      <nav className='bg-gray-950 p-3 relative ' >
        <ul className='flex '>
            <li className='hover:text-green-700 font-mono text-lg'>Hensang</li>
            <div className='absolute right-10 gap-4 top-5 flex text-sm'>
          <li className='hover:text-green-700 font-mono'><a href='#home'>Home</a></li>
          <li className='hover:text-green-700 font-mono'><a href="#skills">Aboutme</a></li>
          <li className='hover:text-green-700 font-mono'><a href='#work'>Works</a></li>
          <li className='hover:text-green-700 font-mono'><a href="#footer">Contacts</a></li>
          </div>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
