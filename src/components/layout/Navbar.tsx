import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
     <nav className=" w-full bg-nsnoonz-blue fixed top-0 left-0 drop-shadow-lg  p-3  z-10">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-xl font-bold">Nsnoonz</Link>
        <div>
					{/* <Link to="/Index" className="text-white px-4 hover:text-gray-400">Home</Link> */}
          <a href="https://nsnoonz-react.vercel.app/" target="_blank" className="text-white px-4 hover:text-gray-400">MyResume</a>
          <Link to="/Project" className="text-white px-4 hover:text-gray-400">Project</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;