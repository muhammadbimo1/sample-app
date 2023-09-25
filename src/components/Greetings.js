import { useState } from "react";

export default function Greetings() {

    const [userName, setUserName] = useState('Bimo');

    function popup() {
        alert(`Hello ${userName}`)
    }

    function changeName() {
        setUserName('Arya')
    }


    return (<div>
        <div>{`Hello, ${userName}`}</div>
        <button onClick={()=>{popup()}}>Show Popup</button>
        <button onClick={()=>{changeName()}}>Change Name</button>
        </div>);
  }