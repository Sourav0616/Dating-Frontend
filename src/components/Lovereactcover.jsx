import React from "react";
import Loverequest from "./Loverequest.jsx";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteData, rejectLove } from "../store/collectlovereactinfo.slice.js";
import {backLoveReact} from "../store/collectlovereactinfo.slice.js"
import { setUserMatchRequest } from "../store/usermatch.slice.js";
import Alart from "./Alart.jsx";
function Reactlove() {
  const massage = "Sorry No Such Reacts For Your Profile !!!"
  const Token = useSelector((state) => state.userInfo.token);
  const User = useSelector((state) => state.currentUser.user);
  let data = useSelector((state) => {
    return state.collectLoveReact.lovedata;
  });


  const dispatch = useDispatch();

  const delet = (e) => {
    e.preventDefault();
    const data = {
      userId: User.id,
      token: Token,
      loveId: e.target.id,
    };
    dispatch(rejectLove(data));
    dispatch(deleteData(e.target.id));
  };
   
  const loveReact = (e) => {
    e.preventDefault();
    const data = {
      userId: User._id,
      token: Token,
      loveId: e.target.id,
    };
    
    dispatch(backLoveReact(data))
    dispatch(deleteData(e.target.id));
  };

  const matchRequest= (e)=>{
    e.preventDefault();
    const data = {
      userId: User._id,
      token: Token,
      loveId: e.target.id,
    };
    dispatch(setUserMatchRequest(data))
    dispatch(rejectLove(data));
    dispatch(deleteData(e.target.id));
  }
  


  return (
    <>
    {!data || data.length == 0 ? <Alart data={massage}/> : <div className="flex flex-col w-96 m-auto max-h-96 justify-center items-center bg-blue-950 overflow-y-auto">
    {data &&
      Array.isArray(data) &&
      data.length > 0 &&
      data.map((item) => (
        <Loverequest key={item.name} data={item} delet={delet} loveReact={loveReact} matchRequest={matchRequest}/>
      ))}
  </div>}
  </>
  );
}

export default Reactlove;
