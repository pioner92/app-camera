import {createEvent, createStore} from "effector";

export const setChat = createEvent<string>()

export const $chatList = createStore({id:0,name:'Chat bot',lastMessage:''})
    .on(setChat,(state, payload) => ({...state,lastMessage: payload}))
