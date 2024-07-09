import { FaSadTear } from "react-icons/fa";
import { Link } from "react-router-dom";
function Alart({ data }) {
  return (
    <div className="h-[700px] w-96 bg-blue-950 border-2 border-yellow-600 mt-1 mb-1 flex flex-col justify-center items-center m-auto ">
      <div className="flex w-full justify-center">
        <FaSadTear className="text-yellow-600 text-5xl m-2" />
        <FaSadTear className="text-yellow-600 text-5xl m-2" />
        <FaSadTear className="text-yellow-600 text-5xl m-2" />
      </div>
      <h1 className="text-2xl font-bold mt-5 w-96 text-center text-yellow-600">
        {data}
      </h1>
      <Link
        to="/app/home"
        className="mt-10 text-xl border-2 border-yellow-600 font-bold p-3 rounded-xl text-yellow-600"
      >
        Back To Home
      </Link>
    </div>
  );
}

export default Alart;
