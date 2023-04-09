import React, { useContext } from "react";
import { PasswordContext } from "../context/PasswordContext";

function InclusionOptions() {
  const { options, setOptions, length, generateRandomPassword } =
    useContext(PasswordContext);

  const handleOptionChange = (event) => {
    const { name, checked } = event.target;
    setOptions((prevOptions) => ({ ...prevOptions, [name]: checked }));
    generateRandomPassword(length, { ...options, [name]: checked });
  };

  return (
    <div className="mb-6">
      <div className="flex items-center mb-2">
      
        <input
          type="checkbox"
          name="includeUppercase"
          checked={options.includeUppercase}
          onChange={handleOptionChange}
        />
        <label htmlFor="includeUppercase" className="ml-2 text-sm font-medium text-gray-700">
          Include uppercase
        </label>
      </div>
      <div className="flex items-center mb-2">
        <input
          type="checkbox"
          name="includeLowercase"
          checked={options.includeLowercase}
          onChange={handleOptionChange}
        />
<label htmlFor="includeLowercase" className="ml-2 text-sm font-medium text-gray-700">
          Include lowercase
        </label>
      </div>
      <div className="flex items-center mb-2">
        <input
          type="checkbox"
          name="includeNumbers"
          checked={options.includeNumbers}
          onChange={handleOptionChange}
        />
<label htmlFor="includeNumbers" className="ml-2 text-sm font-medium text-gray-700">
          Include numbers
        </label>
      </div>
      <div className="flex items-center mb-2">
        <input
          type="checkbox"
          name="includeSymbols"
          checked={options.includeSymbols}
          onChange={handleOptionChange}
        />
        <label htmlFor="includeSymbols" className="ml-2 text-sm font-medium text-gray-700">
          Include symbols
        </label>
      </div>
    </div>
  );
}

export default InclusionOptions;
