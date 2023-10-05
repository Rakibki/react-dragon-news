import React from "react";

const InputGroup = ({ text, id, placeholder, name, type }) => {
  return (
    <div className="my-8">
      <label className="text-[#403F3F] font-semibold" htmlFor={id}>{text}</label>
      <input required placeholder={placeholder} className="block w-full text-sm mt-1 text-[#9F9F9F] outline-none bg-[#F3F3F3] px-5 py-3" type={type} name={name} id={id} />
    </div>
  );
};

export default InputGroup;
