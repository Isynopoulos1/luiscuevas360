import { useState } from "react";
import GlobalStyles from "@styles/GlobalStyles";
//IMPORT COMPONENTS
import Header from "@layout/header/Header";
import Main from "@layout/main/Main";
import Footer from "@layout/footer/Footer";

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
