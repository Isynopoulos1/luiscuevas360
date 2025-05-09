// IMPORT STYLING
import {
  MainContainer,
  ColumnLeft,
  ColumnRight,
  SectionName,
  Photo,
  ProfesionalDescription,
  HobbiesDescription,
  ColumnsWrapper,
  HobbiesPhotos,
  RightBox,
  LeftBox,
} from "@elements/about/About.styles";

function About() {
  return (
    <section id="about">
      <MainContainer>
        <SectionName>Sobre Mi</SectionName>
        <ColumnsWrapper>
          <ColumnLeft>
            <Photo>
              <img
                src="https://ik.imagekit.io/ppayaz/luis-cuevas-360/about/luis-cuevas.jpg?updatedAt=1746814129043"
                alt="Foto intro"
              />
            </Photo>
          </ColumnLeft>
          <ColumnRight>
            <ProfesionalDescription>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur
            </ProfesionalDescription>
            <HobbiesPhotos>
              <RightBox>
                {" "}
                <img
                  src="https://ik.imagekit.io/ppayaz/luis-cuevas-360/about/hobby1.jpg?updatedAt=1746816171586"
                  alt="Foto intro"
                />
              </RightBox>
              <LeftBox>
                <img
                  src="https://ik.imagekit.io/ppayaz/luis-cuevas-360/about/hobby2.jpg?updatedAt=1746816187965"
                  alt="Foto intro"
                />
              </LeftBox>
            </HobbiesPhotos>
            <HobbiesDescription>
              {" "}
              But I must explain to you how all this mistaken idea of denouncing
              pleasure and praising pain was born and I will give you a complete
              account of the system,
            </HobbiesDescription>
          </ColumnRight>
        </ColumnsWrapper>
      </MainContainer>
    </section>
  );
}

export default About;
