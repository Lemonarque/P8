import React from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Banner from "../../components/banner/Banner";
import imgBannerAbout from "../../assets/images/banner/aboutBanner.png";
import Collapse from "../../components/collapse/Collapse";
import CollapseData from "../../datas/collapses.json";

const About = () => {
  return (
    <div className="about">
      <Header />
      <main>
        <Banner image={imgBannerAbout} titre="" />

        <div className="collapse">
          <div className="collapse__dropdown">
            {CollapseData.map((item) => {
              return (
                <div key={item.id}>
                  <Collapse content={item.content} title={item.title} />
                </div>
              );
            })}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
