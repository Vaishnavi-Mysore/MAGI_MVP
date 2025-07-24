// src/features/reduxslices/chat/chatSlice.ts
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface Message {
    sender: 'user' | 'receiver';
    content: string;
    timestamp: string;
    type: 'text' | 'file';
}

interface ChatState {
    messages: Message[];
}

const initialState: ChatState = {
    messages: [],
};

const chatSlice = createSlice({
    name: 'chat',
    initialState,
    reducers: {
        sendMessage: (state, action: PayloadAction<{ content: string }>) => {
            state.messages.push({
                sender: 'user',
                content: action.payload.content,
                timestamp: new Date().toISOString(),
                type: 'text',
            });
        },
        receiveMessage: (state, action: PayloadAction<{ content: string }>) => {
            state.messages.push({
                sender: 'receiver',
                content: action.payload.content,
                timestamp: new Date().toISOString(),
                type: 'text',
            });
        },
    },
});

export const { sendMessage, receiveMessage } = chatSlice.actions;
export default chatSlice.reducer;
