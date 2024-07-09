import Massage from "./Massage.jsx";
import Alart  from "./Alart.jsx"
import { useSelector } from "react-redux";
import io from "socket.io-client";
import { setSocket } from "../store/socket.slice.js";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
function Massagecover() {
  const dispatch = useDispatch()
  const User = useSelector((state) => state.currentUser.user);
  
  useEffect(() => {
    const socket = io("http://localhost:7000");
    const id = User._id
    socket.emit("join", id) 
    dispatch(setSocket(socket));
  }, []);

const massage = "Sorry No Match User For Chat !!!!!"  
const data = useSelector((state) => state.collectMassage.massagedata);

  return (
   <>
    {!data || data.length == 0 ? <Alart data={massage}/> : <div className="flex flex-col w-96 m-auto max-h-96 justify-center items-center bg-blue-950 overflow-y-auto border-2 border-yellow-600 rounded-xl">
    {data &&
      Array.isArray(data) &&
      data.length > 0 &&
      data.map((item) => <Massage key={item._id} data={item} />)}
  </div>}
  </>
  );
}
export default Massagecover;
