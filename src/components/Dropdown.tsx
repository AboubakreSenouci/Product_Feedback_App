import { useState } from "react";

import check from "../assets/shared/icon-check.svg";

interface DropdownProps {
    data:Array<string>;
    isOpen:Boolean;
    selectedItem: any;
    setSelectedItem: React.Dispatch<React.SetStateAction<any>>;
    className?: string;
}

const Dropdown: React.FC<DropdownProps> = ({data, isOpen, selectedItem,setSelectedItem, className}) => {
   
    return(
        <>
            {isOpen && (
            <div className={`absolute z-50 bg-white text-xl shadow-md font-normal  text-gray-500 tracking-wider rounded-xl w-full ${className}`}>
              <ul>
                {data.map((item, index) => (
                  <div key={index} onClick={() => setSelectedItem(item)}>
                    <div className="flex items-center justify-between hover:text-fuchsia-600 ">
                      <li className="py-3 pr-28 ml-4 pb-5 cursor-pointer">
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
                        index === data.length-1 && "hidden"
                      }`}
                    ></div>
                  </div>
                ))}
              </ul>
              </div>
            )}
        </>
    )
}

export default Dropdown;