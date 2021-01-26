/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable func-names */
import React from 'react';
import { useRouter } from 'next/router';

import styled from 'styled-components';
import Head from 'next/head';
import Widget from '../components/Widget';
import QuizLogo from '../components/QuizLogo';
import QuizBackground from '../components/QuizBackground';
import Footer from '../components/Footer';
import GitHubCorner from '../components/GitHubCorner';

export const QuizContainer = styled.div`
  width: 100vw;
  max-width: 350px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
  }
`;
export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState('');

  return (
    <>
      <QuizBackground>
        <Head>
          <title>LackingFaces Quiz</title>
        </Head>
        <div className="div-one" />
        <div className="div-two" />
        <QuizContainer>
          <QuizLogo />
          <Widget>
            <Widget.Header>
              <h1>Florestas no Brasil</h1>
            </Widget.Header>
            <Widget.Content>
              <p>
                Você sabia que o Brasil tem florestas ricas e variadas, que
                proporcionam incríveis experiências de ecoturismo, passeios de
                contemplação da natureza e até esportes de aventura?
              </p>
              <form
                onSubmit={function (infosDoEvento) {
                  infosDoEvento.preventDefault();
                  router.push(`/quiz?name=${name}`);
                }}
              >
                <input
                  pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$"
                  onChange={function (infosDoEvento) {
                    setName(infosDoEvento.target.value);
                  }}
                  placeholder="Nickname"
                />
                <div>
                  <button
                    type="submit"
                    className="c-form__button"
                    disabled={name.length === 0}
                  >
                    Jogar como:
                    {' '}
                    {name}
                  </button>
                </div>
              </form>
            </Widget.Content>
          </Widget>

          <Widget>
            <Widget.Header>
              <h1>Quizes da Galera</h1>
            </Widget.Header>
            <Widget.Content>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
                libero velit, enim maxime dicta repellendus iure, quisquam
                voluptatum amet ipsam iusto, maiores incidunt inventore fugiat.
                Commodi delectus doloribus excepturi. Ut!.
              </p>
            </Widget.Content>
          </Widget>
        </QuizContainer>
        <GitHubCorner projectUrl="https://github.com/CasterLumos/quizlf" />
      </QuizBackground>
      <Footer />
    </>
  );
}
