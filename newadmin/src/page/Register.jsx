import React, { useEffect, useState } from "react";
import Title from "../ui/Title";
import Password from "../ui/Password";
import Checkbox from "@mui/material/Checkbox";
import Button from "../ui/Button";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { useDispatch } from "react-redux";
import { setToken } from "../redux/slice";
import api from "./customApi";
import Input from "../ui/Input";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const Register = () => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confarmPassword: "",
  });

  const navigate = useNavigate();
  const location = useLocation()
  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };


  const dispatch = useDispatch()
  const register = async (event) => {
    event.preventDefault();
    if (user?.firstName === "") {
      toast.error("Enter user name");
    } else if (user?.lastName === "") {
      toast.error("Enter user last name");
    } else if (user?.email === "") {
      toast.error("Enter your email");
    } else if (user?.password === "") {
      toast.error("Enter your password");
    } else if (user?.confarmPassword === "") {
      toast.error("Enter your confirm password");
    } else if (user.password !== user?.confarmPassword) {
      toast.error("Password and confirm password should match");
    } else {
      try {
        const response = await fetch(`${api}/api/user/register`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        });

        const data = await response.json();

        if (response.ok) {
          dispatch(setToken(data.token))
          toast.success(data.message);
          // Navigate to the category list after successful registration
          navigate("/");
        } else {
          toast.error(data.message);
        }
      } catch (error) {
        console.error("Error during registration:", error);
        toast.error("An error occurred. Please try again later.");
      }
    }
  };

  return (
    <div>
      <form onSubmit={register} className="main">
        <div className="max-w-lg mx-auto h-full flex justify-center items-center">
          <div className="item mt-16 bg-white w-full rounded-xl p-6">
            <div className="title">
            <Title className="text-3xl " title="Create your account" />
              <p className="text-[14px] text-[#9999a1]">
                Enter your personal details to create account
              </p>
            </div>

            {/* Form Area */}
            <div className="main mt-6 flex flex-col gap-4">
              <div className="name">
                 <Title className="" title="Your username *" />
                <div className="name flex gap-8 mt-2">
                  <div className="w-[50%]">
                    <Input placeholder="First name" type="text" name="firstName" value={user.firstName} onChange={handleChange} />
                  </div>
                  <div className="last w-[50%]">
                     <Input placeholder="Last name" type="text" name="lastName" value={user.lastName} onChange={handleChange} />
                  </div>
                </div>
              </div>

              <div className="name">
                <Title title="Email address *" />
                <div className="name flex gap-8 mt-2">
                  <div className="w-full">
                     <Input placeholder="Email address" type="text" name="email" value={user.email} onChange={handleChange} />
                  </div>
                </div>
              </div>

              <div className="pas">
                <Password
                  name="password"
                  value={user.password}
                  onChange={handleChange}
                  title="Password"
                  placeholder="Password"
                />
              </div>
              <div className="pas">
                <Password
                  name="confarmPassword"
                  value={user.confarmPassword}
                  onChange={handleChange}
                  className="text-[14px]"
                  title="Confirm Password"
                  placeholder="Confirm password"
                />
              </div>

              <div className="pol flex items-center">
                <Checkbox {...label} />
                <p className="mb-1 text-[14px] text-[#778795] mt-1">
                  Keep me signed in
                </p>
              </div>

              <div className="register">
                <Button
                  className="w-full flex justify-center"
                  title="Submit"
                  type="submit"
                />
              </div>

              <div className="footer">
                <p className="text-[#778795] text-center text-[14px] mt-4">
                  You don't have an account yet?
                  <span className="text-[#2275fc] cursor-pointer">
                    {" "}
                    <Link to="/login">Register Now</Link>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Register;
