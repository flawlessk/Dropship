import axios from "axios";
import { WEB_URL, WEB_URL_V1 } from "./Config";




export const getProducts = async () => {
  const results = await axios.get(WEB_URL_V1 + "products");
  return results.data.data;
}


