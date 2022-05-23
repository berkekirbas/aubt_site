/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment } from "react";

function ModulePageComponent({ module }) {
  return (
    <Fragment>
      <article className="flex flex-col shadow my-4">
        <a className="hover:opacity-75">
          <img src={module.module_image_url} alt="Module Photo" />
        </a>
        <div className="bg-white flex flex-col justify-start p-6">
          <a
            href="#"
            className="text-blue-700 text-sm font-bold uppercase pb-4"
          >
            {module.module_type}
          </a>
          <a href="#" className="text-3xl font-bold hover:text-gray-700 pb-4">
            {module.module_name}
          </a>
          <h1 className="text-2xl font-bold pb-3">Eğitim Seti Tanıtım Kısmı</h1>
          <p className="pb-3">{module.module_content_first_section}</p>
          <h1 className="text-2xl font-bold pb-3">
            Eğitim Setinin İçerik Kısmı
          </h1>
          <p className="pb-3">{module.module_content_progress_section}</p>
          <h1 className="text-2xl font-bold pb-3">Eğitim Setinin Son Söz</h1>
          <p className="pb-3">{module.module_content_result_section}</p>
        </div>
      </article>
    </Fragment>
  );
}

export default ModulePageComponent;
