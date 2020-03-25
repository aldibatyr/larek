/* eslint-disable linebreak-style */
import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import him from './images/him.jpg';
import her from './images/her.jpg';

const NavWrap = styled.nav`
  height: 0px;
  background: #0e0e0e;
  color: white;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  align-items: center;
  grid-template-columns: 70px auto 70px;
  grid-template-rows: 75px auto;
  justify-items: center;
  align-items: center;
  grid-template-areas: 
  ". navbar ."
  "main main main";
`;

const Nav = styled.div`
grid-area: navbar;
width: 100%;
display: flex;
`;

const BrandLogo = styled.div`
  a {
    text-decoration: none;
    color: white;
    span {
      font-size: 2rem;
      font-family: bancoDi;
  }
  }

`;

const MenuButton = styled.div`
  margin-left: auto;
  width: 36px;
  height: 36px;
  padding: 10px;
  padding-top: 15px;
  &:hover {
    cursor: pointer;
  }
  span {
    display: block;
    width: 16px;
    height: 1px;
    border-radius: 0.5px;
    background: white;
  }
  .top {
    margin-bottom: 5px;
  }
`;

const Menu = styled.div`
  grid-area: main;
  background-color: #0e0e0e;
  position: relative;
  overflow: hidden;
  width: 100vw;
  height: 0;
  z-index: 999;
`;

const ChoicesWrapper = styled.div`
  display: flex;
  position: absolute;
  z-index: 1001;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  #left {
    justify-content: flex-end;
  }

  #right {
    justify-content: flex-start;
  }
`;

const ChoicesBox = styled.div`
  display: flex;
  padding: 0px 1rem;
  align-items: center;
  height: 100%;
  width: 50vw;
  a {
    font-family: vaguerSans;
    font-size: 3rem;
    color: white;
    text-decoration: none;
    padding: 0px 10px;
  }
`;

const BackgroundImages = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  opacity: 0;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

const Navigation = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const animateButton = () => {
    const animateOpen = gsap.timeline({ paused: true });
    const animateClose = gsap.timeline({ paused: true });
    // animations
    animateOpen
      .to('.top', 0.2, { y: 3 })
      .to('.bottom', 0.2, { y: -3 }, '<')
      .to('.top', 0.2, { rotation: -45 })
      .to('.bottom', 0.2, { rotation: 45 }, '<')
      .to('#menu', 0.5, { css: { height: '100vh' } }, '<');
    animateClose
      .to('.bottom', 0.2, { rotation: 0 })
      .to('.top', 0.2, { rotation: 0 }, '<')
      .to('.bottom', 0.2, { y: 0 })
      .to('.top', 0.2, { y: 0 }, '<')
      .to('#menu', 0.5, { css: { height: '0' } }, '<');
    // logic if playing forward or reversed
    if (!openMenu) {
      animateOpen.play();
    } else {
      animateClose.play();
    }
  };

  const handleClick = () => {
    setOpenMenu(!openMenu);
    animateButton();
  };
  const back = useRef();

  const onHoverOn = (e, option, back) => {
    let tl = gsap.timeline()
    console.log(e.target.id)
    if (e.target.id === 'him') {
      tl
        .to(e.target, 0.2, { color: 'black' })
        .to(back.current, 0, { css: { backgroundImage: `url(${option})` } })
        .to(back.current, 0.4, { opacity: 1 })
    } else {
      tl
        .to(e.target, 0.2, { color: 'pink' })
        .to(back.current, 0, { css: { backgroundImage: `url(${option})` } })
        .to(back.current, 0.4, { opacity: 1 })
    }

  }

  const onHoverOff = (e, back) => {
    gsap.to(e.target, 0.5, { color: 'white' })
    gsap.to(back.current, 0.4, { css: { opacity: 0 } })
  }

  return (
    <>
      <NavWrap>
        <Nav>
          <BrandLogo className="brand-logo">
            <a href="/">
              <span>ларек</span>
            </a>
          </BrandLogo>
          <MenuButton onClick={handleClick}>
            <span className="line top" />
            <span className="line bottom" />
          </MenuButton>
        </Nav>
        <Menu id="menu">
          <ChoicesWrapper>
            <ChoicesBox id="left">
              <a
                onMouseEnter={(e) => onHoverOn(e, him, back)}
                onMouseLeave={(e) => onHoverOff(e, back)}
                href="#" id="him">для него</a>
            </ChoicesBox>
            <ChoicesBox id="right">
              <a
                onMouseEnter={(e) => onHoverOn(e, her, back)}
                onMouseLeave={(e) => onHoverOff(e, back)}
                href="#" id="her">для неё</a>
            </ChoicesBox>
          </ChoicesWrapper>
          <BackgroundImages ref={back}>
          </BackgroundImages>
        </Menu>
      </NavWrap>
    </>
  );
};

export default Navigation;
