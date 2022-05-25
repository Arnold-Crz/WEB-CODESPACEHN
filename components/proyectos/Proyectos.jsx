import styled from 'styled-components';
import TitleSection from '../TitleSection';
import * as C from '../../styles/variables';

import React from 'react';

function Proyectos() {
  return (
    <SectionProyectos id="proyectos">
      <TitleSection title={'P'} subtitle={'royectos'}></TitleSection>
    </SectionProyectos>
  );
}

const SectionProyectos = styled.section`
  width: 100%;
  min-height: 100vh;
`;

export default Proyectos;
