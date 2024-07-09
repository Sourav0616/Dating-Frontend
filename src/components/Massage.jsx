import { useDispatch } from "react-redux";
import {
  setCurrentUserChat,
} from "../store/chatscreen.slice.js";
import { useNavigate } from "react-router-dom";

function Massage({ data }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  

  const getChatUser = (e) => {
    e.preventDefault();

    const user = data;
    dispatch(setCurrentUserChat(user));

    navigate("/chat");
  };

  return (
    <div className="w-[370px] h-24 bg-gray-500 flex items-center justify-around rounded-xl mb-2 mt-1 ">
      <div className="h-16 w-16 ml-3">
        <img
          src={data.avatar}
          alt=""
          className="rounded-xl  h-16 w-16"
          id={data._id}
        />
      </div>
      <div className="h-20 w-28 flex ml-3  items-center">
        <h1 className="font-bold text-xl capitalize h">{data.name}</h1>
        <h1></h1>
      </div>
      <button
        className="h-16 w-16  font-bold bg-red-500 flex justify-center items-center rounded-full"
        id={data._id}
      >
        Block
      </button>
      <button
        className="h-16 w-16  font-bold bg-green-500 flex justify-center items-center rounded-full"
        id={data._id}
        onClick={(e) => getChatUser(e)}
      >
        Chat
      </button>
    </div>
  );
}
export default Massage;
