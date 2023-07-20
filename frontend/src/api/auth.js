import axios from "./axios";



 export const registerRequest = async(user) => axios.post(`/clientes`, user);

 export const loginRequest = async(user) => axios.post(`/clientes/login`,user);

 export const verifyTokenRequest = async () => axios.get(`/clientes/verify`)
 