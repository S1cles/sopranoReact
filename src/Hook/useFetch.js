import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


export const useFetch = (URL) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}${URL}`, {
          headers: { Authorization: `Bearer ${process.env.REACT_APP_STRAPI_TOKEN}` },
        });
        setData(response.data);
        setIsLoading(false);

      } catch (error) {
        setError(error);
        navigate('/');
        setIsLoading(false);
      }
    };
    fetchData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [URL]);

  return { data, error, isLoading };
};