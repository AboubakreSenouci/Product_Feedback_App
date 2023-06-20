import { useState } from "react";

import arrow_down from "../assets/shared/icon-arrow-down.svg";
import arrow_up from "../assets/shared/icon-arrow-up.svg";
import suggestion from "../assets/suggestions/icon-suggestions.svg";
import check from "../assets/shared/icon-check.svg";
import Button from "../components/Button";
import Suggestions from "../components/Suggestion";

const Home = () => {
  const Sort = [
    "Most Upvotes",
    "Least Upvotes",
    " Most Comments",
    " Least Comments",
  ];

  const Filter = ["All", "UI", "UX", "Feature", "Enhancement", "Bug"];
  const [suggestionNumber, setSuggestionNumber] = useState(5);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(Sort[0]);
  const [selectedFilter, setSelectedFilter] = useState(Filter[0]);
  console.log(selectedItem);
  return (
    <div className="flex">
      <div className="space-y-8">
        <div className="bg-gradient-to-r  from-blue-400 via-purple-500 to-pink-500 text-white p-6 rounded-xl w-80 tracking-wider ">
          <h2 className="font-bold text-2xl pt-14 pb-2">Frontend Mentor</h2>
          <p className="pb-4">Feedback board</p>
        </div>
        <div className="bg-white flex flex-wrap gap-4 text-lg p-6 text-blue-700 font-medium w-80 rounded-xl">
          {Filter.map((item, index) => (
            <div key={index} onClick={() => setSelectedFilter(item)} className={`bg-blue-50 cursor-pointer  rounded-xl py-1.5 px-4 hover:bg-blue-100 duration-200 ease-linear ${selectedFilter === item && "bg-blue-600 text-white hover:bg-blue-600"}`}>
              {item}
            </div>
          ))}
        </div>
        <div className="bg-white p-6 rounded-xl">
          <header className="flex items-center justify-between pb-8">
              <h3 className="text-2xl text-blue-950 font-medium">Roadmap</h3>
              <span className="cursor-pointer underline text-blue-800 font-medium">View</span>
          </header>
          <ul className="text-gray-600 text-xl italic tracking-wide space-y-3">
            <li className="flex justify-between">
              <div className="flex items-center gap-4">
                <div className="bg-orange-400 h-[10px] w-[10px] rounded-full"></div>
                <p>Planned</p>
              </div>
              <div className="not-italic text-gray-700 font-black">2</div>
            </li>
            <li className="flex justify-between">
              <div className="flex items-center gap-4">
                <div className="bg-purple-700 h-[10px] w-[10px] rounded-full"></div>
                <p>In-Progress</p>
              </div>
              <div className="not-italic text-gray-700 font-black">3</div>
            </li>
            <li className="flex justify-between">
              <div className="flex items-center gap-4">
                <div className="bg-blue-700 h-[10px] w-[10px] rounded-full"></div>
                <p>Live</p>
              </div>
              <div className="not-italic text-gray-700 font-black">1</div>
            </li>
          </ul>
        </div>
      </div>
      <div className="mx-8 w-full">
      <div className="bg-blue-950 p-4 rounded-xl text-white text-2xl opacity-90 font-semibold flex items-center justify-between px-6 h-fit w-full">
        <div className="flex items-center gap-8">
          <img src={suggestion} alt="suggestiob icon" className="w-[30px]" />
          <p className="cursor-pointer">{suggestionNumber} Suggestions</p>
          <div className="relative">
            <div
              className="flex items-center gap-2 text-lg px-6 cursor-pointer hover:opacity-80 "
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
            <div className="absolute z-50 bg-white mt-10 text-xl shadow-md font-normal  text-gray-500 tracking-wider rounded-xl w-[330px]">
              <ul>
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
                        index === Sort.length && "hidden"
                      }`}
                    ></div>
                  </div>
                ))}
              </ul>
              </div>
            )}
          </div>
        </div>
        <Button text={"+ add feedback"} className="py-3" />
        </div>
        <Suggestions/>
        <Suggestions/>
        <Suggestions/>
        <Suggestions/>
      </div>
    </div>
  );
};
export default Home;
