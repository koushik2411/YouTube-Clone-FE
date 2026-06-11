import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext';
import { FaUserShield } from "react-icons/fa";

function Login() {

  const navigate = useNavigate();

  const { login } = useContext(AuthContext);

  const [formData, setFormData] = useState({
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
      const response = await api.post("/auth/login", formData);

      login(
        response.data.user,
        response.data.token
      );

      navigate("/");
    } catch (error) {
      alert(error.response?.data?.message);
    }
  };

  return (
    <div className=' h-screen w-full flex flex-col justify-center items-center gap-8'>
      
      <form className=' max-w-200 flex flex-col gap-5'>

        <h2 className=' flex items-center justify-center text-8xl text-slate-800'>
          <FaUserShield/>
        </h2>

        <h2 className=' mb-5 text-center font-bold border-b-2 text-xl text-slate-800'>LOGIN</h2>

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
          Login
        </button>

      </form>

      <p>New User? <Link to="/register" className=' p-0.5 text-blue-500 border-b font-semibold'>Register</Link></p>

    </div>
  )
}

export default Login