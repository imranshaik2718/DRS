import React from "react";
import bmwImage from "../../assets/images/bmw.webp";

function BMW() {
  return (
    <div className="bg-white">
      <div className="flex justify-center items-center pt-10 gap-10 overflow-hidden">
        <div className="text-center">
          <img
            src={bmwImage}
            className="w-[400px] rounded-md "
            alt="BMW F 850 GSA"
          />
          <p className="mt-2 text-lg font-medium text-gray-800">
            BMW F 850 GSA
          </p>
        </div>
      </div>
    </div>
  );
}

export default BMW;
