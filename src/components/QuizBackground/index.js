// src/components/QuizBackground/index.js
import styled from 'styled-components';
import theme from '../../theme/theme';

const QuizBackground = styled.div`
margin-bottom: -35px;
  width: 100%;
  background-size: cover;
  background-position: center;
  flex: 1;
  
  .div-one {
    position: absolute;
  background-image: url(${theme.background.image});
  width: 100%;
  height: 100%;
  background-repeat:no-repeat;
  background-size:cover;
  background-position:center;
  z-index: -1;
}
.div-two {
  position: absolute;
  -webkit-clip-path: polygon(100vw 0, 0% 100%, 100vw 100vh);
  clip-path: polygon(100vw 0, 0% 100vh, 100vw 100vh);
  background-image: url(${theme.background.image2});
  width: 100%;
  height: 100%;
  background-repeat:no-repeat;
  background-size:cover;
  background-position:bottom;

  z-index: -1;
}
`;

export default QuizBackground;
