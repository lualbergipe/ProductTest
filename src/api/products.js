import { API_URL } from "../utils/constants";

/*Hacemos la petición para traer la información del detalle del producto */
export async function getProduct() {
    try {
      const url = `${API_URL}products/free-trainer-3-mmw.js`;
      const response = await fetch(url);
      const result = await response.json();
      return result
    } catch (error) {
      console.log(error);
      return null;
    }
  }