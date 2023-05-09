import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Navbar from './components/Navbar';
import Modal from './components/Modal';
import UserList from './components/UserList';
import UserCard from './components/UserCard';
import {useForm} from 'react-hook-form';

const BASE_URL = ' "https://user-crud-t8v7.onrender.com/users/';
const App =() => {
 const [users, setUsers] = useState([]);
 const[isFormVisible, setIsFormVisible] =useState (false);
  const{register, handleSubmit, reset} = useForm();
  const getUsers = async () => {
    const response = await axios.get(`${BASE_URL}users`);
    return response.data;
  }
  const loadUsers = async () => {
    try{
      const users = await getUsers();
      setUsers(users);
    }catch (error) {
      console.error(error);
    }
  } ;
  const handleClick = () => {
    setIsFormVisible(true);
  }
  
  useEffect(() => {
    loadUsers();
  },[]);

  return (
    <div className="bg-neutral-800 h-screen flex flex-col justify-center
    items-center p-10 text-red">
      <Navbar actionAddBtn={handleClick} />
    <UserList users={users}  />
    <Modal isVisible={isFormVisible}>
    <div className="form-container">
<form onSubmit={handleSubmit((data)=> console.log(data))}>
  <h2 className="text-3xl font-bold">Nuevo Usuario</h2>
  <div className="flex flex-col gap-3">
    <div>
      <label htmlFor="nameId" className="font-semibold">
        First Name:{' '}
      </label>
      <input type="text" id="nameId"{...register('first_name')} />
    </div>
    <div>
      <label htmlFor="lastNameId" className="font-semibold">
        Last Name:{' '}
      </label>
      <input type="text" id="lastNameId" {...register('last_name')}/>
    </div>
    <div>
      <label htmlFor="emailId" className="font-semibold">
        Email:{' '}
      </label>
      <input type="text" id="emailId"{...register('email')} />
    </div>
    <div>
      <label htmlFor="passwordId" className="font-semibold">
        Password:{' '}
      </label>
      <input type="password" id="passwordId" {...register('password')}/>
    </div>
    <div>
      <label htmlFor="" className="font-semibold">
        Birthday:{' '}
      </label>
      <input type="date"{...register('birthday')} />

    </div>
    <div className="flex flex-row justify-center items-center mt-5">
       <button className='bg-sky-700 text-red font-semibold p-2 rounded-md'>
        Agregar Nuevo Usuario
        </button>
        
  </div>
  </div>
</form>
</div>
</Modal>
</div>

       );
};

export default App;
