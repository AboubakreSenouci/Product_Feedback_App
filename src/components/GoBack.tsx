import { useNavigate } from "react-router-dom";

import arrow_down from "../assets/shared/icon-arrow-down.svg";

const GoBack = () => {
  const navigate = useNavigate();

  return (
    <div
      className="flex items-center gap-x-3 cursor-pointer"
      onClick={() => navigate(-1)}
    >
      <img
        src={arrow_down}
        alt="GoBack_icon"
        className="rotate-90 w-3 h-2.5 "
      />
      <span className="text-xl text-gray-800 font-jost hover:underline border-gray-400 ">
        Go Back
      </span>
    </div>
  );
};
export default GoBack;
