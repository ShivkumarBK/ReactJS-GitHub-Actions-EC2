import React from 'react'
function ChildComponent(props) {
  return (
    <div>
        <button onClick={()=>props.greetHandler("Child1")}>Greet Parent</button>
    </div>
  )
}

export default ChildComponent