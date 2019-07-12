import {useState, useEffect} from 'react';
import axios from 'axios';

export default function useFetchData(url) {
  const baseURL = 'http://localhost:8080';
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    axios.get(baseURL+url)
      .then(({ data }) => {
        setLoading(false);
        setData(data);
      })
      .catch((err) => {
        setLoading(false);
        setError(err);
      })
  }, [url])

  return [data, loading, error];
};
