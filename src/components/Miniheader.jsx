import { Link } from "react-router-dom";

function Miniheader() {
  return (
    <div className="h-screen w-96 screen flex flex-col m-auto bg-blue-950 ">
      <div className="h-[50%] w-full text-white flex flex-col justify-center items-center">
        <Link to="/app/home" className="text-xl text-yellow-600 font-bold mb-5">
          HOME
        </Link>
        <Link to="" className="text-xl text-yellow-600 font-bold mb-5">
          ABOUT
        </Link>
        <Link to="" className="text-xl text-yellow-600 font-bold mb-5">
          FEATURS
        </Link>
        <Link to="" className="text-xl text-yellow-600 font-bold mb-5">
          PRICEING
        </Link>
        <Link to="" className="text-xl text-yellow-600 font-bold mb-5">
          CONTACT
        </Link>
      </div>
      <div className="h-[10%] w-full text-white flex justify-center items-center">
        <button className="w-32 h-16 bg-slate-900 text-yellow-600 text-xl font-bold rounded-xl border-2 border-yellow-600">
          LOGOUT
        </button>
      </div>
    </div>
  );
}

export default Miniheader;
