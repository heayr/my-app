import './ListItem.css';
import React from 'react';
import Btn from '../Button/Btn';


const ListItem = ({item, remove}) => {
    return (
        <div
        className='item'
        >
            <div className='item__text'>
            {item}
            </div>
            <div>
            <Btn
                name='Del'
                onClick={() => remove(item)}
            customClass='item__btn'
            />
            </div>
        
        </div>
    )
}

export default ListItem;