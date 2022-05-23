/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment } from "react";

import { Link } from "react-router-dom";

function Module({ modules }) {
  function render() {
    if (modules && modules.length < 1) {
      return (
        <div className="flex flex-col items-center justify-center h-full">
          <h1 className="text-gray-800 text-3xl font-bold">
            Modül bulunamadı.
          </h1>
        </div>
      );
    }
    return modules.map((module) => (
      <Fragment key={module._id}>
        <article className="flex flex-col shadow my-4">
          <a href="#" className="hover:opacity-75">
            <img src={module.module_image_url} alt="Module Photo" />
          </a>
          <div className="bg-white flex flex-col justify-start p-6">
            <a className="text-blue-700 text-sm font-bold uppercase pb-4">
              {module.module_type}
            </a>
            <Link
              to={`/module/${module._id}`}
              className="text-3xl font-bold hover:text-gray-700 pb-4"
            >
              {module.module_name}
            </Link>

            <a className="pb-6">{module.module_short_description}</a>
            <Link
              to={`/module/${module._id}`}
              className="uppercase text-gray-800 hover:text-black"
            >
              Okumaya Devam Et <i className="fas fa-arrow-right"></i>
            </Link>
          </div>
        </article>
      </Fragment>
    ));
  }

  return (
    <div className="flex flex-col items-center justify-center h-full">
      {render()}
    </div>
  );
}

export default Module;
