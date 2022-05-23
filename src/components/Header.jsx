/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

function Header() {
  return (
    <header className="w-full container mx-auto">
      <div className="flex flex-col items-center py-12">
        <a className="font-bold text-gray-800 uppercase hover:text-gray-700 text-5xl">
          Aksu Uçak Bakım MTAL
        </a>
        <p className="text-lg text-gray-600">Eğitim Materyalleri</p>
      </div>
    </header>
  );
}

export default Header;
