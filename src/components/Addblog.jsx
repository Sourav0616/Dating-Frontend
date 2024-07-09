import picture from "../../public/image/JORI-logos_transparent.png";
import left from "../../public/image/left.png";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { addBlog } from "../store/addblog.slice";
import LoadingSpinner from "./Loading";
function Addblog() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const backToBlog = (e) => {
    e.preventDefault();
    navigate("/app/blog");
  };
  const User = useSelector((state) => state.currentUser.user);
  const Token = useSelector((state) => state.userInfo.token);

  const loading = useSelector((state) => state.userblog.loading);
  const weating = useSelector((state) => state.userblog.weating);
  const [postimg, setPostimg] = useState("");
  const [content, setContent] = useState("");

  const setImg = () => {
    setContent("image");
  };
  const setVid = () => {
    setContent("video");
  };

  const tags = useRef();
  const discription = useRef();

  const colletDataToSent = (e) => {
    e.preventDefault();
    const data = {
      createrid: User._id,
      useravatar: User.avatar,
      type: content,
      name: User.name,
      tags: tags.current.value,
      description: discription.current.value,
      avatar: postimg,
      token: Token,
    };
    setPostimg("")
    setContent("")
    tags.current.value =""
    discription.current.value=""
    dispatch(addBlog(data));
  };

  useEffect(() => {}, [loading, weating]);

  return (
    <div className="h-auto mt-5 w-96 rounded-xl m-auto relative flex-col bg-cyan-950 flex justify-center items-center mb-5">
      <form
        action=""
        className="h-5/6 w-[360px] border-2 mt-1 mb-1  border-yellow-600 flex flex-col justify-center items-center rounded-3xl relative"
      >
        <div>
          <button
            className="h-12  w-12 absolute mt-3 ml-[-160px]  rounded-full bg-purple-600"
            type="button"
          >
            <img src={left} alt="" onClick={(e) => backToBlog(e)} />
          </button>
        </div>

        <div className="h-20 w-20 mt-6">
          <img src={picture} alt="" className="h-20 w-20" />
        </div>
        <h1 className="font-bold text-yellow-600">Add Your Blog</h1>

        <div className="flex flex-col mt-2">
          <label htmlFor="image" className="text-sm font-bold text-yellow-600">
            Content
          </label>
          <input
            type="file"
            id="image"
            required
            className="mt-3 w-80 h-12 text-clip pl-1 pt-2 border-2 border-yellow-600 rounded-xl "
            onChange={(e) => setPostimg(e.target.files[0])}
          />
        </div>

        <div className="flex flex-col mt-3 w-80 h-8 ">
          <label htmlFor="gender" className="text-sm font-bold text-yellow-600">
            Content Type
          </label>
          <div className="flex  items-center">
            <div>
              <input
                type="radio"
                placeholder="Enter email id"
                required
                id="image"
                name="content"
                value="image"
                onClick={() => setImg()}
                className="mt-3"
              />
              <label className="ml-2 text-yellow-50" htmlFor="male">
                Image
              </label>
            </div>
            <div>
              <input
                type="radio"
                placeholder="Enter email id"
                required
                id="video"
                name="content"
                value="video"
                className="mt-3 ml-10"
                onClick={() => setVid()}
              />
              <label className="ml-2 text-yellow-50" htmlFor="female">
                Video
              </label>
            </div>
          </div>
        </div>
        <div className="flex flex-col mt-6 ">
          <label
            htmlFor="description"
            className="text-sm font-bold text-yellow-600"
          >
            Description
          </label>
          <input
            type="textarea"
            placeholder="Say somthing about your blog...."
            required
            id="description"
            className="mt-3 w-80 min-h-16 text-clip pl-1 text-wrap border-2 border-yellow-600 rounded-xl"
            ref={discription}
          />
        </div>

        <div className="flex flex-col mt-4">
          <label htmlFor="tags" className="text-sm font-bold text-yellow-600">
            Tags
          </label>
          <input
            type="textarea"
            placeholder="Type your tags separeted by ,,,,"
            required
            id="tags"
            className="mt-3 w-80 h-16 text-clip pl-1 text-wrap border-2 border-yellow-600 rounded-xl"
            maxLength="100"
            ref={tags}
          />
        </div>
        {loading === true && <LoadingSpinner />}
        {loading === false && weating=== true && <div className="font-bold text-yellow-600">Upload Sucessfull</div>}
        <button
          type="submit"
          className="w-28 h-12 mb-6 bg-black mt-8 font-bold border-2 border-yellow-600 text-yellow-500 rounded-xl"
          onClick={(e) => colletDataToSent(e)}
        >
          Add
        </button>
      </form>
    </div>
  );
}
export default Addblog;
