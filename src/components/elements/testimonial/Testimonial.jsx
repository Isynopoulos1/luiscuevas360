import React from "react";
import {
  TestimonialWrapper,
  Ranking,
  Comment,
  Author,
  StarIcon,
} from "@elements/testimonial/Testimonial.styles";
//IMPORT ICON
import { FaStar } from "react-icons/fa";

const Testimonial = ({ comment, author }) => {
  return (
    <TestimonialWrapper>
      <Ranking>
        <div>
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} color="#5DC5C7" />
          ))}
        </div>
      </Ranking>
      <Comment>{comment}</Comment>
      <Author>{author}</Author>
    </TestimonialWrapper>
  );
};

export default Testimonial;
