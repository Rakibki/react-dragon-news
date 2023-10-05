import React, { useContext, useState } from "react";
import Navber from "../.../../../shared/Navber";
import InputGroup from "../../components/InputGroup";
import  { authContext } from "../../providers/authProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Login = () => {

  const {user, loginUser} = useContext(authContext)
  console.log(user);
  const [error, setError] = useState("")

  const location = useLocation()
  const navigate = useNavigate()

  const handleLogin = (e) => {
    setError("")
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.Password.value;
    loginUser(email, password)
    .then((res) => {
      console.log(res.user);
      navigate(location.state ? location.state : "/")
      
    })
    .catch((e) => {
      console.log(e.message);
      setError(e.message)
    })
  }

  return (
    <>
      <div className="mt-4 bg-[#F3F3F3]">
        <Navber />
      </div>
      <div className="w-full flex justify-center items-center h-screen">
        <div className="bg-[#fff] w-[500px] p-16 shadow-lg">
          <h1 className="my-4 text-2xl font-semibold">Login your account</h1>
          <hr />
          <form onSubmit={handleLogin}>
            <InputGroup
              id={"email"}
              name={"email"}
              type={"email"}
              text={"Email address"}
              placeholder={"Enter your email address"}
            />
            <InputGroup
              id={"Password"}
              name={"Password"}
              type={"Password"}
              text={"Password"}
              placeholder={"Enter your Password"}
            />
             <button className="btn rounded-none w-full px-7 bg-[#403F3F] text-white" >Login</button>
             {
              error && <p className="text-red-600 mt-2 font-semibold">{error}</p>
             }
             <p className="text-center mt-3 text-[#706F6F]">Dont’t Have An Account ? <Link to={"/register"} className="text-red-500 font-semibold">Register</Link></p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
