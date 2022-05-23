import axios from "axios";
import { API_URL } from "./config";

class Api {
  async getModules() {
    const data = await axios
      .get(`${API_URL}/modules`, {
        withCredentials: true,
        credentials: "include",
      })
      .then((response) => response.data.modules)
      .catch((err) => false);

    return data;
  }

  async getModule(moduleId) {
    const data = await axios
      .get(`${API_URL}/modules/${moduleId}`, {
        withCredentials: true,
        credentials: "include",
      })
      .then((response) => response.data.module)
      .catch((err) => false);
    return data;
  }

  async createModule(data) {
    const responseData = await axios
      .post(`${API_URL}/modules/create`, data, {
        withCredentials: true,
        credentials: "include",
      })
      .then((response) => response.data.module)
      .catch((err) => false);
    return responseData;
  }

  async updateModule(moduleId, data) {
    const responseData = await axios
      .patch(`${API_URL}/modules/update/${moduleId}`, data, {
        withCredentials: true,
        credentials: "include",
      })
      .then((response) => response.data.updatedModule)
      .catch((err) => false);
    return responseData;
  }

  async deleteModule(moduleId) {
    const responseData = await axios
      .delete(`${API_URL}/modules/delete/${moduleId}`, {
        withCredentials: true,
        credentials: "include",
      })
      .then((response) => response.data.deletedModule)
      .catch((err) => false);
    return responseData;
  }

  async login(data) {
    const _data = await axios
      .post(`${API_URL}/auth/login`, data, {
        withCredentials: true,
        credentials: "include",
      })
      .then((response) => response.data.message)
      .catch((err) => err.response.data.message);
    return _data;
  }

  async logout() {
    const _data = await axios
      .post(`${API_URL}/auth/logout`, {
        withCredentials: true,
        credentials: "include",
      })
      .then((response) => response.data.message)
      .catch((err) => false);
    return _data;
  }

  async checkAuth() {
    const _data = await axios
      .get(`${API_URL}/auth/check`, {
        withCredentials: true,
        credentials: "include",
      })
      .then((response) => response.data.message)
      .catch((err) => false);
    return _data;
  }
}

export default Api;
