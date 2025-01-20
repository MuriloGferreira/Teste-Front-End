import axios from "axios";

export const fetchProducts = async () => {
  try {
    const response = await axios.get(
      "https://corebiz-test-server.onrender.com/api/v1/products"
    );
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar os produtos:", error);
    return [];
  }
};