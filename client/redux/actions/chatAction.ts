import axios from 'axios';
import { setMessages, addMessage, setChats } from '../slice/chatSlice';

// Tüm sohbetleri getir
export const getChats = () => async (dispatch:any) => {
  try {
    const response = await axios.get('/api/v1/chats'); // Sunucunuzun API yolunu kullanmalısınız
    dispatch(setChats(response.data));
  } catch (error) {
    console.error('Sohbetleri getirirken hata oluştu:', error);
  }
};

// Belirli bir sohbetin mesajlarını getir
export const getMessagesByChatId = (chatId:any) => async (dispatch:any) => {
  try {
    const response = await axios.get(`/api/v1/messages/${chatId}`); // Sunucunuzun API yolunu kullanmalısınız
    dispatch(setMessages(response.data));
  } catch (error) {
    console.error('Sohbet mesajlarını getirirken hata oluştu:', error);
  }
};

// Yeni bir mesaj gönder
export const sendMessage = (chatId:any, message:any) => async (dispatch:any) => {
  try {
    const response = await axios.post(`/api/v1/messages/${chatId}`, { message }); // Sunucunuzun API yolunu kullanmalısınız
    dispatch(addMessage(response.data));
  } catch (error) {
    console.error('Mesaj gönderirken hata oluştu:', error);
  }
};
