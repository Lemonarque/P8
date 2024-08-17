import React from "react";
import Banner from "../../components/banner/Banner";
import Footer from "../../components/footer/Footer";
import Gallery from "../../components/gallery/Gallery";
import Header from "../../components/header/Header";
import imgHomeBanner from "../../assets/images/banner/homeBanner.png";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <main>
        <Banner texte="Chez vous, partout et ailleurs" image={imgHomeBanner} />
        <Gallery />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
