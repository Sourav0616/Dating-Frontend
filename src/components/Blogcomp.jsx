import { useRef } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addComment, disLikeBlog, likeBlog } from "../store/addblog.slice.js";
import { useSelector } from "react-redux";
import blue from "../../public/image/blue.png";
import VideoPlayer from "./Video.jsx";
function Blogcomp({ data }) {
  const dispatch = useDispatch();
  const comment = useRef();
  const [showComments, setShowComments] = useState(false);
  const toggleMassage = (e) => {
    e.preventDefault();
    setShowComments(!showComments);
  };
  const Token = useSelector((state) => state.userInfo.token);
  const User = useSelector((state) => state.currentUser.user);

  const addComments = (e) => {
    e.preventDefault();
    const data = {
      blogId: e.target.id,
      massage: comment.current.value,
      createrAvatar: User.avatar,
      createrName: User.name,
      createrId: User._id,
      token: Token,
    };
  

    dispatch(addComment(data));
    comment.current.value = "";
  };

  const addLike = (e) => {
    e.preventDefault();
    const data = {
      whoReact: User._id,
      blogId: e.target.id,
      token: Token,
    };
  
    dispatch(likeBlog(data));
  };

  const addDisLike = (e) => {
    e.preventDefault();
    const data = {
      whoReact: User._id,
      blogId: e.target.id,
      token: Token,
    };

    dispatch(disLikeBlog(data));
  };

  return (
    <div className="w-96 justify-center items-center  min-h-[700px] mt-2 flex flex-col  bg-slate-800 rounded-xl border-2 border-yellow-500">
      <header className="h-20 w-96 mt-2 flex items-center">
        <div className=" ml-3 h-20 w-20 bg-black rounded-full">
          <img
            src={data.useravatar}
            alt=""
            className=" h-20 w-20 rounded-full"
          />
        </div>
        <div className="ml-3 flex flex-col w-28">
          <h1 className="font-bold text-xl text-yellow-50">{data.name}</h1>
          <h1 className="text-yellow-50 mt-1 text-xs">
            {" "}
            {new Date(data.createdAt).toLocaleDateString()}
          </h1>
        </div>
        <div className="h-8 w-10 mt-[-25px] rounded-full">
          <img src={blue} className="h-8 w-10 rounded-full" />
        </div>
        <button className="h-10 w-24 bg-fuchsia-700 ml-6 rounded-xl font-bold">
          Add Match
        </button>
      </header>

      <section className="mt-3 min-h-[490px] w-96 flex flex-col justify-around">
        <div className="min-h-20 w-96 pl-3 pr-3 mt-1">
          <h1 className="overflow-auto font-bold text-sm text-yellow-50">
            {data.description}
          </h1>
          <div className=" min-h-7 w-full mt-1 mb-1 flex flex-wrap ">
            {data.tags.map((tags) => (
              <div className="bg-cyan-500 flex justify-center items-center h-7 w-auto mr-3 p-2 rounded-md font-bold mt-1">
                #{tags}
              </div>
            ))}
          </div>
        </div>

        <div className="h-auto w-96 flex justify-center items-center mt-3 rounded-xl">

          {data.type === "image" ? <div className="h-96 w-[360px]  box-content rounded-xl border-2 border-yellow-600">
            <img
              src={data.postimage}
              className="h-96 p-1 w-96 rounded-xl"
            />
          </div> :  <VideoPlayer cloudinaryVideoUrl={data.postimage} />}
          

         
        </div>
      </section>
      <footer className="w-[370px] h-20 mt-3 flex items-center justify-between">
        <button
          className="h-12 w-20 bg-green-500 rounded-xl text-lg font-medium"
          id={data._id}
          onClick={(e) => addLike(e)}
        >
          {/* <span id={data._id}>{data.like.length} Like</span> */}
          {data.like.length > 0 &&
          data.like.some((like) => like?.userId === User._id) ? (
            <span id={data._id}>{data.like.length} Liked</span>
          ) : (
            <span id={data._id}>{data.like.length} Like</span>
          )}
        </button>
        <button
          className="h-12 w-24 bg-red-500 rounded-xl text-lg font-medium"
          id={data._id}
          onClick={(e) => addDisLike(e)}
        >
          {/* <span id={data._id}>{data.dislike.length} Dislike</span> */}
          {data.dislike.length > 0 &&
          data.dislike.find((data) => data?.userId == User._id) ? (
            <span id={data._id}> {data.dislike.length} Disliked</span>
          ) : (
            <span id={data._id}>{data.dislike.length} Dislike</span>
          )}
        </button>
        <button
          className="h-12 w-28 bg-yellow-500 rounded-xl text-lg font-medium"
          onClick={(e) => toggleMassage(e)}
        >
          {data.comments.length} comments
        </button>
        <button className="h-12 w-16 bg-purple-500 rounded-xl text-lg font-medium">
          {data.share.length} Share
        </button>
      </footer>
      {showComments == true ? (
        <div className="w-96 flex flex-col mt-2 ">
          <h1 className="font-bold text-xl ml-2 text-yellow-50">Comments</h1>
          <div className="h-auto w-[370px] m-auto bg-slate-800 flex flex-col border-2 border-yellow-500 rounded-xl mb-2 mt-1">
            {/* <h1 className="font-bold text-yellow-50">Add Comments</h1> */}
            <div className="w-96 h-16 flex mt-2">
              <input
                type="textares"
                className="h-12 rounded-xl pl-1 ml-1 w-64"
                placeholder="Type Your Comments..."
                ref={comment}
              />
              <button
                id={data._id}
                className="h-12 font-bold ml-1 rounded-xl w-24 bg-purple-600"
                onClick={(e) => addComments(e)}
              >
                Add Comments
              </button>
            </div>
          </div>
          {data.comments &&
            data.comments.length > 0 &&
            data.comments.map((data) => (
              <div className="h-auto w-[370px] m-auto bg-slate-800 flex border-2 border-yellow-500 rounded-xl mb-2 mt-1">
                <div className="h-16 w-16 bg-orange-800 rounded-full mt-2">
                  <img src={data.avatar} className="h-16 w-16 rounded-full" />
                </div>
                <div className="w-80">
                  <h1 className="pl-3 pt-3  text-yellow-600 font-bold">
                    {data.name}
                  </h1>
                  <h1 className="pl-3 pt-1 pr-2 pb-2 text-yellow-50">
                    {data.comments}
                  </h1>
                </div>
              </div>
            ))}
        </div>
      ) : null}
    </div>
  );
}

export default Blogcomp;
