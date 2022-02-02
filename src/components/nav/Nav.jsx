import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { GiHamburgerMenu } from 'react-icons/gi';

export default function Nav() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const menuElem = useSelector((state) => state.menu);

  return (
    <header>
      <nav className="flex justify-between py-4 px-4 xl:px-36 bg-gray-300 lg:bg-gray-50 ">
        <div className="container px-4 flex flex-wrap lg:flex-nowrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <img
              src="http://nicapodcasts.local/wp-content/uploads/2022/02/logo-300x134.png"
              alt="logo"
              className="w-36 sm:w-48"
            />
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <GiHamburgerMenu />
            </button>
          </div>
          <div className={`lg:flex flex-grow items-center${
            navbarOpen ? ' flex justify-center flex-col lg:flex-row mt-6 lg:mt-0 ' : ' hidden'}`}
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="lg:mr-8 font-bold lg:hidden text-center transition duration-150 border-b-4 border-transparent hover:border-myred hover:cursor-pointer">
                MENU
              </li>
              {menuElem
            && menuElem.map((elem) => (
              <li className="lg:mr-8 text-center transition duration-150 border-b-4 border-transparent hover:border-myred hover:cursor-pointer">
                {elem.title}
              </li>
            ))}
              <li className="lg:mr-8 lg:hidden text-center transition duration-150 border-b-4 border-transparent hover:border-myred hover:cursor-pointer">
                Subscribe
              </li>
              <li className="lg:mr-8 lg:hidden text-center transition duration-150 border-b-4 border-transparent hover:border-myred hover:cursor-pointer">
                Sign-in
              </li>
            </ul>
            <div className="lg:flex flex-col hidden lg:flex-row list-none lg:ml-auto">
              <button
                type="button"
                className="xl:w-32 bg-myred hover:bg-white text-white hover:text-myred border border-myred py-2 px-4 rounded-sm lg:mr-6"
              >
                Subscribe
              </button>
              <button
                type="button"
                className="xl:w-32 bg-myred hover:bg-white text-white hover:text-myred border border-myred py-2 px-4 rounded-sm"
              >
                Sign-in
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
