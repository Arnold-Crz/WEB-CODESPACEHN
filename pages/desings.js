import styled from 'styled-components';

import Layout from '../components/Layout';
import Proyecto from '../components/proyectos/Proyecto';
import { getProjectFromTypeDesings } from '../helper';

import * as C from '../styles/variables';

function diseños({ desings }) {
  return (
    <Layout title="Los mejores diseños web para construir pagina">
      <div>
        <h1>Diseños Web</h1>
        <p>
          En esta sección podrás ver una lista de todos los diseños de páginas
          web disponibles. Y si estas interesado en otro diseño nos lo puedes
          hacer saber, contactando con nosotros. 😊{' '}
        </p>
        <WrapperCards>
          {desings.map((desing) => (
            <div className="wrapper_content" key={desing.id}>
              <Proyecto proyecto={desing} />
            </div>
          ))}
        </WrapperCards>
      </div>
    </Layout>
  );
}

const WrapperCards = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 400px));
  justify-content: center;
  align-items: center;
  .wrapper_content {
    display: flex;
    justify-content: center;
  }
`;

export async function getStaticProps() {
  const data = await getProjectFromTypeDesings();
  return {
    props: {
      desings: data,
    },
  };
}

export default diseños;
