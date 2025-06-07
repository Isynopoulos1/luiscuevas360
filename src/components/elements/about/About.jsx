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

// IMPORT DATA
import texts from "@data/texts.json";

function About() {
  return (
    <section id="about">
      <MainContainer>
        <SectionName>Sobre Mi</SectionName>
        <ColumnsWrapper>
          <ColumnLeft>
            <Photo>
              <img
                src="https://ik.imagekit.io/ppayaz/luis-cuevas-360/intro/intro-photo-square_2.jpg?updatedAt=1748179751342"
                alt="Foto intro"
              />
            </Photo>
          </ColumnLeft>
          <ColumnRight>
            <ProfesionalDescription>
              {texts.about.content1.map((part, i) =>
                typeof part === "string" ? (
                  part
                ) : (
                  <strong key={i}>{part.bold}</strong>
                )
              )}
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
            <HobbiesDescription> {texts.about.content2}</HobbiesDescription>
          </ColumnRight>
        </ColumnsWrapper>
      </MainContainer>
    </section>
  );
}

export default About;
