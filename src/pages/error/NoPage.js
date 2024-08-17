import React from "react";
import ErrorPage from "../../components/error/ErrorPage";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";

const NoPage = () => {
  return (
    <>
      <div className="NoPage">
        <Header />
        <main>
          <ErrorPage />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default NoPage;
