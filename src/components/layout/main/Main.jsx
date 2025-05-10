//IMPORT COMPONENTS
import About from "@elements/about/About.jsx";
import Platforms from "@elements/platforms/Platforms.jsx";
import Intro from "@elements/intro/Intro.jsx";
import Philosophy from "@elements/philosophy/Philosophy.jsx";
import Services from "@elements/services/Services.jsx";
// IMPORT STYLING
import { MainContainer } from "@layout/main/Main.styles";

function Main() {
  return (
    <main>
      <MainContainer>
        <Intro />
        <About />
        <Philosophy />
        <Services />
        <Platforms />
      </MainContainer>
    </main>
  );
}

export default Main;
