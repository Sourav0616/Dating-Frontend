import { useSelector } from "react-redux";
function Chatcomp({ data, scroll }) {
  const User = useSelector((state) => state.currentUser.user);

  const chatSpan = `${data.senderid == User._id ? "own" : "another"} `;

  return (
    <div className="w-full mt-2 h-auto " ref={scroll}>
      <span className={chatSpan}>{data.message}</span>
    </div>
  );
}

export default Chatcomp;
