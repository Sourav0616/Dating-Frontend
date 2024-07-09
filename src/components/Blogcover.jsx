import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Blogcomp from "./Blogcomp";
import { useEffect } from "react";

function Blogcover() {
  const navigate = useNavigate();
  const goToAddBlog = (e) => {
    e.preventDefault();
    navigate("/app/addblog");
  };

  const data = useSelector((state) => state.userblog.blogs);

  useEffect(() => {
    //  rerender if any change in data
  }, [data]);

  return (
    <div className="w-96 m-auto h-auto  flex flex-col items-center">
      <div className="w-96 h-20 bg-gray-700   flex items-center justify-around ">
        <input
          type="scarch"
          className="h-12 w-52 rounded-xl pl-1"
          placeholder="Search by name...."
        />
        <button className="h-12 w-20 text-base font-bold bg-red-600 rounded-xl">
          Scarch
        </button>
        <button
          className="h-12 w-20 text-base font-bold bg-green-500 rounded-xl"
          onClick={(e) => goToAddBlog(e)}
        >
          Add Blog
        </button>
      </div>

      {/*  blog Comp */}

      {data &&
        Array.isArray(data) &&
        data.length > 0 &&
        data.map((data) => <Blogcomp data={data} />)}

      {/*  blog Comp */}
    </div>
  );
}

export default Blogcover;
