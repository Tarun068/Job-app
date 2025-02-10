import React from "react";
import Header from "./Header";
import Banner from "./Banner";
import HomeCard from "./Homecard";
import JobPage from "./Jobpage";
import ViewMore from "./Viewmore";
const Home = () => {
  return (
    <>
      <Banner />
      <HomeCard />
      <JobPage isHome={true} />
      <ViewMore />
    </>
  );
};

export default Home;
