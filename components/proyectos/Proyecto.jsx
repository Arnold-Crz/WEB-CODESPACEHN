import Link from 'next/link';
import styled from 'styled-components';
import * as C from '../../styles/variables';
import ProyectoImgs from './ProyectoImgs';

import { convertToPath } from '../../helper';

function Proyecto({ proyecto }) {
  return (
    <WrapperCard>
      {proyecto.imgs.map((image, index) => (
        <ProyectoImgs key={index} image={image} title={proyecto.titulo} />
      ))}
      <div className="Wrapper">
        <h2>{proyecto.titulo}</h2>
        <p>{proyecto.descripcion}</p>
        <Link href={`/proyecto/${convertToPath(proyecto.titulo)}`}>
          <a>Ver Proyecto</a>
        </Link>
      </div>
    </WrapperCard>
  );
}

const WrapperCard = styled.div`
  width: 80%;
  padding: 20px;
  border-radius: 15px;
  background-color: ${C.COLOR_BLANCCO_PURO};
  .Wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h2 {
      margin-top: 20px;
      font-size: 1.2rem;
    }
    p {
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      margin-top: 20px;
      font-size: 1rem;
    }

    a {
      display: flex;
      justify-content: center;
      align-items: center;
      align-self: flex-end;
      background-color: ${C.COLOR_NARANJA};
      color: ${C.COLOR_BLANCO};
      width: 100%;
      height: 50px;
      margin-top: 20px;
      margin-bottom: 30px;
      border-radius: 15px;
      text-transform: uppercase;
      font-weight: 600;
      transition: 0.3s;
      &:hover {
        background-color: ${C.COLOR_NARANJA_HOVER};
      }
    }
  }
`;

export default Proyecto;
