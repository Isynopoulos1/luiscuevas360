import {
  MainContainer,
  SectionName,
  Testimonials,
  CardsWrapper,
  TestimonialWrapper,
} from "@elements/platforms/Platforms.styles";

//IMPORT COMPONENTS
import SocialCard from "@elements/socialCard/SocialCard.jsx";
import Testimonial from "@elements/testimonial/Testimonial.jsx";
//IMPORT DATA
import texts from "@data/texts.json";
const testimonials = texts.testimonials;

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
          <TestimonialWrapper>
            {testimonials.map((t, i) => (
              <Testimonial key={i} comment={t.comment} author={t.author} />
            ))}
          </TestimonialWrapper>
        </Testimonials>
      </MainContainer>
    </section>
  );
}

export default Platforms;
