import { useState } from 'react';
import logo from '../twind.svg';
const Header = () => {

  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu((state) => !state);
  }

  return <div className="flex justify-between p-4 bg-slate-300 items-center">
    <div className='flex gap-4 items-center'>
      <img src={logo} alt="logo" className="w-14 h-8" />
      <span className='font-extrabold text-slate-700 text-xl'>
        Tailwind CSS
      </span>
    </div>

    <div className='items-center gap-4 mr-4 hidden md:flex hover:bg-yellow-400'>
        <a href="/">Home</a>
        <a href="/">About</a>
        <a href="/">Contact Us</a>
    </div>

    <div className='md:hidden cursor-pointer' onClick={toggleMenu}>
      <div className='w-6'>
        <div className='rounded-line mb-1'>
        </div>
        <div className='rounded-line mb-1'>
        </div>
        <div className='rounded-line'>
        </div>
      </div>
    </div>

    
    
    {showMenu && <div className='absolute top-16 right-0'>
      <div className='relative flex flex-col bg-slate-200 rounded-b-md'>
        <a href="/" 
          className='p-4'
        >Home</a>
        <a href="/" className='p-4'
        >About</a>
        <a href="/" className='p-4'
        >Contact Us</a>
      </div>
    </div>}
  </div>

}

export default Header;