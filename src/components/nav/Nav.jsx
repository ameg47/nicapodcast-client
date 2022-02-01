import React from 'react';
import { useSelector } from 'react-redux';

export default function Nav() {
  const menuElem = useSelector((state) => state.menu);

  return (
    <header>
      <nav className="flex justify-between py-4 px-36 bg-gray-50 ">
        <div>
          <img
            src="data:image/png;base64,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"
            alt="logo"
            className="w-48"
          />
        </div>
        <div className="flex content-center">
          <ul className="w-full flex items-center">
            {menuElem
            && menuElem.map((elem) => (
              <li className="mr-8 transition duration-150 border-b-4 border-transparent hover:border-myred hover:cursor-pointer">
                {elem.title}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center ">
          <button
            type="button"
            className="w-32 bg-myred hover:bg-white text-white hover:text-myred border border-myred py-2 px-4 rounded-sm mr-6"
          >
            Subscribe
          </button>
          <button
            type="button"
            className="w-32 bg-myred hover:bg-white text-white hover:text-myred border border-myred py-2 px-4 rounded-sm"
          >
            Sign-in
          </button>
        </div>
      </nav>
    </header>
  );
}
