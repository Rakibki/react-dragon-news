import React from "react";
import Header from "../../shared/Header";
import Navber from "../../shared/Navber";
import Marquee from "react-fast-marquee";
import MainLeft from "./MainLeft";
import MainCenter from "./MainCenter";
import MainRight from "./MainRight";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="flex bg-[#F3F3F3] md:p-3 mt-3">
        <button className="btn bg-[#D72050] capitalize rounded-none text-white">Latest</button>
        <Marquee className="text-red-500 " gradientColor="[102, 295, 155]" gradient={true} gradientWidth={300} pauseOnHover={true} speed={100}>
          I can be a React component, multiple React components, or just some
          text...... I can be a React component, multiple React components, or
          just some text....
        </Marquee>
      </div>
      <Navber />
      <main className="md:grid gap-4 md:grid-cols-3 lg:grid-cols-4">
            <div><MainLeft /></div>
            <div className="lg:col-span-2"><MainCenter /></div>
            <div><MainRight /></div>
      </main>
    </div>
  );
};

export default Home;
