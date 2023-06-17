import { useState } from "react";

import arrow_down from "../assets/shared/icon-arrow-down.svg";
import arrow_up from "../assets/shared/icon-arrow-up.svg";
import suggestion from "../assets/suggestions/icon-suggestions.svg";
import check from "../assets/shared/icon-check.svg";
import Button from "../components/Button";

const Home = () => {
  const Sort = [
    "Most Upvotes",
    "Least Upvotes",
    " Most Comments",
    " Least Comments",
  ];
  const [suggestionNumber, setSuggestionNumber] = useState(5);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(Sort[0]);
  console.log(selectedItem);
  return (
    <div className="bg-blue-950 p-4 rounded-xl text-white text-2xl opacity-90 font-semibold flex items-center justify-between px-6 max-w-7xl">
      <div className="flex items-center gap-8">
        <img src={suggestion} alt="suggestiob icon" className="w-[30px]" />
        <p className="cursor-pointer">{suggestionNumber} Suggestions</p>
        <div className="flex justify-center">
          <div
            className="flex items-center gap-2 text-lg px-6 cursor-pointer hover:opacity-80"
            onClick={() => setIsOpen(!isOpen)}
          >
            <p className="font-normal">Sort by:</p>
            {selectedItem}
            {isOpen ? (
              <img
                src={arrow_down}
                alt=""
                className=" grayscale brightness-200 w-[14px] h-[10px]"
              />
            ) : (
              <img
                src={arrow_up}
                alt=""
                className=" grayscale brightness-200 w-[14px] h-[10px]"
              />
            )}
          </div>
          {isOpen && (
            <ul className="bg-white mt-16 text-xl shadow-md font-normal absolute text-gray-500 tracking-wider rounded-xl w-[330px]">
              {Sort.map((item, index) => (
                <div key={index} onClick={() => setSelectedItem(item)}>
                  <div className="flex items-center justify-between">
                    <li className="py-3 pr-28 ml-4 pb-5 hover:text-fuchsia-600 cursor-pointer">
                      {item}
                    </li>
                    {item === selectedItem && (
                      <img
                        src={check}
                        alt="check_icon"
                        className="w-[15px] h-[15px] m-2"
                      />
                    )}
                  </div>
                  <div
                    className={`h-[0.2px] bg-gray-300 ${
                      index === 3 && "hidden"
                    }`}
                  ></div>
                </div>
              ))}
            </ul>
          )}
        </div>
      </div>
      <Button text={"+ add feedback"} className="py-3" />
    </div>
  );
};
export default Home;
