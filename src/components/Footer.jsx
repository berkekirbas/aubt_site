/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

function Footer() {
  return (
    <footer className="w-full border-t bg-white pb-12">
      <div className="w-full container mx-auto flex flex-col items-center">
        <div className="flex flex-col md:flex-row text-center md:text-left md:justify-between py-6">
          <a className="uppercase px-3">Hakkında</a>
          <a className="uppercase px-3">Gizlilik Politikası</a>
          <a className="uppercase px-3">Kullanım Koşulları</a>
          <a className="uppercase px-3">Okulla İletişime Geç</a>
        </div>
        <div className="uppercase pb-6">&copy; Aksu Uçak Bakım MTAL</div>
      </div>
    </footer>
  );
}

export default Footer;
