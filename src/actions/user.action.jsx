
import { ACTION } from "../types/usertypes";

const newUser=(newObj)=>{

    return{type:ACTION.NEW_USER,payload:newObj}
}

const decrementCounter=()=>{

    return {type:ACTION.COUNT}
}

export{
    newUser,
    decrementCounter
}