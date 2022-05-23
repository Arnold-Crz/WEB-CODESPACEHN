import styled from 'styled-components';

function Title({ title, subtitle }) {
  return (
    <Wrappertitle>
      {title}
      <span>{subtitle}</span>
    </Wrappertitle>
  );
}

export default Title;

const Wrappertitle = styled.h2`
  position: relative;

  margin-top: 30px;
  margin-left: 90px;
  font-size: 3rem;
  color: #abaeae;

  @media (max-width: 425px) {
    text-align: start;
    left: -75px;
  }

  &::before {
    content: '';
    top: 60px;
    position: absolute;
    background-color: #fc9918;
    width: 150px;
    height: 5px;
    border-radius: 5px;
  }
  & span {
    color: #dfe3e4;
  }
`;
