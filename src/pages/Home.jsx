import React from "react";
import HomeHeader from "../components/HomeHeader/HomeHeader";
import Aboutus from "../components/Aboutus/Aboutus";
import Categoryies from "../components/Categories/Categoryies";
function Home() {
  return (
    <div>
      <HomeHeader />
      <Categoryies />
      <Aboutus />
    </div>
  );
}

export default Home;
