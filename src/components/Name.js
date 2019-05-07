import React, { useState } from "react";

const Name = ({setName}) => {
    const [tempName, setTempName] = useState("");

    const changeTempName = (e) => {
        setTempName(e.target.value);
      }
    
      const addName = () => {
        setName(tempName);
        localStorage.setItem('name', tempName)
      }

    return (
        <>
        <p>What's your first name?</p>
        <div>
        <input onChange={changeTempName} value={tempName} placeholder="Enter your name"/>
        <button onClick={addName}>Continue</button>
        </div>
        </>
    )
}

export default Name;