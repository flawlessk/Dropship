import axios from "axios";
import { WEB_URL, WEB_URL_V1 } from "./Config";



axios.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
  return config;
})

axios.interceptors.response.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
  return config;
})



export const productsAPI = async () => {
  const results = await axios.get(WEB_URL_V1 + "products");
  return results.data.data;
}

export const login = async (email,password) => {
  try {
      const results = await axios.post(WEB_URL + "login", {email, password});
      localStorage.setItem("user", JSON.stringify(results.data.data));
      localStorage.setItem("token", (results.data.data.token))
  } catch(error) {
      throw new Error(error);
  }
}

export const register = async (firstname, lastname, email, password, passwordConfirmation) => {
  try {
    const results = await axios.post(WEB_URL + "register", {firstName: firstname, lastName: lastname, email, password, passwordConfirmation});
  } catch(error) {
    throw new Error(error);
  }
}

export const cart = async () => {
  try {
    const results = await axios.get(WEB_URL_V1 + "cart");
    return results.data.data;
  } catch(error) {
    if(error.response.status === 401) {
      localStorage.clear();
      window.location.href = "/";
    }
  }
}

export const addToCart = async (productId, qty) => {
  const results = await axios.post(WEB_URL_V1 + "cart/add", {productId, qty});
  return results.data.data;
}

export const removeFromCart = async (id) => {
  try {
    const results = await axios.post(WEB_URL_V1 + `cart/remove/${id}`)
  } catch(error) {
    console.log(error)
  }
}

export const addProduct = async (data) => {
  const results = await axios.post(WEB_URL_V1 + "products", data);
  return results.data.data;
}

export const getProduct = async (id) => {
  const results = await axios.get(WEB_URL_V1 + `products/${id}`);
  return results.data.data;
}

export const updateProduct = async (id, data) => {
  const results = await axios.put(WEB_URL_V1 + `products/${id}`, data);
  return results.data.data;
}