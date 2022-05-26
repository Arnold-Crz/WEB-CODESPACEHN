import styled from 'styled-components';
import TitleSection from '../TitleSection';
import * as C from '../../styles/variables';
import { dataUltimosProyectos } from '../../data/dataProyectos';

import Proyecto from './Proyecto';

function Proyectos() {
  return (
    <SectionProyectos id="proyectos">
      <TitleSection title={'P'} subtitle={'royectos'}></TitleSection>
      <h3>Ultimos Proyectos</h3>
      <WrapperCards>
        {dataUltimosProyectos.map((proyecto, index) => (
          <Proyecto key={index} proyecto={proyecto} />
        ))}
      </WrapperCards>
    </SectionProyectos>
  );
}

const SectionProyectos = styled.section`
  width: 100%;
  min-height: 100vh;
  h3 {
    margin-top: 50px;
    margin-left: 20px;
    font-size: 1.8rem;
    color: ${C.COLOR_NEGRO};
  }
`;

const WrapperCards = styled.div`
  margin-top: 30px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  align-items: center;
  justify-items: center;
  gap: 20px;
`;

export default Proyectos;
