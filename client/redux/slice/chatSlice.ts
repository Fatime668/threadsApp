
import { createSlice } from '@reduxjs/toolkit';

const chatSlice = createSlice({
  name: 'chat',
  initialState: {
    chats: [], // Kullanıcının katıldığı tüm sohbetlerin listesi
    currentChat: null, // Kullanıcının şu anda aktif olduğu sohbet
    messages: [], // Şu anda görüntülenen sohbetin mesajları
  },
  reducers: {
    setChats: (state, action) => {
      state.chats = action.payload;
    },
    setCurrentChat: (state, action) => {
      state.currentChat = action.payload;
    },
    setMessages: (state, action) => {
      state.messages = action.payload;
    },
    addMessage: (state:any, action:any) => {
      state.messages.push(action.payload);
    },
  },
});

export const {
  setChats,
  setCurrentChat,
  setMessages,
  addMessage,
} = chatSlice.actions;

export default chatSlice.reducer;
