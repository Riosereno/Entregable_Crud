import React from 'react';

const Navbar = () => {

  return (
    <nav className="w-full flex flex-row justify-around items-center mb-5">
      <h1 className="text-3xl font-bold">Users Admin</h1>
      <button className="bg-blue-500 p-1">
        <i className="bx bx-add-to-queue"></i>
        <span>Add new user</span>
      </button>
    </nav>
  );
};

 

export default Navbar;