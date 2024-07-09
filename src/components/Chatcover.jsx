import { useEffect, useRef, useState } from "react";
import Chatcomp from "./Chatcomp";
import { useSelector } from "react-redux";
import {
  getChatsSpecificUser,
  getSentChatsSpecificUser,
  setMassage,
} from "../store/chatscreen.slice.js";
import { useDispatch } from "react-redux";
import { io } from "socket.io-client";
import { useNavigate } from "react-router-dom";


function Chatcover() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.chat.currentchatuser);
  const massages = useSelector((state) => state.chat.messages);
  const soket = io("http://localhost:8800");
  const User = useSelector((state) => state.currentUser.user);
  const msg = useRef();
  const Token = useSelector((state) => state.userInfo.token);
  const currentChatUser = useSelector((state) => state.chat.currentchatuser);
  const scroll = useRef();
  useEffect(() => {
    const data = {
      userId: User._id,
      token: Token,
      loveId: currentChatUser._id,
    };
    dispatch(getChatsSpecificUser(data));

    soket.emit("new-user-add", User._id);
  }, []);

  const sentMassage = (e) => {
    e.preventDefault();
    const data = {
      userId: User._id,
      loveId: currentChatUser._id,
      message: msg.current.value,
      token: Token,
      senderid: User._id,
      receiverId: currentChatUser._id,
    };

    soket.emit("sentmassage", data);
    dispatch(setMassage(data));
    dispatch(getSentChatsSpecificUser(data));
    msg.current.value = "";
  };

  soket.on("receivedm", (data) => {
    dispatch(setMassage(data));
  });

  useEffect(() => {}, [massages]);

  useEffect(() => {
    scroll.current?.scrollIntoView({ behavior: "smooth" });
  }, [massages]);

  const getBack = (e) => {
    e.preventDefault();
    navigate("/app/massage");
  };

  

  
  return (
    <div className="max-h-screen w-full flex justify-center items-center bg-blue-950 mt-1">
      <div className=" h-screen w-96 flex justify-around flex-col bg-gray-700 ">
        <div className=" w-[370px] m-auto mt-2  flex justify-around items-center  demo">
          <div className="w-16 h-16 ml-1 ">
            <img src={data.avatar} className="w-16 h-16 ml-2 rounded-full" />
          </div>
          <div className="w-24 h-16 flex items-center">
            <h1 className="font-bold ml-4 text-white">{data.name}</h1>
          </div>
          <div className="flex ml-12 h-10 w-48  justify-center items-center pl-7">
        
            <button
              className="font-bold bg-red-500 h-10 w-16 ml-12 rounded-xl"
              onClick={(e) => getBack(e)}
            >
              Exit
            </button>
          </div>
        </div>

        <div className="w-[370px] m-auto  flex flex-col overflow-y-auto scrollbar demo1">
          {massages.length > 0 &&
            massages.map((item) => (
              <Chatcomp key={item.message} data={item} scroll={scroll} />
            ))}
        </div>

        <div className="w-[370px] m-auto mb-2 flex justify-around items-center demo2">
          <button className="text-3xl h-10 w-10 rounded-xl font-bold pb-3 bg-cyan-300">
            +
          </button>
          <input
            type="textarea"
            className=" h-10 w-60 rounded-xl"
            placeholder="Type  here..."
            ref={msg}
          />
          <button
            className="text-bold w-20 h-10 rounded-xl bg-green-500"
            onClick={(e) => sentMassage(e)}
          >
            Sent
          </button>
        </div>
      </div>
    </div>
  );
}

export default Chatcover;
