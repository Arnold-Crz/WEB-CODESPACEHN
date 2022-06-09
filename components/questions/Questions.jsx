import styled from 'styled-components';

import useScroll from '../../hooks/useScroll';

import * as C from '../../styles/variables';

import Question from './Question';

function Questions() {
  const { animationScroll } = useScroll();
  return (
    <SectionQuestion>
      <h2>
        ¿Por que nesecitas una<span> Pagina Web?</span>
      </h2>
      <div className="wrapper_cards">
        <div className={`wrapper_card ${animationScroll}`}>
          <Question
            title="¿Pagina Web?"
            description="Una pagina web te permite posicionar tu negocio en internet, alcanzar mas clientes y tener una mejor comunicacion con el al exponerle tus productos."
            img={'/img/q_personas.png'}
            alt="Una pagina web te permite posicionar tu negocio en internet, alcanzar mas clientes y tener una mejor comunicacion con el al exponerle tus productos."
          ></Question>
        </div>
        <div className={`wrapper_card ${animationScroll}`}>
          <Question
            title="¿Que te ofrece?"
            description="Es una forma que permite ofrecer mejor tus productos y servicios y que mas publico conozca tu trabajo o lo que haces"
            img={'/img/q_trofeo.png'}
            alt="Es una forma que permite ofrecer mejor tus productos y servicios y que mas publico conozca tu trabajo o lo que haces"
          ></Question>
        </div>
        <div className={`wrapper_card ${animationScroll}`}>
          <Question
            title="¿En que me ayuda?"
            description="Permite a tu publico tener una mejor experiencia al ver con mayor facilidad tu catalogo de productos entre mucha mas informacion."
            img={'/img/q_movil.png'}
            alt="Permite a tu publico tener una mejor experiencia al ver con mayor facilidad tu catalogo de productos entre mucha mas informacion."
          ></Question>
        </div>
      </div>
    </SectionQuestion>
  );
}

const SectionQuestion = styled.section`
  margin-top: 50px;
  width: 100%;
  min-height: 100vh;
  h2 {
    text-align: center;
    font-size: 2rem;
    color: ${C.COLOR_NEGRO};
    span {
      color: ${C.COLOR_NARANJA};
    }

    @media screen, (min-width: 768px) {
      font-size: 2.5rem;
    }
  }
  .wrapper_cards {
    margin-top: 30px;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    align-items: center;
    justify-items: center;
    gap: 20px;
    .wrapper_card {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      border-radius: 15px;
      width: 80%;
      padding: 20px;
      background-color: ${C.COLOR_BLANCCO_PURO};
      h2 {
        margin: 30px 0;
        font-size: 1.5rem;
      }
      p {
        margin-bottom: 20px;
        line-height: 1.5rem;
      }
    }
  }
`;

export default Questions;
