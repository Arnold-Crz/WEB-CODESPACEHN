import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import styled from 'styled-components';

import TagManager from 'react-gtm-module';

const tagManagerArgs = {
  gtmId: 'GTM-W5F4NV4',
  events: {
    event: 'cookies',
  },
};

if (process.browser) {
  TagManager.initialize(tagManagerArgs);
}

function Cookies() {
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem('cookies')) {
      setActive(true);
    }
  }, [active]);

  const handlecookies = () => {
    setActive(false);
    localStorage.setItem('cookies', true);
  };

  return (
    <>
      <Wrapper className={active ? 'active' : ''}>
        <div className="cookies_content">
          <div className="img_cookies">
            <Image
              src={'/img/cookies.png'}
              alt="Cookies"
              width={100}
              height={100}
            />
          </div>
          <h1>Cookies</h1>
          <p>
            Utilizamos cookies para brindarte un mejor servicio mas
            persolalizado.
          </p>
          <button onClick={handlecookies}>De acuerdo</button>
          <LinkCookies href="/avisocookies">
            <a>Aviso de cookies</a>
          </LinkCookies>
        </div>
      </Wrapper>
      <Background className={active ? 'active' : ''}></Background>
    </>
  );
}

const Wrapper = styled.div`
  position: relative;
  z-index: 15;
  display: none;

  .cookies_content {
    position: fixed;
    max-width: 300px;
    width: calc(100% - 100px);
    height: 350px;
    padding: 10px;
    left: 10px;
    bottom: 20px;
    background-color: #f9f9f9;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    border-radius: 15px;
    box-shadow: 0px 2px 20px 10px rgba(222, 222, 222, 0.25);
  }

  h1 {
    font-size: 1.8rem;
    margin-top: 20px;
  }
  .img_cookies {
    position: absolute;
    top: -50px;
    left: calc(50% - 50px);
  }
  p {
    font-size: 1rem;
    text-align: center;
  }

  button {
    background-color: #fc9918;
    color: #fff;
    border: none;
    border-radius: 5px;
    padding: 10px;
    font-size: 1.2rem;
    margin-top: 10px;
    cursor: pointer;
  }

  &.active {
    display: block;
  }
`;

const LinkCookies = styled(Link)`
  color: #fc9918;
  font-size: 1.2rem;
`;

const Background = styled.div`
  display: none;
  background: rgba(0, 0, 0, 0.2);
  position: fixed;
  z-index: 14;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  &.active {
    display: block;
  }
`;
export default Cookies;
