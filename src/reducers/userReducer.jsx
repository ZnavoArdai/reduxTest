import { ACTION } from "../types/usertypes";
const initalname={
  user:{name:"znavo"}
}
export const userReducer = (state=initalname, action) => {
  switch (action.type) {
    case ACTION.NEW_USER:
      return { ...state, name: action.payload };

    default:
      return state;
  }
};
