import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

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
    <div>

      <form>

        <h2></h2>

        <input 
          type='text'
          name='username'
          placeholder='Username'
          onChange={handleChange}
          className=''
        />

        <input 
          type='email'
          name='email'
          placeholder='Email'
          onChange={handleChange}
          className=''
        />

        <input 
          type='password'
          name='password'
          placeholder='Password'
          onChange={handleChange}
          className=''
        />

        <button>
          Register
        </button>

      </form>

    </div>
  )
}

export default Register