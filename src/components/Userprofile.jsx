import cross from "../../public/image/cross.jpeg";
import love from "../../public/image/love.jpeg";
import givelove from "../../public/image/give.png";
import star from "../../public/image/star.jpg";
import blue from "../../public/image/blue.png";
import edit from "../../public/image/edit.png";
import { useState } from "react";
import { useSelector } from "react-redux";
function Userprofile() {
  // for addaress
  const [addaress, setAddaress] = useState(false);
  const Setaddaress = (e) => {
    e.preventDefault();
    setAddaress(!addaress);
  };
  // for language
  const [language, setLanguage] = useState(false);
  const Setlanguage = (e) => {
    e.preventDefault();
    setLanguage(!language);
  };
  // for hobbies
  const [hobbies, setHobbies] = useState(false);
  const Sethobbies = (e) => {
    e.preventDefault();
    setHobbies(!hobbies);
  };
  // for hobbies
  const [education, setEducation] = useState(false);
  const Seteducation = (e) => {
    e.preventDefault();
    setEducation(!education);
  };

  // for mobile
  const [mobile, setMobile] = useState(false);
  const Setmobile = (e) => {
    e.preventDefault();
    setMobile(!mobile);
  };

  // for mobile
  const [email, setEmail] = useState(false);
  const Setemail = (e) => {
    e.preventDefault();
    setEmail(!email);
  };
  // for othersthings
  const [others, setOthers] = useState(false);
  const Setothers = (e) => {
    e.preventDefault();
    setOthers(!others);
  };
  const data = useSelector((state) => state.currentUser.user);


  
  

  
  return (
    <div className="w-96 m-auto h-auto flex flex-col justify-center items-center mb-2 bg-blue-950">
      <div className="h-16 mt-2 w-[370px] font-bold text-2xl bg-yellow-600 rounded-xl items-center justify-center flex">
        Prevew Your Card
      </div>
      <div className="flex flex-col justify-center items-center bg-purple-500 h-4/5 w-[370px] rounded-2xl mt-2 mb-2">
        <div className="h-80 w-72 pt-6 mb-7 flex flex-col justify-center items-center">
          <img
            className="object-cover border-solid border-2 border-sky-500 rounded-3xl overflow-hidden w-72"
            src={data.avatar}
            alt=""
          />
        </div>
        <div className="flex flex-col justify-center items-center h-40 w-72 pb-4">
          <h1 className="text-xl">Name : {data.name}</h1>
          <h1 className="text-xl">Age : {data.age}</h1>
          <div className="h-5 flex justify-center items-center mt-1">
            <img src={love} alt="" className="h-5 rounded-full" />
            <p className=" ml-1 "> : {data.react} &nbsp; people</p>
          </div>
          <p className="text-center">
            {" "}
            <span className="font-medium">About me :</span> {data.bio}
          </p>
        </div>
        <div className="h-20 w-80 pb-4 flex flex-row justify-around items-center">
          <a
            Link=""
            className="h-16 w-16 bg-yellow-500 rounded-full flex justify-center items-center"
          >
            <img
              src={star}
              alt=""
              className="h-12 w-12 rounded-full"
              id={data._id}
              onClick={""}
            />
          </a>
          <a
            Link=""
            className="h-16 w-16 bg-yellow-500 rounded-full flex justify-center items-center"
          >
            <img
              src={love}
              alt=""
              className="h-12 w-12 rounded-full"
              id={data._id}
            />
          </a>
          <a
            Link=""
            className="h-16 w-16 bg-yellow-500 rounded-full flex justify-center items-center"
          >
            <img
              src={givelove}
              alt=""
              className="h-12 w-12 rounded-full"
              id={data._id}
            />
          </a>
          <a
            Link=""
            className="h-16 w-16 bg-yellow-500 rounded-full flex justify-center items-center"
          >
            <img
              src={cross}
              alt=""
              className="h-12 w-12 rounded-full"
              id={data._id}
            />
          </a>
        </div>
      </div>
     
        <div className="h-16 mt-2 mb-2  w-[370px] font-bold text-2xl bg-yellow-600 rounded-xl items-center flex">
          <h1 className="m-1">{data.name}</h1>
          <h1 className="ml-4">{data.age}</h1>
          <img src={blue} alt="" className="h-8 ml-2 mt-1" />
        </div>
        {/* addaress */}
        <div className="mt-1 mb-2 w-[370px] h-auto text-2xl bg-yellow-600 rounded-xl items-center flex">
          <div className="w-96 flex flex-col mb-1">
            <h1 className="text-xl font-bold pl-1">Addaress</h1>
            {data.addaress ? (
              <div className="flex mt-1 pl-1 mb-1">
                <h1 className="text-sm font-bold w-80 h-10 flex items-center">
                  {data.addaress}
                </h1>
                <button onClick={(e) => Setaddaress(e)}>
                  <img src={edit} alt="" className=" h-6 w-6" />
                </button>
              </div>
            ) : (
              <div className="flex mt-1 pl-1 mb-1">
                <h1 className="text-sm font-bold w-80 h-10 flex items-center">
                  Add your addaress
                </h1>
                <button onClick={(e) => Setaddaress(e)}>
                  <img src={edit} alt="" className=" h-6 w-6" />
                </button>
              </div>
            )}
            {addaress == true ? (
              <div className="flex h-12 pl-0.5 items-center mb-1 rounded-xl">
                <input
                  type="textarea"
                  placeholder="Type your addaress spred by ,,,"
                  className="h-8 pl-1 w-72 text-base rounded-xl border-2 border-yellow-600"
                />
                {addaress == true ? (
                  <button className="bg-yellow-500 w-16 rounded-lg h-8 ml-1 font-bold text-base">
                    {data.addaress ? <span>Update</span> : <span>Add</span>}
                  </button>
                ) : null}
              </div>
            ) : null}
          </div>
        </div>
        {/* addaress */}

        {/* education */}

        <div className="mt-1 mb-2  w-[370px] h-auto text-2xl bg-yellow-600 rounded-xl items-center flex">
          <div className="w-96 flex flex-col mb-1">
            <h1 className="text-xl font-bold pl-1">Education</h1>
            {data.education ? (
              <div className="flex  pl-1">
                <h1 className="text-sm font-bold w-80 h-10 flex items-center">
                  {data.education}
                </h1>
                <button onClick={(e) => Seteducation(e)}>
                  <img src={edit} alt="" className=" h-6 w-6" />
                </button>
              </div>
            ) : (
              <div className="flex mt-1 pl-1 mb-1 ">
                <h1 className="text-sm font-bold w-80 h-10 flex items-center">
                  Add your higher education !!!
                </h1>
                <button onClick={(e) => Seteducation(e)}>
                  <img src={edit} alt="" className=" h-6 w-6" />
                </button>
              </div>
            )}
            {education == true ? (
              <div className="flex h-12 items-center mb-1 rounded-xl">
                <input
                  type="textarea"
                  placeholder="Type your hobbies spred by ,,,"
                  className="h-8 pl-1 ml-0.5 w-72 text-base rounded-xl border-2 border-yellow-600"
                />
                {education == true ? (
                  <button className="bg-yellow-500 w-16 rounded-lg h-8 ml-1 font-bold text-base">
                    {data.education ? <span>Update</span> : <span>Add</span>}
                  </button>
                ) : null}
              </div>
            ) : null}
          </div>
        </div>

        {/* education */}

        {/* language */}
        <div className="mt-1 mb-2 w-[370px]  h-auto text-2xl bg-yellow-600 rounded-xl items-center flex">
          <div className="w-96 flex flex-col mb-1">
            <h1 className="text-xl font-bold pl-1">Language</h1>
            {data.language ? (
              <div className="flex  pl-1">
                <h1 className="text-sm font-bold w-80 h-10 flex items-center">
                  {data.language}
                </h1>
                <button onClick={(e) => Setlanguage(e)}>
                  <img src={edit} alt="" className=" h-6 w-6" />
                </button>
              </div>
            ) : (
              <div className="flex mt-1 pl-1 mb-1 ">
                <h1 className="text-sm font-bold w-80 h-10 flex items-center">
                  Add language that you know !!!
                </h1>
                <button onClick={(e) => Setlanguage(e)}>
                  <img src={edit} alt="" className=" h-6 w-6" />
                </button>
              </div>
            )}
            {language == true ? (
              <div className="flex h-12 items-center mb-1 rounded-xl">
                <input
                  type="textarea"
                  placeholder="Type your language spred by ,,,"
                  className="h-8 pl-1 ml-0.5 w-72 text-base rounded-xl border-2 border-yellow-600"
                />
                {language == true ? (
                  <button className="bg-yellow-500 w-16 rounded-lg h-8 ml-1 font-bold text-base">
                    {data.language ? <span>Update</span> : <span>Add</span>}
                  </button>
                ) : null}
              </div>
            ) : null}
          </div>
        </div>
        {/* language */}

        {/* mobile */}
        <div className="mt-1 mb-2  w-[370px] h-auto text-2xl bg-yellow-600 rounded-xl items-center flex">
          <div className="w-96 flex flex-col mb-1">
            <h1 className="text-xl font-bold pl-1">Mobile</h1>

            <div className="flex  pl-1">
              <h1 className="text-sm font-bold w-80 h-10 flex items-center">
                {data.mobile}
              </h1>
              <button onClick={(e) => Setmobile(e)}>
                <img src={edit} alt="" className=" h-6 w-6" />
              </button>
            </div>

            {mobile == true ? (
              <div className="flex h-12 items-center mb-1 rounded-xl">
                <input
                  type="textarea"
                  placeholder="Type your mobile no...."
                  className="h-8 pl-1  w-72 ml-0.5 text-base rounded-xl border-2 border-yellow-600"
                />
                {mobile == true ? (
                  <button className="bg-yellow-500 w-16 rounded-lg h-8 ml-1 font-bold text-base">
                    <span>Update</span>
                  </button>
                ) : null}
              </div>
            ) : null}
          </div>
        </div>

        {/* mobile */}

        {/* email */}
        <div className="mt-1 mb-2  w-[370px] h-auto text-2xl bg-yellow-600 rounded-xl items-center flex">
          <div className="w-96 flex flex-col mb-1">
            <h1 className="text-xl font-bold pl-1">Email</h1>

            <div className="flex  pl-1">
              <h1 className="text-sm font-bold w-80 h-10 flex items-center">
                {data.email}
              </h1>
              <button onClick={(e) => Setemail(e)}>
                <img src={edit} alt="" className=" h-6 w-6" />
              </button>
            </div>

            {email == true ? (
              <div className="flex h-12 items-center mb-1 rounded-xl">
                <input
                  type="textarea"
                  placeholder="Type your email...."
                  className="h-8 pl-1 ml-0.5 w-72 text-base rounded-xl border-2 border-yellow-600"
                />
                {email == true ? (
                  <button className="bg-yellow-500 w-16 rounded-lg h-8 ml-1 font-bold text-base">
                    <span>Update</span>
                  </button>
                ) : null}
              </div>
            ) : null}
          </div>
        </div>

        {/* email */}

        {/* hobby */}
        <div className="mt-1 mb-2  w-[370px] h-auto text-2xl bg-yellow-600 rounded-xl items-center flex">
          <div className="w-96 flex flex-col mb-1">
            <h1 className="text-xl font-bold pl-1">Hobbies</h1>
            {data.hobbies ? (
              <div className="flex  pl-1">
                <h1 className="text-sm font-bold w-80 h-10 flex items-center">
                  {data.hobbies}
                </h1>
                <button onClick={(e) => Sethobbies(e)}>
                  <img src={edit} alt="" className=" h-6 w-6" />
                </button>
              </div>
            ) : (
              <div className="flex mt-1 pl-1 mb-1 ">
                <h1 className="text-sm font-bold w-80 h-10 flex items-center">
                  Add hobbies that you love to do !!!
                </h1>
                <button onClick={(e) => Sethobbies(e)}>
                  <img src={edit} alt="" className=" h-6 w-6" />
                </button>
              </div>
            )}
            {hobbies == true ? (
              <div className="flex h-12 items-center mb-1 rounded-xl">
                <input
                  type="textarea"
                  placeholder="Type your hobbies spred by ,,,"
                  className="h-8 ml-0.5 pl-1 w-72 text-base rounded-xl border-2 border-yellow-600"
                />
                {hobbies == true ? (
                  <button className="bg-yellow-500 w-16 rounded-lg h-8 ml-1 font-bold text-base">
                    {data.hobbies ? <span>Update</span> : <span>Add</span>}
                  </button>
                ) : null}
              </div>
            ) : null}
          </div>
        </div>

        {/* hobby */}

        {/* othets */}
        <div className="mt-1 mb-2 w-[370px] h-auto text-2xl bg-yellow-600 rounded-xl items-center flex">
          <div className="w-96 flex flex-col mb-1">
            <h1 className="text-xl font-bold pl-1">Others Information</h1>
            {data.others ? (
              <div className=" flex  w-96 justify-center items-center mt-3">
                <div className="flex pl-1 w-80 flex-wrap items-center ">
                  {data.others.map((data) => (
                    <div className="text-sm font-bold h-7 mr-2 mb-2 p-1 flex  items-center justify-center rounded-lg bg-cyan-500 ">
                      # {data}
                    </div>
                  ))}
                </div>
                <div className="h-10 w-16">
                  <button onClick={(e) => Setothers(e)}>
                    <img src={edit} alt="" className=" h-6  w-6  ml-6" />
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex mt-1 pl-1 mb-1 ">
                <h1 className="text-sm font-bold w-80 h-10 flex items-center">
                  Add others things that you want to share !!!
                </h1>
                <button onClick={(e) => Setothers(e)}>
                  <img src={edit} alt="" className=" h-6 w-6" />
                </button>
              </div>
            )}
            {others == true ? (
              <div className="flex h-12 items-center mb-1 rounded-xl">
                <input
                  type="textarea"
                  placeholder="Type others things spred by ,,,"
                  className="h-8 pl-1 ml-0.5 w-72 text-base rounded-xl border-2 border-yellow-600"
                />
                {others == true ? (
                  <button className="bg-yellow-500 w-16 rounded-lg h-8 ml-1 font-bold text-base">
                    {data.others ? <span>Update</span> : <span>Add</span>}
                  </button>
                ) : null}
              </div>
            ) : null}
          </div>
        </div>

        {/* othets */}
      </div>
    
  );
}

export default Userprofile;
