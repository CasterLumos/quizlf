import React from 'react';
import styled from 'styled-components';
import theme from '../../theme/theme';

const FooterWrapper = styled.footer`
  width: 100%;
  height: auto;
  bottom: 0;
  margin-top: 0;
  min-width: 100%;
  font-size: 1em;
  background-color: ${theme.palette.primary.black};
  color: ${theme.palette.primary.white};
  font-family: Staatliches;
  text-align: center;
  font-style: italic;
  a{
    text-decoration: none;
  color: ${theme.palette.primary.white};
  }
`;

export default function Footer(props) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <FooterWrapper {...props}>
      <p>
        Orgulhosamente criado durante a
        {' '}
        <a href="https://www.alura.com.br/">
          <span>Imersão React da Alura</span>
        </a>
      </p>
    </FooterWrapper>
  );
}
