import { useState } from "react";
import { AiOutlineCaretUp, AiOutlineCaretDown } from "react-icons/ai";
import list from "../list.json";

function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="relative">
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="bg-blue-400 p-4 w-[340px] flex items-center justify-between font-bold text-lg rounded-lg tracking-wider border-4 border-transparent active:border-white duration-300 active:text-white"
        >
          Dropdown
          {!isOpen ? (
            <AiOutlineCaretDown className="h-8" />
          ) : (
            <AiOutlineCaretUp className="h-8" />
          )}
        </button>
        {isOpen && (
          <div className="absolute top-full mt-2 bg-blue-400 flex flex-col items-start rounded-lg p-2 w-[340px]">
            {list.map((item, i) => (
              <div
                key={i}
                className="flex w-full justify-between hover:bg-blue-300 cursor-pointer rounded-r-lg border-l-transparent"
              >
                <h3>{item.city}</h3>
                <h3>{item.emoticon}</h3>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Dropdown;
