
function Matchrequest({ data , deletmatchRequest , massageConnectionn}) {
  return (
    <div className="w-[370px] h-24 m-auto bg-gray-600 flex items-center justify-center rounded-xl mb-2 mt-1">
      <div className="h-20 w-20 ml-6">
        <img src={data.avatar} alt="" className="rounded-full h-20 w-20" />
      </div>
      <div className="h-20 w-64 flex flex-col justify-around pl-4">
        <h1>Name: {data.name}</h1>
        <h1 className="mb-1">Age: {data.age}</h1>
        <div className=" mt-1 flex h-6 items-center ">
          <button
            className="bg-green-500 h-6  w-28 rounded-md font-bold flex justify-center items-center"
            id={data._id}
            onClick={(e)=>massageConnectionn(e)}
          >
            Match Accept
          </button>

          <button
            id={data._id}
            onClick={(e)=>deletmatchRequest(e)}
            className="bg-red-700 ml-5 w-16 rounded-md flex justify-center items-center font-bold"
          >
            Reject
          </button>
        </div>
      </div>
    </div>
  );
}

export default Matchrequest;
