import React from "react";
import { useNavigate } from "react-router-dom";
import Api from "../api";

const API = new Api();

function Login() {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const response = await API.login({ username, password });
    if (response === "Başarıyla giriş yapıldı") {
      navigate("/admin");
    }
    setError(response);
    setLoading(false);
    return;
  };

  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
      <div className="w-full p-6 m-auto bg-white border-t-4 border-purple-600 rounded-md shadow-md border-top lg:max-w-md">
        {error && <p className="text-red-600 text-center">{error}</p>}
        <h1 className="text-3xl font-semibold text-center text-purple-700">
          Admin Giriş
        </h1>
        <form className="mt-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="text" className="block text-sm text-gray-800">
              Kullanıcı Adı
            </label>
            <input
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mt-4">
            <div>
              <label htmlFor="password" className="block text-sm text-gray-800">
                Şifre
              </label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="mt-6">
              <button
                disabled={loading}
                className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600"
                type="submit"
              >
                Giriş Yap
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
