import cross from "../../public/image/cross.jpeg";
import love from "../../public/image/love.jpeg";
import givelove from "../../public/image/give.png";
import star from "../../public/image/revers.png";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../store/allusers.slice.js";
import { useEffect, useState } from "react";
import { setCurrentUser } from "../store/currentuser.slice.js";
import { setUserLoveReact } from "../store/userreact.slice.js";
import { setUserMatchRequest } from "../store/usermatch.slice.js";

let num = -1;
function Slide() {
  const dispatch = useDispatch();
  const [bgColor, setBgColor] = useState("deeppink");
  function generateRandomHexColor() {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    while (randomColor.length < 6) {
      randomColor = "0" + randomColor;
    }
    return "#" + randomColor;
  }

  const FetchData = useSelector((state) => state.allUserData.data);
  const Loading = useSelector((state) => state.userRegester.success);
  const Token = useSelector((state) => state.userInfo.token);
  const User = useSelector((state) => state.currentUser.user);

  const Actualdata = FetchData.filter((id) => id._id !== User?._id);

  useEffect(() => {
    dispatch(fetchData());
    dispatch(setCurrentUser(Token));
  }, [Loading]);

  

  const [data, setData] = useState({
    _id: 1999,
    name: "Sima Das",
    age: 23,
    bio: "To change the world first change your thinking to seeing the world",
    avatar:
      "https://res.cloudinary.com/dvl2ojizb/image/upload/v1704894124/samples/upscale-face-1.jpg",
    react: 5,
  });

  const changeData = (e) => {
    e.preventDefault();
    if (Actualdata) {
      setData(Actualdata[++num]);
      if (num == Actualdata.length - 1) {
        num = -1;
      }
    }
    setBgColor(generateRandomHexColor());
  };
  const Test = (e) => {
    e.preventDefault();
    console.log(User._id + " " + "this is User id");
    console.log(e.target.id + " " + "this is Card id");
  };

  const loveReact = (e) => {
    e.preventDefault();
    const data = {
      userId: User._id,
      token: Token,
      loveId: e.target.id,
    };
    dispatch(setUserLoveReact(data));
  };

  const matchRequest = (e) => {
    e.preventDefault();
    const data = {
      userId: User._id,
      token: Token,
      loveId: e.target.id,
    };
    dispatch(setUserMatchRequest(data));
  };

  const reversSwipe = (e) => {
    e.preventDefault();
    if (num == 0) {
      num = Actualdata.length - 1;
    }
    setData(Actualdata[--num]);
  };

  return (
    <div className="h-4/5 w-96 bg-blue-950 m-auto flex justify-center items-center mt-2 mb-2">
      <div
        className={`flex flex-col justify-center mt-2 mb-2 border-2 border-yellow-600 items-center h-4/5 w-[370px] rounded-2xl`}
        style={{ backgroundColor: bgColor }}
      >
        <div className="h-80 w-72 pt-6 mb-6 flex flex-col justify-center items-center">
          <img
            className="object-cover h-72 w-72 border-solid border-2 border-yellow-600 rounded-3xl overflow-hidden"
            src={data.avatar}
            alt=""
          />
        </div>
        <div className="flex flex-col justify-center items-center h-40 w-72 pb-4">
          <h1 className="text-xl font-bold text-black">Name : {data.name}</h1>
          <h1 className="text-xl font-semibold">Age : {data.age}</h1>
          <div className="h-7 flex justify-center items-center mt-1 font-semibold">
            <div className="h-7 w-7 flex justify-center items-center bg-yellow-600 rounded-full">
              <img src={love} alt="" className="h-5 rounded-full" />
            </div>
            <p className=" ml-1 "> : {data.react} &nbsp; People</p>
          </div>
          <p className="text-center">
            {" "}
            <span className=" text-sm font-bold">About me :</span> {data.bio}
          </p>
        </div>
        <div className="h-20 w-80 pb-4 flex flex-row justify-around items-center">
          <a
            Link=""
            className="h-16 w-16 bg-yellow-500 rounded-full flex justify-center items-center"
          >
            <img
              src={star}
              alt=""
              className="h-12 w-12 rounded-full"
              id={data._id}
              onClick={(e) => reversSwipe(e)}
            />
          </a>
          <a
            Link=""
            className="h-16 w-16 bg-yellow-500 rounded-full flex justify-center items-center"
          >
            <img
              src={love}
              alt=""
              className="h-12 w-12 rounded-full"
              id={data._id}
              onClick={(e) => loveReact(e)}
            />
          </a>
          <a
            Link=""
            className="h-16 w-16 bg-yellow-500 rounded-full flex justify-center items-center"
          >
            <img
              src={givelove}
              alt=""
              className="h-12 w-12 rounded-full"
              id={data._id}
              onClick={(e) => matchRequest(e)}
            />
          </a>
          <a
            Link=""
            className="h-16 w-16 bg-yellow-500 rounded-full flex justify-center items-center"
          >
            <img
              src={cross}
              alt=""
              className="h-12 w-12 rounded-full"
              id={data._id}
              onClick={(e) => {
                changeData(e), Test(e);
              }}
            />
          </a>
        </div>
      </div>
    </div>
  );
}
export default Slide;
