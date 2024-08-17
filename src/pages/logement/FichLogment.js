import React from "react";
import FicheLogementDisplay from "../../components/ficheLogement/FicheLogementDisplay";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";

const FichLogment = () => {
  return (
    <div className="logement">
      <Header />
      <main>
        <FicheLogementDisplay />
      </main>

      <Footer />
    </div>
  );
};

export default FichLogment;
