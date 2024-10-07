// components/CustomSelect.jsx
import { useEffect, useRef, useState } from "react";

const CustomSelect = ({ options, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const dropdownRef = useRef(null);

  // Toggle dropdown open/close
  const handleToggle = () => setIsOpen((prev) => !prev);

  // Handle option selection
  const handleOptionClick = (option) => {
    setIsOpen(false);
    setSelectedOption(option);

    console.log("test");
  };

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  console.log(isOpen);

  return (
    <div className={["custom-select-wrapper"]} ref={dropdownRef}>
      <div className={["custom-select"]}>
        <div onClick={handleToggle} className={["custom-select-trigger"]}>
          {selectedOption ? selectedOption : options[0]}
        </div>
        {isOpen && (
          <div className={["custom-options"]}>
            {options.map((option, i) => (
              <span
                key={i}
                className={`${["custom-option"]} ${
                  selectedOption === option ? ".selected" : ""
                }`}
                onClick={() => handleOptionClick(option)}
              >
                {option}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomSelect;
