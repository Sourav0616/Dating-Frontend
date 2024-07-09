
function Loverequest({ data, delet , loveReact , matchRequest }) {
  return (
    <div className="w-[370px] h-24 bg-gray-600  flex items-center justify-center rounded-xl  mb-2 mt-1">
      <div className=" h-20 w-20 ml-6">
        <img src={data.avatar} alt="" className="rounded-full h-20 w-20" />
      </div>
      <div className="h-20 w-64  flex flex-col  justify-around pl-4">
        <h1> Name : {data.name}</h1>
        <h1 className="mb-1"> Age :{data.age} </h1>
        <div className="w-56 mb-1 flex h-6 items-center justify-between">
          <button
            className="bg-green-500 font-bold h-6 w-16 rounded-md  flex justify-center items-center"
            id={data._id}
            onClick={(e)=>matchRequest(e)}
          >
            Match
          </button>
          <button
            id={data._id}
            className="bg-yellow-400 ml-5 h-6 w-24 rounded-md font-bold  flex justify-center items-center"
            onClick={(e)=>{
              loveReact(e)
            }}
          >
           Love Back
          </button>
          <button
            id={data._id}
            onClick={(e) => delet(e)}
            className="bg-red-700 ml-5 w-16 rounded-md flex justify-center items-center font-bold"
          >
            Reject
          </button>
        </div>
      </div>
    </div>
  );
}

export default Loverequest;
