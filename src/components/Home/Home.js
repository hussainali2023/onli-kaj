import React from "react";
import Exprerience from "./Experience/Exprerience";
import Freshers from "./Freshers/Freshers";
import TopCompanyBangladersh from "./TopCompanies/TopCompanyBangladersh";
import TopCompanyWorld from "./TopCompanies/TopCompanyWorld";

const Home = () => {
  return (
    <>
      <div className=" mx-4 grid grid-cols-1 md:grid-cols-2 gap-4 justify-center mt-10">
        <Freshers></Freshers>
        <Exprerience></Exprerience>
      </div>
      <div className="flex justify-center mt-6">
        {" "}
        <button className=" px-6 py-4 rounded-md bg-green-500 text-white font-semibold">
          See All
        </button>
      </div>
      <div className=" mt-10">
        <TopCompanyBangladersh />
        <TopCompanyWorld />
      </div>
    </>
  );
};

export default Home;
