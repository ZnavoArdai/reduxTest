import React from "react";
import { useState } from "react";
import { connect} from "react-redux";
import { newUser,decrementCounter } from "../../../actions/user.action";

function Login(props) {
  const [input, setInput] = useState();
  
  return (
    <form onSubmit={(e)=>e.preventDefault()}>
      <input onChange={(e) => setInput(e.target.value)} type="text" />
      <button onClick={() => props.chngeUser(input)}>log</button>
      <button onClick={()=>props.decrementNum()}>+</button>
    </form>
  );
}

export default connect(null,(dispatch) => {
  return {
    chngeUser: (obj) => dispatch(newUser(obj)),
    decrementNum:()=>dispatch(decrementCounter())
  };
})(Login);
