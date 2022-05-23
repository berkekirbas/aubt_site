import React, { Fragment } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Api from "../api";
import Label from "./Label";
import TextField from "./TextField";

const API = new Api();

export default function Modal({ showModal, setShowModal }) {
  const navigate = useNavigate();

  const [module_type, setSelectBox] = React.useState(
    "Uçak Gövde Motor Eğitim Materyalleri"
  );
  const [module_name, setModuleName] = React.useState("");
  const [module_short_description, setModuleShortDescription] =
    React.useState("");
  const [module_image_url, setModuleImageUrl] = React.useState("");
  const [module_created_by, setModuleCreatedBy] = React.useState("");
  const [module_content_first_section, setModuleContentFirstSection] =
    React.useState("");
  const [module_content_progress_section, setModuleContentProgressSection] =
    React.useState("");
  const [module_content_result_section, setModuleContentResultSection] =
    React.useState("");

  async function createModule(e) {
    e.preventDefault();

    const data = {
      module_type,
      module_name,
      module_short_description,
      module_image_url,
      module_created_by,
      module_content_first_section,
      module_content_progress_section,
      module_content_result_section,
    };

    const result = await API.createModule(data);
    if (result) {
      setShowModal(false);
      return navigate(0);
    }
  }

  return (
    <>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-2xl font-semibold">Modül Ekle</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <form onSubmit={createModule}>
                  <div className="relative p-6 flex-auto">
                    <Fragment>
                      <Label text={"Modül Tipi"} /> <br />
                      <select
                        value={module_type}
                        name="module_type"
                        id="module_type"
                        onChange={(e) => setSelectBox(e.target.value)}
                      >
                        <option value="Uçak Gövde Motor Eğitim Materyalleri">
                          Uçak Gövde Motor Eğitim Materyalleri
                        </option>
                        <option value="Uçak Elektroniği Eğitim Materyalleri">
                          Uçak Elektroniği Eğitim Materyalleri
                        </option>
                      </select>
                      <br />
                      <Label text={"Modül Adı"} />
                      <TextField
                        type="text"
                        placeholder="Modül Adı"
                        name="module_name"
                        value={module_name}
                        onChange={(e) => setModuleName(e.target.value)}
                      />
                      <br />
                      <Label text={"Modül Kısa Açıklama"} />
                      <TextField
                        type="text"
                        placeholder="Modül Kısa Açıklama"
                        name="module_short_description"
                        value={module_short_description}
                        onChange={(e) =>
                          setModuleShortDescription(e.target.value)
                        }
                      />
                      <br />
                      <Label text={"Modül Resim URL"} />
                      <TextField
                        type="text"
                        placeholder="Modül Resim URL"
                        name="module_image_url"
                        value={module_image_url}
                        onChange={(e) => setModuleImageUrl(e.target.value)}
                      />
                      <br />
                      <Label text={"Modülü Hazırlayan"} />
                      <TextField
                        type="text"
                        placeholder="Modülü Hazırlayan"
                        name="module_created_by"
                        value={module_created_by}
                        onChange={(e) => setModuleCreatedBy(e.target.value)}
                      />
                      <br />
                      <Label text={"Modülü İçeriği Giriş Kısmı"} />
                      <textarea
                        type="textarea"
                        placeholder="Modülü İçeriği Giriş Kısmı"
                        className="w-full px-4 py-3 rounded-lg ring-red-200 focus:ring-4 focus:outline-none transition duration-300 border border-gray-300 focus:shadow-xl"
                        name="module_content_first_section"
                        value={module_content_first_section}
                        onChange={(e) =>
                          setModuleContentFirstSection(e.target.value)
                        }
                      />
                      <br />
                      <Label text={"Modül İçeriği Gelişme Kısmı"} />
                      <textarea
                        type="textarea"
                        placeholder="Modül İçeriği Gelişme Kısmı"
                        className="w-full px-4 py-3 rounded-lg ring-red-200 focus:ring-4 focus:outline-none transition duration-300 border border-gray-300 focus:shadow-xl"
                        name="module_content_progress_section"
                        value={module_content_progress_section}
                        onChange={(e) =>
                          setModuleContentProgressSection(e.target.value)
                        }
                      />
                      <br />
                      <Label text={"Modül İçeriği Son Söz Kısmı"} />
                      <textarea
                        type="textarea"
                        placeholder="Modül İçeriği Son Söz Kısmı"
                        className="w-full px-4 py-3 rounded-lg ring-red-200 focus:ring-4 focus:outline-none transition duration-300 border border-gray-300 focus:shadow-xl"
                        name="module_content_result_section"
                        value={module_content_result_section}
                        onChange={(e) =>
                          setModuleContentResultSection(e.target.value)
                        }
                      />
                    </Fragment>
                  </div>
                  {/*footer*/}
                  <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                    <button
                      className="bg-green-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="submit"
                    >
                      Oluştur
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}
