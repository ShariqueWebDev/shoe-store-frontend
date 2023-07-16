// import axios from "axios";
import { API_URL, STRAPI_API_TOKEN } from "./urls";

export const fetchDataFromApi = async (endpoint) => {
  const options = {
    method: "GET",
    headers: {
      Authorization: "Bearer " + STRAPI_API_TOKEN,
    },
  };

  const res = await fetch(`${API_URL}${endpoint}`, options);
  const data = await res.json();

  return data;
};

// STRIPE PAYMENT AND CHECKOUT FUNCTION
// export const makePaymentRequest = async (endpoint, payload) => {
//   const res = await fetch(`${API_URL}${endpoint}`,{
//     method:"POST",
//     headers:{
//       Authorization: "bearer " + STRAPI_API_TOKEN,
//       "Content-Type": "application/json"
//     },
//     body: JSON.stringify(payload),
//   })

//   const data = await res.json();
//   return data;
// }

// export const makePaymentRequest = axios.create({
//   baseURL: process.env.NEXT_DEV_URL,
//   headers:{
//     Authorization: "bearer " + process.env.NEXT_PUBLIC_STRAPI_API_TOKEN
//   }
// })