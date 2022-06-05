import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import styled from 'styled-components';
import * as C from '../styles/variables';

function DropUp() {
  const [visible, setVisible] = useState(false);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 500) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
  }, []);

  return (
    <DropUpStyled
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
      className={visible ? 'active' : ''}
      onClick={handleClick}
    >
      <i className="bx bxs-chevron-up"></i>
    </DropUpStyled>
  );
}

const DropUpStyled = styled(motion.div)`
  position: fixed;
  bottom: -50px;
  right: 10px;
  width: 50px;
  height: 50px;
  background-color: ${C.COLOR_BLANCO};
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
  transition: bottom 0.2s ease-in-out;
  cursor: pointer;
  z-index: 20;
  &.active {
    bottom: 60px;
    @media screen and (min-width: 768px) {
      bottom: 10px;
    }
  }
  i {
    font-size: 2rem;
  }
`;

export default DropUp;
