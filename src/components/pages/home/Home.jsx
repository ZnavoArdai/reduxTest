import React from 'react'

import {connect} from "react-redux"

function Home(props) {
  return (
    <div>im login in my name is:{props.username} {props.counterNum}</div>
  )
}

export default connect(({user,count})=>{

        return {
            username:user.name,
            counterNum:count.counter
        }
})(Home)

