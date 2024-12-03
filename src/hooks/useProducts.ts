import { useEffect, useState } from "react";
import axios from "axios";

export interface Product {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  rating: { count: number; rate: number };
  price: number;
}

const useProducts = () => {
  const [data, setData] = useState<Product[]>();
  const [isLoading, setIsLoading] = useState<boolean>();
  const [error, setError] = useState<any>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get("https://fakestoreapi.com/products");

        setIsLoading(false);
        setData(response.data);
      } catch (error) {
        setIsLoading(false);
        setError(error);
      }
    };

    fetchData();
  }, []);

  return { data, isLoading, error };
};

export default useProducts;
