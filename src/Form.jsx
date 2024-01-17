import React, { useState } from "react";
import Button from "./Button";
import { MdMessage } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
const Form = () => {
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [text,setText] = useState('');

    
    
    const calling = () => {
        console.log('calling my darling');
    }
    const onSubmit = (event) => {
        event.preventDefault()
        
        // name = event.target[0].value
        // email = event.target[1].value
        // text = event.target[2].value
        setName(event.target[0].value)
        setEmail(event.target[1].value)
        setText(event.target[2].value)

        console.log('name',  event.target[0].value);
        console.log('email',  event.target[1].value);
        console.log('text',  event.target[2].value);
    }
  return (
    <div className="w-[80%] mx-auto">
      <div className="w-full grid grid-cols-2 items-center gap-3">
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between mt-6">
            <Button
              name="Via Support Chat"
              icon={<MdMessage className="text-[24px]"></MdMessage>}
            ></Button>
            <Button
              onClick={calling}
              name="Via Call"
              icon={<IoCall className="text-[24px]"></IoCall>}
            ></Button>
          </div>

          <Button
            name="Via Email"
            isoutline={true}
            icon={<MdOutlineEmail className="text-[24px]"></MdOutlineEmail>}
          ></Button>
          <form onSubmit={onSubmit}>
            <div className="form-container flex flex-col w-full relative my-7">
              <label className="absolute -top-3 left-3 bg-white px-3 text-[14px] font-bold" htmlFor="name">Name</label>
              <input className="h-[40px] px-[8px]" type="text" name="name" />
            </div>
            <div className="form-container flex flex-col w-full relative my-7">
              <label className="absolute -top-3 left-3 bg-white px-3 text-[14px] font-bold" htmlFor="name">Email</label>
              <input className="h-[40px] px-[8px]" type="email" name="email" />
            </div>
            <div className="form-container flex flex-col w-full relative my-7">
              <label className="absolute -top-3 left-3 bg-white px-3 text-[14px] font-bold" htmlFor="name">Text</label>
              <textarea rows={8} className=" px-[8px]" type="email" name="text" />
            </div>
            <div className="flex justify-end mb-5">
                <Button name='Submit'></Button>
            </div>
            <div>
                {name + " " + email + " " + text}
            </div>
          </form>
        </div>

        <div>
            <img src="../public/contact.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Form;
