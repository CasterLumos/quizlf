import React from "react";
import { useRouter } from "next/router";

import styled from "styled-components";
import Head from "next/head";

import theme from "../theme/theme";
import Widget from "../components/Widget";
import QuizLogo from "../components/QuizLogo";
import QuizBackground from "../components/QuizBackground";
import Footer from "../components/Footer";
import GitHubCorner from "../components/GitHubCorner";

// const BackgroundImage = styled.div`
//   background-image: url(${theme.background.image});
//   flex: 1;
//   background-size: cover;
//   background-position: center;
// `;
export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;
export default function Home() {
  return (
    <QuizBackground>
      <Head>
        <title>AluraQuiz - Modelo Base</title>
      </Head>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>The legend of zelda</h1>
          </Widget.Header>
          <Widget.Content>
            <form
              onSubmit={function (infosDoEvento) {
                infosDoEvento.preventDefault();
                router.push(`/quiz?name=`);
                console.log("Fazendo uma submissão por meio do react");
              }}
            >
              <input
                onChange={function (infosDoEvento) {
                  console.log(infosDoEvento.target.value);
                  // State
                  // name = infosDoEvento.target.value;
                  setName(infosDoEvento.target.value);
                }}
                placeholder="Diz ai seu nome"
              />
              <button type="submit">Jogar</button>
            </form>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Content>
            <h1>Quizes da Galera</h1>

            <p>lorem ipsum dolor sit amet...</p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/omariosouto" />
    </QuizBackground>
  );
}
