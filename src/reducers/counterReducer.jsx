import { ACTION } from "../types/usertypes";

const inital={
    
    count:{counter:0}
}
export const counterReducer=(state=inital,action)=>{

    switch (action.type) {
        case ACTION.COUNT:
            return state.count.counter+1
    
        default:
            return state;
    }
}

