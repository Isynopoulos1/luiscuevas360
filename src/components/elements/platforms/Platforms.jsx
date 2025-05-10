import {
  MainContainer,
  SectionName,
  Testimonials,
  CardsWrapper,
} from "@elements/platforms/Platforms.styles";

import SocialCard from "@elements/socialCard/SocialCard.jsx";

function Platforms() {
  return (
    <section id="platforms">
      <MainContainer>
        <SectionName>Plataformas</SectionName>
        <CardsWrapper>
          <SocialCard
            label="instagram"
            background="https://ik.imagekit.io/ppayaz/luis-cuevas-360/platforms/instagram-luiscuevas.jpg?updatedAt=1746901731028"
            onClick={() =>
              window.open("https://www.instagram.com/luiscuevas360", "_blank")
            }
          />
          <SocialCard
            label="tiktok"
            background="https://ik.imagekit.io/ppayaz/luis-cuevas-360/platforms/tiktok-luiscuevas.png?updatedAt=1746900985085"
            onClick={() =>
              window.open("https://www.tiktok.com/@luigicaves", "_blank")
            }
          />
          <SocialCard
            label="spotify"
            background="https://ik.imagekit.io/ppayaz/luis-cuevas-360/platforms/spotify_luiscuevas.jpg?updatedAt=1746902317927"
            onClick={() =>
              window.open(
                "https://open.spotify.com/show/1yUfLj4f0KAWrzRbjJeItK?si=vpHGsgG5SXOBWQVLHpzGSw",
                "_blank"
              )
            }
          />
          <SocialCard
            label="youtube"
            background="https://ik.imagekit.io/ppayaz/luis-cuevas-360/platforms/youtube_luiscuevas.jpg?updatedAt=1746902300949"
            onClick={() =>
              window.open("https://www.youtube.com/@luiscuevas3603", "_blank")
            }
          />
          <SocialCard
            label="linkedin"
            background="https://ik.imagekit.io/ppayaz/luis-cuevas-360/platforms/linkedin_luiscuevas.jpg?updatedAt=1746901968677"
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/luis-cuevas-3a533a69/",
                "_blank"
              )
            }
          />
        </CardsWrapper>
        <Testimonials>
          <SectionName>Testimoniales</SectionName>
        </Testimonials>
      </MainContainer>
    </section>
  );
}

export default Platforms;
