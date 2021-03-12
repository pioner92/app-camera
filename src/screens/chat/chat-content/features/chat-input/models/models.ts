import {createEvent, createStore} from "effector";

export const setChatInputValue = createEvent<string>()

export const $chatInputValue = createStore('')
.on(setChatInputValue,(state, payload) => payload)
