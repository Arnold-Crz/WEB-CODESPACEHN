import Image from 'next/image';
import styled from 'styled-components';

function MockupMovil({ img1, img2 }) {
  return (
    <Container>
      <Case>
        <SondBtns>
          <PlusBtn></PlusBtn>
          <MinusBtn></MinusBtn>
        </SondBtns>
        <Power></Power>
        <BordeScreen>
          <Screen>
            <ContaineImgs>
              <div className="img1">
                <Image src={img1} width={360} height={3120} alt="FoodImg" />
              </div>

              <div className="img2">
                <Image src={img2} width={360} height={640} alt="FoodImg" />
              </div>
            </ContaineImgs>
          </Screen>
          <BarraAccessibility>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="#e9e9e9"
            >
              <path d="M7 9a2 2 0 012-2h6a2 2 0 012 2v6a2 2 0 01-2 2H9a2 2 0 01-2-2V9z" />
              <path d="M5 3a2 2 0 00-2 2v6a2 2 0 002 2V5h8a2 2 0 00-2-2H5z" />
            </svg>

            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="#e9e9e9"
              >
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="#e9e9e9"
              >
                <path
                  fillRule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </BarraAccessibility>
        </BordeScreen>
        <Camera></Camera>
      </Case>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Case = styled.div`
  position: relative;
  width: 320px;
  height: 580px;
  border-radius: 15px;
  margin-bottom: 20px;
  background-color: #e9e9e9;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(144deg, #f67d0e, #f6580e 50%, #f6ad0e);
`;

const BordeScreen = styled.div`
  position: absolute;

  top: 0;
  bottom: 0;
  width: 95%;
  height: 560px;
  margin-top: 10px;
  border-radius: 15px;
  background-color: #000;
  overflow-y: auto;
  scroll-snap-type: x mandatory;

  ::-webkit-scrollbar {
    width: 10px;
    background-color: #dbdbdb;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #242323d6;
  }
`;

const Screen = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
  width: 100%;
`;

const ContaineImgs = styled.div`
  width: 100%;
  display: flex;
  gap: 50px;
  .img1 {
    flex: 0 0 100%;
    width: 100%;
    scroll-snap-align: center;
  }
  .img2 {
    flex: 0 0 100%;
    width: 100%;
    scroll-snap-align: center;
  }
`;

const Camera = styled.div`
  position: absolute;
  top: 20px;
  left: 5%;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #333;
  z-index: 10;
  ::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #fff;
  }
`;

const SondBtns = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 5px;
  top: 80px;
  left: -7px;
  width: 10px;
  height: 100px;
`;

const PlusBtn = styled.div`
  width: 7px;
  height: 40px;
  background-color: #333;
  border: 1px solid #fff;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
`;

const MinusBtn = styled.div`
  width: 7px;
  height: 40px;
  background-color: #333;
  border: 1px solid #fff;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
`;

const Power = styled.div`
  position: absolute;
  top: 150px;
  right: -7px;
  width: 7px;
  height: 40px;
  background-color: #333;
  border: 1px solid #fff;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
`;

const BarraAccessibility = styled.div`
  position: sticky;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50px;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  z-index: 10;
  svg {
    width: 25px;
    height: 25px;
    fill: #e0e0e0;
  }
`;

export default MockupMovil;
