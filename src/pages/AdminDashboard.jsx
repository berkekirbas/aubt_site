import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Api from "../api";
import Modal from "../components/Modal";

const API = new Api();

function AdminDashboard() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [modules, setModules] = useState([]);

  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    async function getModule() {
      setLoading(true);
      const modules = await API.getModules();
      setModules(modules);
      setLoading(false);
    }
    getModule();
  }, []);

  return (
    <div>
      <nav className="w-full py-4 bg-blue-800 shadow">
        <div className="w-full container mx-auto flex flex-wrap items-center justify-between">
          <nav>
            <ul className="flex items-center justify-between font-bold text-sm text-white uppercase no-underline">
              <li>
                <Link
                  to="/admin"
                  className="hover:text-gray-200 hover:underline px-4"
                >
                  Yönetim Paneline Hoşgeldiniz
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </nav>
      <header className="w-full container mx-auto">
        <div className="flex flex-col items-center py-12">
          <h1 className="font-bold text-gray-800 uppercase hover:text-gray-700 text-5xl">
            Modüller
          </h1>
        </div>
      </header>
      <div>
        <div className="flex flex-col">
          <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
              <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Modül İsmi
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Kısa Başlığı
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Durumu
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Id
                      </th>
                      <th scope="col" className="relative px-6 py-3">
                        <span className="sr-only">Edit</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {loading
                      ? "Yükleniyor"
                      : modules.map((module) => (
                          <tr key={module._id}>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="flex items-center">
                                <div className="ml-4">
                                  <div className="text-sm font-medium text-gray-900">
                                    {module.module_name}
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-900">
                                {module.module_short_description}
                              </div>
                              <div className="text-sm text-gray-500">
                                {module.module_type}
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span
                                className="px-2 inline-flex text-xs leading-5
                          font-semibold rounded-full bg-green-100 text-green-800"
                              >
                                Aktif
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {module._id}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                              <p className="text-indigo-600 hover:text-indigo-900">
                                Düzenle
                              </p>
                            </td>
                          </tr>
                        ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 grid max-w-md gap-10 row-gap-2 lg:max-w-screen-lg sm:row-gap-10 lg:grid-cols-2 xl:max-w-screen-lg sm:mx-auto">
        <button className="text-green-500" onClick={() => setModalOpen(true)}>
          Yeni Modül Ekle
        </button>
        <button className="text-red-500" onClick={deletor}>
          Modül Sil
        </button>
      </div>

      <Modal showModal={modalOpen} setShowModal={setModalOpen} />
    </div>
  );

  async function deletor() {
    const data = prompt("Lütfen silmek istediğiniz modülün id'sini giriniz");
    const result = await API.deleteModule(data);
    if (result) {
      return navigate(0);
    }
  }
}

export default AdminDashboard;
