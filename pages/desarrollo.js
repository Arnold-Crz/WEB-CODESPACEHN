import styled from 'styled-components';

import Layout from '../components/Layout';
import Proyecto from '../components/proyectos/Proyecto';
import { getProjectFromTypeDesarrollo } from '../helper';

import * as C from '../styles/variables';

function Desarrollo({ desarrollo }) {
  return (
    <Layout title="Los mejores diseños web para construir pagina">
      <H1>Desarrollo Web</H1>
      <P>
        En esta sección podrás ver una lista de algunos de los Diseños Web, ya
        construidos y listos para produccion. Y si estas interesado en que
        Diseñemos y construyamos tu Pagina Web, nos lo puedes hacer saber,
        contactando con nosotros. 😊{' '}
      </P>
      <WrapperCards>
        {desarrollo.map((desarrollo) => (
          <div className="wrapper_content" key={desarrollo.id}>
            <Proyecto proyecto={desarrollo} />
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
  .wrapper_content {
    display: flex;
    justify-content: center;
  }
`;

export async function getStaticProps() {
  const data = await getProjectFromTypeDesarrollo();
  return {
    props: {
      desarrollo: data,
    },
  };
}

export default Desarrollo;
