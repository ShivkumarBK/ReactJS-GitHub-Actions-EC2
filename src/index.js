import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import Greet from './components/Greet'
// import Welcome from './components/Welcome';
import reportWebVitals from './reportWebVitals';
// import Message from './components/Message';
// import Counter from './components/Counter';
// import ClassClick from './components/ClassClick';
// import FunctionClick from './components/FunctionClick';
// import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Greet name="Tom" role="Developer">
      <p>This is children prop</p>
      </Greet>
    <Greet name="Lee" role="Lead">
      <button>Action</button>
    </Greet>
  <Welcome/> */}
    {/* <Message></Message> */}
    {/* <Counter></Counter> */}
  {/* <Greet name=
  "Martin" role="CEO"/> */}
  {/* <Welcome name="Shiva" role="Developer"></Welcome> */}
  {/* <FunctionClick></FunctionClick>
  <ClassClick></ClassClick> */}
  {/* <EventBind></EventBind> */}
  <ParentComponent></ParentComponent>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
