import './input.css';
import React from 'react';

class Input extends React.Component {
    render() {
        const {value, onChange} = this.props;
        return (
            <div>
                <input 
                className='item__check'
                type="text"
                value={value}
                onChange={onChange}
                placeholder='Какая задача?'
                />
            </div>
            );
    }
}
export default Input;