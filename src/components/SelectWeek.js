import React, { useState, useLayoutEffect } from "react";

const SelectWeek = ({ name, setWeek, scoreW1, scoreW2 }) => {
    return (
        <>
        <br/>
        <h2>Hello {name}!</h2>
        <br/>
        <p>Select a week to test your skills</p>
        <div>
            <p>Score Week 1 = {scoreW1}</p>
            {
            localStorage.scoreW1 !== undefined ? <p/> : <button onClick={() => setWeek(1)}>Week 1</button>
            }
        </div>
        <div>
            <p>Score Week 2 = {scoreW2}</p>
            <button onClick={() => setWeek(2)}>Week 2</button>
        </div>
        </>
    )
}

export default SelectWeek;

