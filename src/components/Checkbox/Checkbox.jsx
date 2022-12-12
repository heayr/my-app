import React from "react";
import './checkbox.css'
// import App from "../App";

const Checkbox = ({children, checked, handleCheck}) => {
    return (
        <div >
        <input 
        className="item__check"
        type="checkbox"
        // onChange={e => handleCheck(children)}
        
        />
        
        </div>
    )
}

export default Checkbox;