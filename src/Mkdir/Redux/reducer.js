const initialstate = 0;
export const calculator = (state= initialstate, action)=>{
    if(action.type === "Increment"){
        return state = state + 1
    }
    else if (action.type === "Decrement"){
        return state = state - 1
    }
    else if (action.type === "Square"){
        return state = state * 2
    }
    else {
        return state
    }
}