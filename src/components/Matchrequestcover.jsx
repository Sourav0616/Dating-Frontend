import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Matchrequest from "./Matchrequest";
import {rejectMatchReq , deleteMatch} from "../store/collectallmatchinfo.slice.js"
import { setUserMassage } from "../store/creatmassage.slice.js";
import Alart from "./Alart.jsx";
function Matchrequestcover() {
  const massage= "No Such Match Request Yet !!!!"
  const dispatch = useDispatch()
  const Token = useSelector((state) => state.userInfo.token);
  const User = useSelector((state) => state.currentUser.user);
   const data= useSelector(state => state.collectMatchRequest.matchdata);


   const deletmatchRequest = (e)=>{
    e.preventDefault();
    const data = {
      userId: User.id,
      token: Token,
      loveId: e.target.id,
    };
    dispatch(rejectMatchReq(data))
    dispatch (deleteMatch(e.target.id));
   }

   const massageConnectionn = (e)=>{
    e.preventDefault();
    const data = {
      userId: User.id,
      token: Token,
      loveId: e.target.id,
    };
    dispatch(setUserMassage(data))
    dispatch(rejectMatchReq(data))
    dispatch (deleteMatch(e.target.id));
   }

  return (
    <>
    {!data || data.length == 0 ? <Alart data={massage}/> : <div className="flex m-auto flex-col w-96 max-h-96 justify-center items-center bg-blue-950 overflow-y-auto">
      {data &&
        Array.isArray(data) &&
        data.length > 0 && data.map((item) => (
        <Matchrequest key={item._id} data={item} deletmatchRequest={deletmatchRequest} massageConnectionn={massageConnectionn}/>
      ))}
    </div>}
    </>
   

    
  );
}

export default Matchrequestcover;
