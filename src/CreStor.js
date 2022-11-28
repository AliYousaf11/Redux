import { createStore } from 'redux'
import { RootReducer } from "./Mkdir/Redux";
export const store = createStore(RootReducer);