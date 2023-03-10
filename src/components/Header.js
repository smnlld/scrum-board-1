import React from "react";

export const Header = ({onAdd}) => {
  return (
    <>
      <h1 className="font-black text-8xl tracking-widest font-sans subpixel-antialiased ">SCRUM BOARD </h1>
      <p className=" font-medium text-2xl tracking-widest font-sans ">BY: <strong className=" font-extrabold tracking-widest font-sans">Simon Ullado</strong></p>
      <button onClick={onAdd} className="bg-green-600 hover:bg-green-300 tracking-widest text-white font-bold text-xl py-2 px-4 my-2 mx-4 rounded-lg"> Add New Event</button>
      
    </>
  );
};
