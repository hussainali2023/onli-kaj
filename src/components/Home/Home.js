import React from "react";
import Exprerience from "./Experience/Exprerience";
import Freshers from "./Freshers/Freshers";

const Home = () => {
  return (
    <>
      <div className=" mx-4 grid grid-cols-2 gap-4 justify-center mt-10">
        <Freshers></Freshers>
        <Exprerience></Exprerience>
      </div>
    </>
  );
};

export default Home;
