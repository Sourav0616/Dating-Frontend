import { useState } from "react";
import image from "../../public/image/jori-logos_transparent.png";
import Miniheader from "./Miniheader";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function Header() {
  const navigate = useNavigate()
  const home = (e)=>{
    e.preventDefault();
    navigate("/app/home")
  }
  const [showMiniHeader, setShowMiniHeader] = useState(true);
  const Showminiheader = (e) => {
    e.preventDefault();
    setShowMiniHeader(!showMiniHeader);
  };

  return (
    <>
      <nav className="w-96 h-auto bg-blue-950  flex justify-between m-auto items-center">
        <div className="object-cover cursor-pointer overflow-hidden h-20 w-20"
        onClick={(e)=>home(e)}
        >
          <img src={image} alt=""  onClick={(e)=>home(e)}/>
        </div>
        {/* <div className="hidden md: block md:flex h-20 w-96 items-center justify-around">
          <a Link="">
            <h1 className="text-yellow-500 font-medium">ABOUT</h1>
          </a>
          <a Link="">
            <h1 className="text-yellow-500 font-medium">HOME</h1>
          </a>
          <a Link="">
            <h1 className="text-yellow-500 font-medium">FEATURS</h1>
          </a>
          <a Link="">
            <h1 className="text-yellow-500 font-medium">PRICEING</h1>
          </a>
          <Link to="">
            <h1 className="text-yellow-500 font-medium">CONTACT</h1>
          </Link>
        </div> */}
        <div className="hidden h-20 w-40 md:block md:flex md:items-center md:justify-around">
          {/* <button className="h-12 w-24 bg-white font-bold rounded-md">
            LOGOUT
          </button> */}
        </div>
        <div className="h-20 w-24 flex pb-3  items-center justify-center">
          <button
            className="text-6xl text-yellow-600 ml-7"
            onClick={(e) => Showminiheader(e)}
          >
            &#8801;
          </button>
        </div>
      </nav>
      {showMiniHeader == false ? (
        <Miniheader Showminiheader={Showminiheader} />
      ) : null}
    </>
  );
}

export default Header;
