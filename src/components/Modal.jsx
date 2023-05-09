import React from 'react'

const Modal = ({ isVisible, children}) => {
  return (
    <>
    {isVisible && (
<div className=" flex flex-row justify-center
    items-center absolute insert-0 bg-[rgb 255_255_255_/_0.6)] text-red">
    {children}

    </div>
    )}
    </>
    );
    
};

export default Modal;