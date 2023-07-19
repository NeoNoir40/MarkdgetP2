import axios from "./axios";



 export const registerRequest = user => axios.post(`/clientes`, user);

 export const loginRequest = user => axios.post(`/clientes/login`,user);

 export const verifyTokenRequest = () => axios.get('auth/verify')
 