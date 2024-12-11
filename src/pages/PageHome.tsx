import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as IconsBrand from '@fortawesome/free-brands-svg-icons';
import * as Icons from '@fortawesome/free-solid-svg-icons';

import ImgProfile from '../assets/profile/me-2.jpg';
const Home: React.FC = () => {
  return (
    <>
    <div className="min-h-screen relative overflow-hidden flex flex-col justify-center ">
      <div className="absolute inset-0 bg-nsnoonz-light2 clip-triangle" style={{clipPath: 'polygon(100% 0%, 100% 100%, 0% 100%)'}}></div>
      <div className="absolute inset-0 bg-nsnoonz-light3 clip-triangle-right" style={{clipPath: 'polygon(0 100%, 0% 0%, 100% 0 )'}} ></div>
      <div className="relative flex justify-center font-SansThai">
        <div className="text-center p-6 bg-nsnoonz-light1 bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg">
          <div className={`flex flex-col justify-center items-center p-5`}>
            <img src={ImgProfile} alt="Profile" className="w-32 h-32 rounded-full shadow-lg object-cover"></img>
            <p className="text-2xl font-bold mb-4 mt-4 text-balance text-nsnoonz-blue">Hello, My name is Supavadee</p>
            <p className="text-balance">I'm a Full-Stack Web Developer focused on creating web applications and RESTful APIs with Node.js</p>
            <p className="text-balance">I have a passion for crafting efficient and innovative software solutions.</p>
            <p className="text-balance">With a love for coding and problem-solving, I'm always eager to take on new challenges.</p>
            <div className="mt-10 flex space-x-4 justify-center">
              <button className="flex justify-center items-center  p-2 rounded-lg bg-gradient-to-r from-pink-500 to-yellow-500 text-white font-semibold shadow-md hover:from-pink-600 hover:to-yellow-600">
                <a href="https://github.com/Nsnoonz" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
                  <FontAwesomeIcon icon={IconsBrand.faGithub} className="text-3xl" /><span>Nsnoonz</span>
                </a>
              </button>
              <button className="flex justify-center items-center  p-2 rounded-lg bg-gradient-to-r from-pink-500 to-yellow-500 text-white font-semibold shadow-md hover:from-pink-600 hover:to-yellow-600">
                <a href="https://nsnoonz-react.vercel.app/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
                <FontAwesomeIcon icon={Icons.faEnvelope} className="text-3xl" /><span>My Resume</span>
                </a>
              </button>
              <button className="flex justify-center items-center  p-2 rounded-lg bg-gradient-to-r from-blue-800 to-yellow-500 text-white font-semibold shadow-md hover:from-blue-900 hover:to-yellow-600">
                <Link to="/Project" className="flex items-center space-x-2"><FontAwesomeIcon icon={Icons.faArrowRight} className="text-3xl" /><span>GO TO HomeWork</span></Link>              
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

  </>
  );
};

export default Home;