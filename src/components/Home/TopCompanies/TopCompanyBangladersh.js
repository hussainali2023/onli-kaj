import React from "react";
import IT1 from "../../../assests/microsoft.png";
import IT2 from "../../../assests/oracle.jpg";
import IT3 from "../../../assests/ibmjpg.jpg";

const TopCompanyBangladesh = () => {
  return (
    <div className=" mx-4 mb-10">
      <h1 className=" text-3xl font-semibold text-center">
        Top 3 IT Companies in World
      </h1>
      <div className=" grid gtid-cols-1 md:grid-cols-3 gap-4 md:gap-20 mt-6">
        <p className=" bg-pink-200 rounded-md">
          <p className=" flex justify-center">
            <img src={IT1} alt="" />
          </p>
          <div className="flex justify-center mt-4">
            <a
              className=" px-4 py-2 bg-green-300 text-white font-semibold"
              href=""
            >
              Details
            </a>
          </div>
        </p>
        <p className=" bg-pink-200 rounded-md">
          <p className=" flex justify-center">
            <img src={IT2} alt="" />
          </p>
          <div className="flex justify-center mt-12">
            <a
              className=" px-4 py-2 bg-green-300 text-white font-semibold"
              href=""
            >
              Details
            </a>
          </div>
        </p>
        <p className=" bg-pink-200">
          <p className=" flex justify-center">
            <img src={IT3} alt="" />
          </p>
          <div className="flex justify-center mt-4">
            <a
              className=" px-4 py-2 bg-green-300 text-white font-semibold"
              href=""
            >
              Details
            </a>
          </div>
        </p>
      </div>
    </div>
  );
};

export default TopCompanyBangladesh;
