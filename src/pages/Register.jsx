import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { GiArchiveRegister } from "react-icons/gi";

import api from "../services/api";

function Register() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData, [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await api.post("/auth/register", formData);

      alert("Registration Successful");

      navigate("/login");
    } catch (error) {
      alert(error.response?.data?.message);
    }
  };

  return (
    <div className=' h-screen w-full flex flex-col justify-center items-center gap-8'>

      <form onSubmit={handleSubmit} className=' max-w-200 flex flex-col gap-5'>

        <h2 className=' flex items-center justify-center text-8xl text-slate-800'><GiArchiveRegister /></h2>

        <h2 className=' mb-5 text-center font-bold border-b-2 text-xl text-slate-800'>REGISTER</h2>

        <input 
          type='text'
          name='username'
          placeholder='Username'
          onChange={handleChange}
          className=' border w-[50vw] px-2 py-1 rounded-lg outline-0'
        />

        <input 
          type='email'
          name='email'
          placeholder='Email'
          onChange={handleChange}
          className=' border w-[50vw] px-2 py-1 rounded-lg outline-0'
        />

        <input 
          type='password'
          name='password'
          placeholder='Password'
          onChange={handleChange}
          className=' border w-[50vw] px-2 py-1 rounded-lg outline-0'
        />

        <button type='submit' className=' px-2 py-1 border rounded-lg'>
          Register
        </button>

      </form>

      <p>Already registered? <Link to="/login" className=' p-0.5 text-blue-500 border-b font-semibold'>Login</Link></p>

    </div>
  )
}

export default Register