import axios from 'axios'


const API = axios.create({ baseURL: 'https://threads-app-lyart-three.vercel.app' });

export const createChat = (data:any) => API.post('/api/v1/create-chat', data);

export const userChats = (id:any) => API.get(`/api/v1/chat/${id}`);

export const findChat = (firstId:any, secondId:any) => API.get(`/api/v1/chat/find/${firstId}/${secondId}`);