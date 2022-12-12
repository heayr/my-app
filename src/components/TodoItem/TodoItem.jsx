import React from "react";
import './TodoItem.css';
import Btn from "../Button/Btn";


const TodoItem = ({children, checked, handleCheck, remove}) => {

        return (
            <div className='item'>
                    <input
                        className='item__check'
                        type='checkbox'
                        defaultChecked={checked}
                        onChange={event => handleCheck(children)}
                    />
                    <span>{children.name}</span>
                    <Btn
                    name='X'
                    onClick={ () => remove(children)}
                    customClass='item__btn'
                    />
            </div>
        );
}
export default TodoItem;
