import styled from 'styled-components';

import Layout from '../components/Layout';

import Suscribe from '../components/Suscribe';
import Proyecto from '../components/proyectos/Proyecto';

import { getProjectFromTypeDesings } from '../helper';

import * as C from '../styles/variables';

function diseños({ desings }) {
  return (
    <Layout title="Los mejores diseños web para construir pagina">
      <H1>Diseños Web</H1>
      <P>
        En esta sección podrás ver una lista de todos los diseños de páginas web
        disponibles. Y si estas interesado en otro diseño nos lo puedes hacer
        saber, contactando con nosotros. 😊{' '}
      </P>
      <Suscribe />
      <WrapperCards>
        {desings.map((desing) => (
          <div className="wrapper_content" key={desing.id}>
            <Proyecto proyecto={desing} />
          </div>
        ))}
      </WrapperCards>
    </Layout>
  );
}

const H1 = styled.h1`
  text-align: center;
  margin-top: 20px;
  color: ${C.COLOR_NEGRO};
  font-size: 3rem;
  @media screen and (min-width: 768px) {
    text-align: start;
  }
`;

const P = styled.p`
  text-align: center;
  font-size: 1.2rem;
  color: ${C.COLOR_NEGRO};
  margin-bottom: 30px;
  @media screen and (min-width: 768px) {
    width: 80%;
    text-align: start;
  }
`;

const WrapperCards = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 400px));
  justify-content: center;
  align-items: center;
  row-gap: 20px;
  margin-top: 20px;
  .wrapper_content {
    display: flex;
    justify-content: center;
  }
`;

export function getStaticProps() {
  const data = getProjectFromTypeDesings();
  return {
    props: {
      desings: data,
    },
  };
}

export default diseños;
