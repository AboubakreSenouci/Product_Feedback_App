import { useState } from "react";
import arrow_up from "../assets/shared/icon-arrow-up.svg";

interface SuggestionsProps {}

const Suggestions: React.FC<SuggestionsProps> = () => {
  const [vote, setVote] = useState(99);
  const [isClicked, setIsClicked] = useState(false);

  const handelOnClick = () => {
    setIsClicked(!isClicked);
    // eslint-disable-next-line no-lone-blocks
    {
      isClicked ? setVote(vote - 1) : setVote(vote + 1);
    }
  };

  return (
    <div className="bg-white p-10 font-jost rounded-xl my-6 flex gap-x-12 ">
      <div
        className={`px-4  flex flex-col items-center gap-3 text-xl font-bold bg-blue-50 h-fit py-4 rounded-xl w-14 text-blue-950 cursor-pointer hover:bg-blue-200 duration-200 ease-out ${
          isClicked && "bg-blue-800 text-white hover:bg-blue-800"
        }`}
        onClick={handelOnClick}
      >
        <img
          src={arrow_up}
          alt="arrow_up"
          className={`w-4 ${isClicked && "grayscale brightness-200"}`}
        />
        <p>{vote}</p>
      </div>
      <div className=" text-black  flex flex-col cursor-pointer gap-y-3 ">
        <div className="text-2xl font-black tracking-wide opacity-90  text-blue-950 hover:text-blue-700 ">
          Add a dark theme option
        </div>
        <span className="text-xl text-gray-500 tracking-wider">
          It would help people with light sensitivities and who prefer dark
          mode.
        </span>
        <div className="bg-blue-50 w-24 rounded-xl py-1.5 px-4 text-blue-700 font-bold ">
          Feature
        </div>
      </div>
    </div>
  );
};
export default Suggestions;
