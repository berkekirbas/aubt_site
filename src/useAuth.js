import { useEffect, useState } from "react";
import Api from "./api";

const API = new Api();

const useAuth = () => {
  const [isAuthenticated, setAuthenticated] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    async function checkAuth() {
      try {
        const data = await API.checkAuth();
        setError(null);
        setAuthenticated(data);
        setIsLoading(false);
      } catch (err) {
        setAuthenticated(null);
        setError(err);
        setIsLoading(false);
      }
    }

    checkAuth();
  }, []);

  return { isAuthenticated, error, isLoading };
};

export default useAuth;
