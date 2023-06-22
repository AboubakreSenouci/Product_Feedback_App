import { useState } from "react";
import { useNavigate } from "react-router-dom";

import arrow_down from "../assets/shared/icon-arrow-down.svg";
import arrow_up from "../assets/shared/icon-arrow-up.svg";
import suggestion from "../assets/suggestions/icon-suggestions.svg";
import check from "../assets/shared/icon-check.svg";
import Button from "../components/Button";
import Suggestions from "../components/Suggestion";
import Dropdown from "../components/Dropdown";

const Home = () => {
  const navigate = useNavigate();

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
    <div className="flex mx-auto p-28 bg-gray-100 min-h-screen">
      <div className="space-y-8">
        <div className="bg-gradient-to-r  from-blue-400 via-purple-500 to-pink-500 text-white p-6 rounded-xl w-80 tracking-wider ">
          <h2 className="font-bold text-2xl pt-14 pb-2">Frontend Mentor</h2>
          <p className="pb-4">Feedback board</p>
        </div>
        <div className="bg-white flex flex-wrap gap-4 text-lg p-6 text-blue-700 font-medium w-80 rounded-xl">
          {Filter.map((item, index) => (
            <div
              key={index}
              onClick={() => setSelectedFilter(item)}
              className={`bg-blue-50 cursor-pointer  rounded-xl py-1.5 px-4 hover:bg-blue-100 duration-200 ease-linear ${
                selectedFilter === item &&
                "bg-blue-600 text-white hover:bg-blue-600"
              }`}
            >
              {item}
            </div>
          ))}
        </div>
        <div className="bg-white p-6 rounded-xl">
          <header className="flex items-center justify-between pb-8">
            <h3 className="text-2xl text-blue-950 font-medium">Roadmap</h3>
            <span className="cursor-pointer underline text-blue-800 font-medium">
              View
            </span>
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

              <Dropdown
                data={Sort}
                isOpen={isOpen}
                selectedItem={selectedItem}
                setSelectedItem={setSelectedItem}
                className="mt-12 w-[350px]"
              />
            </div>
          </div>
          <div onClick={() => navigate("/Addfeedback")}>
            <Button text={"+ add feedback"} className="py-3" variant={"fuchsiaContained"} />
          </div>
        </div>
        <Suggestions />
        <Suggestions />
        <Suggestions />
        <Suggestions />
      </div>
    </div>
  );
};
export default Home;
