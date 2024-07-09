import { FaUser } from "react-icons/fa";
import { IoIosText } from "react-icons/io";
import { FaBloggerB } from "react-icons/fa6";
import { IoMdHeart } from "react-icons/io";
import { FaUserFriends } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { collectUserLoveReacts } from "../store/collectlovereactinfo.slice.js";
import { useDispatch, useSelector } from "react-redux";
import { collectUserMatchrequest } from "../store/collectallmatchinfo.slice.js";
import { userMassageMatch } from "../store/collectallmatchmassage.slice.js";
import { getAllBlogs } from "../store/addblog.slice.js";

function Sidebar() {
  const Token = useSelector((state) => state.userInfo.token);
  const User = useSelector((state) => state.currentUser.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const getAllReactDetails = async (e) => {
    e.preventDefault();
    const data = {
      userId: User._id,
      token: Token,
    };
    dispatch(collectUserLoveReacts(data));
    navigate("/app/react");
  };

  const getAllMatchRequest = (e) => {
    e.preventDefault();
    const data = {
      userId: User._id,
      token: Token,
    };
    dispatch(collectUserMatchrequest(data));
    navigate("/app/matchrequest");
  };

  const getAllMassageRequest = (e) => {
    e.preventDefault();
    const data = {
      userId: User._id,
      token: Token,
    };
    dispatch(userMassageMatch(data));
    navigate("/app/massage");
  };

  const getBlog = (e) => {
    e.preventDefault();
    const data = {
      userId: User._id,
      token: Token,
    };
    dispatch(getAllBlogs(data));
    navigate("/app/blog");
  };

  const getProfile = (e) => {
    e.preventDefault();
    navigate("/app/profile");
  };

  return (
    <div className="h-24 w-96 m-auto flex justify-around items-center bg-blue-950">
      <div className="h-20 w-20  rounded-xl flex flex-col justify-center items-center">
        <div className="h-12 w-12 mt-1  flex justify-center items-center">
          <FaUser className="h-10 w-10 text-yellow-600 pb-1" />
        </div>
        <button
          onClick={(e) => getProfile(e)}
          className="mb-1 text-base font-bold text-yellow-50 pt-1"
        >
          Profile
        </button>
      </div>

      <div className="h-20 w-20  rounded-xl flex flex-col justify-center items-center">
        <div className="h-12 w-12 mt-1  flex justify-center items-center">
          <IoIosText className="h-20 w-20 text-yellow-600" />
        </div>
        <button
          onClick={(e) => getAllMassageRequest(e)}
          className="mb-1 text-base font-bold  text-yellow-50 pt-1"
        >
          Massage
        </button>
      </div>

      <div className="h-20 w-20  rounded-xl flex flex-col justify-center items-center">
        <div className="h-12 w-12 mt-1  flex justify-center items-center">
          <FaBloggerB className="h-12 w-12  text-yellow-600" />
        </div>
        <button
          onClick={(e) => getBlog(e)}
          className="mb-1 text-base font-bold text-yellow-50 pt-1"
        >
          Blog
        </button>
      </div>

      <div className="h-20 w-20  rounded-xl flex flex-col justify-center items-center">
        <div className="h-12 w-12 mt-1  flex justify-center items-center">
          <IoMdHeart className="h-12 w-12 text-yellow-600" />
        </div>
        <button
          onClick={(e) => getAllReactDetails(e)}
          className="mb-1 text-base font-bold text-yellow-50 pt-1"
        >
          Love
        </button>
      </div>

      <div className="h-20 w-20 rounded-xl  flex flex-col justify-center items-center">
        <div className="h-12 w-12 mt-1 flex justify-center items-center">
          <FaUserFriends className="h-16 w-16 text-yellow-600" />
        </div>
        <button
          onClick={(e) => getAllMatchRequest(e)}
          className="mb-1 text-base font-bold text-yellow-50 pt-1"
        >
          Match
        </button>
      </div>
    </div>
  );
}
export default Sidebar;
