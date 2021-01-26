// src/components/QuizBackground/index.js
import styled from "styled-components";
import theme from "../../theme/theme";

const QuizBackground = styled.div`
  width: 100%;
  background-size: cover;
  background-position: center;
  background-image: url(${theme.background.image});
  background-color: ${theme.palette.primary.main};
  flex: 1;
  @media screen and (max-width: 500px) {
    background-image: none;
    &:after {
      content: "";
      background-size: cover;
      background-position: center;
      background-image: linear-gradient(
        transparente,
        ${theme.palette.primary.main},
        url(${theme.background.image})
      );
      display: block;
      width: 100%;
      height: 210px;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      z-index: 1;
    }
    *:first-child {
      position: relative;
      z-index: 10;
    }
  }
`;

export default QuizBackground;
