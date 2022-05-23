/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

function Nav() {
  return (
    <nav className="w-full py-4 border-t border-b bg-gray-100">
      <div className="block sm:hidden">
        <a className="block md:hidden text-base font-bold uppercase text-center flex justify-center items-center">
          Kategoriler
        </a>
      </div>
      <div className="w-full flex-grow sm:flex sm:items-center sm:w-auto">
        <div className="w-full container mx-auto flex flex-col sm:flex-row items-center justify-center text-sm font-bold uppercase mt-0 px-6 py-2">
          <a className="hover:bg-gray-400 rounded py-2 px-4 mx-2">
            Uçak Gövde Motor Eğitim Materyalleri
          </a>
          <a className="hover:bg-gray-400 rounded py-2 px-4 mx-2">
            Uçak Elektroniği Eğitim Materyalleri
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
