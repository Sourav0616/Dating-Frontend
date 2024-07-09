import { useEffect, useRef, useState } from "react";
import picture from "../../public/image/JORI-logos_transparent.png";
import { userToken } from "../store/userinfo.slice.js";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Login() {
  const token = useSelector((state) => state.userInfo.loading);
  const access = useSelector((state) => state.userInfo.error);

  const dispatch = useDispatch();
  const mobile = useRef();
  const password = useRef();
  const navigate = useNavigate();

  const loginUser = async (e) => {
    e.preventDefault();
    const data = {
      mobile: mobile.current.value,
      password: password.current.value,
      email: mobile.current.value,
    };
    dispatch(userToken(data));
  };

  useEffect(() => {
    if (token === false && access === false) {
      navigate("/app/home");
    }
  }, [token, access, navigate]);

  return (
    <div className=" w-screen h-screen flex justify-center items-center">
      <form
        action=""
        className="h-[700px] w-96 border-2 border-yellow-600 bg-blue-950 flex flex-col justify-center items-center rounded-3xl"
      >
        <div className="h-20 w-20 mb-3">
          <img src={picture} alt="" className="h-20 w-20" />
        </div>
        <h1 className="mb-4 text-xl font-bold text-yellow-600">
          Login With Jori
        </h1>

        <div className="flex flex-col mt-3">
          <label htmlFor="email" className="text-sm font-bold text-yellow-600">
            Email
          </label>
          <input
            type="email"
            placeholder="Enter email id /  mobile number"
            required
            id="email"
            className="mt-2 w-80 h-10 pl-1 rounded-xl bg-transparent border-2 border-yellow-600 text-yellow-50 pb-2 pt-2"
            ref={mobile}
          />
        </div>

        <div className="flex flex-col mt-3">
          <label
            htmlFor="password"
            className="text-sm font-bold text-yellow-600"
          >
            Password
          </label>
          <input
            type="password"
            placeholder="Enter email id /  mobile number"
            required
            id="password"
            className="mt-2 w-80 h-10 pl-1 rounded-xl bg-transparent border-2 border-yellow-600 text-yellow-50 pb-2 pt-2"
            ref={password}
          />
        </div>

        {token === false && access === true ? (
          <div className="mt-2 text-red-500 font-bold">Incorrect Password</div>
        ) : null}

        <button
          type="submit"
          className="w-28 h-12 bg-black mt-10 font-bold border-2 border-yellow-600  text-yellow-500 rounded-xl"
          onClick={(e) => {
            loginUser(e);
          }}
        >
          LOGIN
        </button>

        <div className="h-10 mt-6 text-yellow-600 font-bold flex justify-center items-center">
          <Link to="/" className="mr-3 text-xl text-yellow-600 font-bold">
            Regester
          </Link>
          /
          <Link to="/login" className="ml-3 text-xl text-yellow-600 font-bold">
            Login
          </Link>
        </div>
      </form>
    </div>
  );
}
export default Login;
