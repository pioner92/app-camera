import {createEvent, createStore} from "effector";
import {setChat} from "../../chat-list/models/models";

type messageType = {
    id: number
    text: string
    bySelf:boolean
}

export const addChatMessage = createEvent<{text:string,bySelf:boolean}>()

export const $chatMessages = createStore<Array<messageType>>([])
    .on(addChatMessage, (state, payload) =>
        [ {id: Date.now(), text: payload.text,bySelf:payload.bySelf},...state])


addChatMessage.watch(payload => {
    if(payload.bySelf){
        setTimeout(()=>{
        addChatMessage({text:'Hello!',bySelf:false})
        },1000)
    }
    setChat(payload.text)
})
