import axios from "./axios";

export const registerRequest = async (user) => axios.post(`/clientes`, user);

export const loginRequest = async (user) => axios.post(`/clientes/login`, user);

export const verifyTokenRequest = async () => axios.get(`/clientes/verify`);

export const logoutRequest = async () => axios.post(`/clientes/logout`);

export const loginAdmin = async (admin) => axios.post(`/administradores/login`, admin);

export const verifyTokenRequestAdmin = async () => axios.get(`/administradores/verify`);

export const clientesView = async () => axios.get(`/administradores/clientes`);