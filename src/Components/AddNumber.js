import { useState } from "react";

export default function AddNumber({ number, onChange, onClick }) {

    return (
        <div>
            <h1>Add Number</h1>
            
            {/* 인풋 박스 */}
            <input type="button" value="+" onClick={ onClick } ></input>
            <input type="text" value={ number } onChange={ onChange }></input>
        </div>
    )
}
