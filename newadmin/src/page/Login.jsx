import React, { useState } from 'react'
import Title from '../ui/Title'
import Password from '../ui/Password'
import Checkbox from '@mui/material/Checkbox';
import Button from '../ui/Button';
import { FaGoogle } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import api from './customApi';
import { useDispatch } from 'react-redux';
import { setToken } from '../redux/slice';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const Login = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()


  const [login, setLogin] = useState({
    email: "",
    password: ""
  });

  const getData = (event) => {
    const { name, value } = event.target; // Corrected destructuring
    setLogin((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const loginHandler = async (event) => {
    event.preventDefault();
    if (login.email === "") {
      toast.error("Email is required");
    } else if (login.password === "") {
      toast.error("Please input password");
    } else {
      try {
        const response = await fetch(`${api}/api/user/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(login),
        });

        const data = await response.json(); // Handle the response
        if (response.ok) {
          dispatch(setToken(data.token))
          toast.success(data.message);
          navigate("/")
        } else {
          toast.error(data.message || "Login failed");
        }

        console.log(data)
      } catch (error) {
        console.log(error);
        toast.error("An error occurred. Please try again.");
      }
    }
  };

  return (
    <div>
      <form onSubmit={loginHandler} className="main">
        <div className="item max-w-xl mx-auto">
          <div className="item flex justify-center items-center">
            <div className="item bg-white rounded-2xl w-full p-6 my-8">
              <div className="title">
                <Title title="Login to account" className="text-2xl" />
                <p className="text-[#7d8797] text-[14px]">
                  Enter your email & password to login
                </p>
              </div>
              <div className="main mt-8 flex flex-col gap-4">
                <div className="name">
                  <p className="font-medium">Email address</p>
                  <input
                    name="email"
                    onChange={getData}
                    value={login.email}
                    className="w-full outline-none border md:py-3 md:px-4 xxs:py-1 xxs:px-2 rounded-lg xxs:placeholder:text-xs md:placeholder:text-base mt-1"
                    placeholder="Enter email"
                    type="email"
                  />
                </div>
                <div className="password">
                  <Password
                    name="password"
                    value={login.password}
                    onChange={getData}
                    title="Password"
                    placeholder="Password"
                  />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="check">
                  <div className="flex items-center my-4">
                    <Checkbox {...label} />
                    <p className="mb-1 text-[14px] text-[#778795]">
                      Keep me signed in
                    </p>
                  </div>
                </div>
                <div className="for">
                  <p className="text-[#2275fc] cursor-pointer">
                    Forgot password?
                  </p>
                </div>
              </div>

              {/* Button area */}
              <div className="button">
                <Button className="w-full flex justify-center" title="Login" />
              </div>
              <p className="text-center mt-8 text-xs text-[#778795]">
                Or continue with a social account
              </p>

              {/* Social buttons */}
              <div className="main flex gap-2 justify-center mt-4">
                <Button
                  className="w-full"
                  icon={<FaGoogle />}
                  title="Sign in with Google"
                />
                <Button
                  className="w-full"
                  icon={<FaFacebookF />}
                  title="Sign in with Facebook"
                />
              </div>
              <div className="footer">
                <p className="text-[#778795] text-center text-[14px] mt-4">
                  You don't have an account yet?{" "}
                  <span className="text-[#2275fc] cursor-pointer">
                    <Link to="/register">Register Now</Link>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
