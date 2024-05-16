import React from 'react'

function FunctionClick() {
    const clickhandler = () => {
        console.log("Button Clicked");
    }
  return (
    <div><button onClick={clickhandler}>Function click</button></div>
  )
}

export default FunctionClick