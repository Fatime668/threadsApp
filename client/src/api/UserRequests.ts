import axios from 'axios'


const API = axios.create({ baseURL: 'https://threads-app-lyart-three.vercel.app' });

export const getUser = (userId:any) => API.post(`/api/v1/get-user/${userId}`);

