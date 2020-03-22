import React, { useState } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';

const NavWrap = styled.nav`
  height: 0px;
  background: #0e0e0e;
  color: white;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  align-items: center;
`;

const Nav = styled.div`
  grid-column: 2/span 10;
  display: grid;
  grid-template-columns: 70px auto 70px;
  grid-template-rows: 75px calc(100vh-75px);
  justify-items: center;
  align-items: center;
  grid-template-areas: 
  "logo . menu"
  "main main main";
  /* align-items: center; */
`;

const BrandLogo = styled.div`
grid-area: logo;
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
  grid-area: menu;
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
  background: black;
  display: none;
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
      .to('.')
    animateClose
      .to('.bottom', 0.2, { rotation: 0 })
      .to('.top', 0.2, { rotation: 0 }, '<')
      .to('.bottom', 0.2, { y: 0 })
      .to('.top', 0.2, { y: 0 }, '<');
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
        {openMenu ? (
          <Menu>
            THis iis menu
          </Menu>
        ) : (
          <></>
        )}

      </NavWrap>
    </>
  );
};

export default Navigation;
