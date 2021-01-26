import styled from 'styled-components';
import theme from '../../theme/theme';

const Widget = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  margin-top: 10px;
  margin-bottom: 20px;
  border: 1px solid ${theme.palette.primary.dark};
  background-color: ${theme.palette.primary.dark};
  h1,
  h2,
  h3 {
    font-family: 'Fraunces', serif;
    font-size: 25px;
    font-weight: 700;
    line-height: 1;
    margin-bottom: 0;
  }
  p {
    font-size: 17px;
    font-weight: 400;
    line-height: 1;
  }
`;

Widget.Header = styled.header`
  background-color: ${theme.palette.primary.main};
  text-align: center;
  padding-bottom: 10px;
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
`;

Widget.Content = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  flex-wrap: wrap;
  grid-template-columns: 1fr;
  justify-items: center;
  padding:20px;
  text-align: center;
   input{
     color: ${theme.palette.primary.light};
    padding: 12px;
    border: 2px solid ${theme.palette.secondary.dark};
    border-radius: 0.2rem;
    margin-bottom: 2rem;
    background: transparent;
  }
  button{
    font-size: 1.2rem;
    font-weight: 700;
    color: ${theme.palette.primary.light};
    padding: 0.6rem;
    background: ${theme.palette.primary.main};
    border: none;
    border-radius: 0.2rem;
    transition: all 0.2s ease 0s;
    cursor: pointer;
  }
`;

export default Widget;
