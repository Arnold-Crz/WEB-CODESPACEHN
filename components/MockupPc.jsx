import Image from 'next/image';
import styled from 'styled-components';
import LoaderMockup from './LoaderMockup';

function MockupPc({ completeImg, logo, colorScroll }) {
  return (
    <Content>
      <Case>
        <Camera>
          <Lente></Lente>
        </Camera>
        <Screen color={colorScroll}>
          <Mokups>
            {completeImg ? (
              <Image
                src={completeImg}
                width={1440}
                height={5734}
                alt="prototipoimg"
              />
            ) : (
              <LoaderMockup />
            )}
          </Mokups>
        </Screen>
      </Case>
      <Base>
        <Logo>
          <Image
            src={logo}
            width={40}
            height={40}
            alt="logo de la empresa codespace"
          />
        </Logo>
      </Base>
    </Content>
  );
}

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  min-height: 100vh;
`;

const Case = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 750px;
  height: 500px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background-image: linear-gradient(144deg, #f67d0e, #f6580e 50%, #f6ad0e);
  border: 5px solid #fff;
`;

const Screen = styled.div`
  margin: 0 auto;
  width: 95%;
  height: 440px;
  background-color: #333;
  overflow-y: auto;
  ::-webkit-scrollbar {
    width: 15px;
    background-color: #dbdbdb;
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${(props) =>
      props.color ? `${props.color}` : '#dbdbdb'};
  }
`;

const Mokups = styled.div`
  margin: 0 auto;
  width: 90%;
  padding: 20px;

  img {
    max-width: 100%;
  }
`;

const Camera = styled.div`
  position: absolute;
  top: 2px;
  left: 50%;
  transform: translateX(-50%);
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #333;
`;

const Lente = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #fff;
`;

const Base = styled.div`
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translate(-50%, 0);
  width: 950px;
  height: 50px;
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;
  background-image: linear-gradient(144deg, #f67d0e, #f6580e 50%, #f6ad0e);
  border: 3px solid #fff;
`;

const Logo = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 40px;
`;

export default MockupPc;
