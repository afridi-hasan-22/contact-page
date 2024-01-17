import React from 'react';
import { MdMessage } from "react-icons/md";
const Button = (props) => {
    const {name,icon, isoutline, ...rest} = props;
    // console.log(props.isoutline);
    return (
        <>
            <button {...rest} className={isoutline ? 'btn-outline' : 'btn-primary'} >
                {icon}
                {name}
            </button>
        </>
    );
};
// 'flex items-center py-[10px] px-[10px] bg-black text-white rounded-md gap-2 min-w-[220px] text-lg justify-center outline-btn'

export default Button;