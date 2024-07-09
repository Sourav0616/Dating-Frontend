import { useRef, useState } from "react";
import picture from "../../public/image/JORI-logos_transparent.png";
import { regesterUser } from "../store/userregester.schema.js";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
function Regester() {
  const navigate = useNavigate();
  const name = useRef();
  const email = useRef();
  const mobile = useRef();
  const password = useRef();
  const bio = useRef();
  const age = useRef();
  const [avatar, setAvatar] = useState("");
  const [gender, setGender] = useState("");
  const dispatch = useDispatch();
  const getFormData = async (e) => {
    e.preventDefault();
    const data = {
      name: name.current.value,
      email: email.current.value,
      mobile: mobile.current.value,
      age: age.current.value,
      password: password.current.value,
      bio: bio.current.value,
      avatar: avatar,
      gender: gender,
    };
    const fromData = new FormData();
    fromData.append("name", data.name);
    fromData.append("bio", data.bio);
    fromData.append("avatar", data.avatar);
    fromData.append("password", data.password);
    fromData.append("age", data.age);
    fromData.append("gender", data.gender);
    fromData.append("mobile", data.mobile);
    fromData.append("email", data.email);
    dispatch(regesterUser(fromData));
    navigate("/login");
  };
  return (
    <div className="w-screen h-screen   flex justify-center items-center"> 
      <form
        action=""
        className="w-96 h-auto border-2 border-yellow-600 bg-blue-950 flex flex-col justify-center items-center rounded-3xl"
      >
        <div className="h-20 w-20 mt-[-4]">
          <img src={picture} alt="" className="h-20 w-20" />
        </div>
        <h1 className="text-xl font-bold text-yellow-600">
          Ragester With Jori
        </h1>
        <div className="flex flex-col mt-3">
          <label htmlFor="name" className="text-sm font-bold text-yellow-600">
            Name
          </label>
          <input
            type="text"
            placeholder="Enter your name"
            id="name"
            ref={name}
            required
            className="mt-2 w-80 h-10 pl-1 rounded-xl bg-transparent border-2 border-yellow-600 text-yellow-50 pb-2 pt-2"
          />
        </div>
        <div className="flex flex-col mt-3">
          <label htmlFor="mobile" className="text-sm font-bold text-yellow-600">
            Mobile
          </label>
          <input
            type="Number"
            placeholder="Enter mobile no"
            required
            id="mobile"
            className="mt-2 w-80 h-10 pl-1 rounded-xl bg-transparent border-2 border-yellow-600 text-yellow-50 pb-2 pt-2"
            ref={mobile}
          />
        </div>
        <div className="flex flex-col mt-3">
          <label htmlFor="email" className="text-sm font-bold text-yellow-600">
            Email
          </label>
          <input
            type="email"
            placeholder="Enter email id"
            required
            id="email"
            className="mt-2 w-80 h-10 pl-1 rounded-xl bg-transparent border-2 border-yellow-600 text-yellow-50 pb-2 pt-2"
            ref={email}
          />
        </div>
        <div className="flex flex-col mt-3">
          <label
            htmlFor="passwors"
            className="text-sm font-bold text-yellow-600"
          >
            Password
          </label>
          <input
            type="password"
            placeholder="Enter your password "
            required
            id="passwors"
            className="mt-2 w-80 h-10 pl-1 rounded-xl bg-transparent border-2 border-yellow-600 text-yellow-50 pb-2 pt-2"
            ref={password}
          />
        </div>
        <div className="flex flex-col mt-3 w-80 h-8 ">
          <label htmlFor="gender" className="text-sm font-bold text-yellow-600">
            Gender
          </label>
          <div className="flex justify-between items-center">
            <div>
              <input
                type="radio"
                placeholder="Enter email id"
                required
                id="male"
                name="gender"
                value="Male"
                onClick={() => setGender("Male")}
                className="mt-2"
              />
              <label className="ml-2 text-yellow-50" htmlFor="male">
                Male
              </label>
            </div>
            <div>
              <input
                type="radio"
                placeholder="Enter email id"
                required
                id="female"
                name="gender"
                value="Female"
                onClick={() => setGender("Female")}
              />
              <label className="ml-2 text-yellow-50" htmlFor="female">
                Female
              </label>
            </div>
            <div className="mr-2">
              <input
                type="radio"
                placeholder="Enter email id"
                required
                id="others"
                name="gender"
                value="Others"
                onClick={() => setGender("Others")}
              />
              <label className="ml-2 text-yellow-50" htmlFor="others">
                Others
              </label>
            </div>
          </div>
        </div>
        <div className="flex flex-col mt-3">
          <label htmlFor="age" className="text-sm font-bold text-yellow-600">
            Age
          </label>
          <input
            type="number"
            placeholder="Enter your age"
            id="age"
            ref={age}
            required
            className="mt-2 w-80 h-10 pl-1 rounded-xl bg-transparent border-2 border-yellow-600 text-yellow-50 pb-2 pt-2"
          />
        </div>
        <div className="flex flex-col mt-4">
          <label htmlFor="bio" className="text-sm font-bold text-yellow-600">
            Bio
          </label>
          <input
            type="textarea"
            placeholder="Say somthing about you"
            required
            id="bio"
            className="mt-2 w-80 h-16 text-clip pl-1 rounded-xl bg-transparent border-2 border-yellow-600 text-yellow-50"
            maxLength="100"
            ref={bio}
          />
        </div>
        <div className="flex flex-col mt-2">
          <label htmlFor="image" className="text-sm font-bold text-yellow-600">
            Image
          </label>
          <input
            type="file"
            placeholder="Enter your name"
            id="image"
            required
            className="mt-2 w-80 h-8"
            onChange={(e) => setAvatar(e.target.files[0])}
          />
        </div>
        <button
          type="submit"
          className="w-28 h-12 bg-black mt-8 border-2 border-yellow-600 font-bold text-yellow-500 rounded-xl"
          onClick={async (e) => {
            await getFormData(e);
          }}
        >
          REGESTER
        </button>
        <div className="h-10 mt-4 mb-2 flex justify-center items-center text-yellow-600 font-bold">
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

export default Regester;
