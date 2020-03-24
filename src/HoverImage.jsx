/* eslint-disable linebreak-style */
import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import image1 from './images/image1.jpg';
import image2 from './images/image2.jpg';
import image3 from './images/image3.jpg';
import nyanCat from './images/nyanCat.gif';

const Container = styled.div`
  display: flex;
  overflow: hidden;
`;

const Wrapper = styled.div`
  overflow: hidden;
  width: 50vw;
  height: 100vh;
  position: ${(props) => (props.absolute ? 'absolute' : 'relative')};
`;

const Image = styled.img`
  width: ${(props) => (props.width ? props.width : '50vw')};
  /* height: calc(100vh - 75px); */
  position: relative;
  z-index: 1;
`;

const HoverArea = styled.div`
  overflow: hidden;
`;

const Info = styled.div`
  padding: 0 8%;
  position: relative;
  z-index: 1;
  font-family: textFont;
  > .h1-wrapper {
    overflow: hidden;
    h1 {
      font-family: vaguerSans;
      margin: 10px 0;
    }
  }
`;

const ActionButton = styled.div`
  margin: 50px 0;
  width: 300px;
  a {
    text-decoration: none;
    color: white;
    background: black;
    padding: 18px 32px;
    text-transform: uppercase;
    span {
      display: inline-block;
    }
    img {
      display: inline-block;
      height: 100%;
      width: 24px;
    }
    &:hover {
      box-shadow: 6px 6px 0px pink;
    }
  }
`;

const HoverImage = () => {
  const element = useRef();
  const right = useRef();
  // const textH1 = element.lastChild.firstChild.firstChild;

  useEffect(() => {
    const tl = gsap.timeline();
    const imageWrapper = element.current.firstChild;
    const leftImage = imageWrapper.firstChild;
    const rightSection = right.current.firstChild;
    const image = rightSection.firstChild;
    tl
      .to(imageWrapper, 1, { height: '50vh', ease: 'expo.out', delay: 4 })
      // .to(leftImage, 0.5, { scale: 1.1 }, '-=0.7')
      .to(rightSection, 1, { height: '50vh', ease: 'expo.out' }, '-=0.8');
      // .to(image, 0.5, { scale: 1.1 }, '-=0.7');
  });


  // const animateExit = (element) => {
  //   const imageWrapper = element.firstChild;
  //   gsap.to(imageWrapper, 0.5, { height: '100vh' });
  // };

  return (
    <Container>
      <HoverArea
        ref={element}
      >
        <Wrapper>
          <Image src={image1} alt="" />
        </Wrapper>
        <Info>
          <div className="h1-wrapper">
            <h1>Давай представим следующее...</h1>
          </div>
          <div className="sub-header">
            <span>
              Ларек теперь онлайн, и это лучшее что ты видел.
              <span role="img" aria-label="emoji"> 🤟</span>
            </span>
          </div>
          <ActionButton>
            <a href="#store">
              <span>
                посмотри что тут есть
                <img src={nyanCat} alt="nyan cat" />
              </span>
            </a>
          </ActionButton>
        </Info>
      </HoverArea>
      <HoverArea
        ref={right}
      >
        <Wrapper>
          <Image src={image2} alt="" />
        </Wrapper>
        <Image width="50vw" src={image3} />
      </HoverArea>
    </Container>
  );
};

export default HoverImage;
