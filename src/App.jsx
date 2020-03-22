import React, { useEffect } from 'react';
import './App.css';
import gsap from 'gsap';
import HoverImage from './HoverImage';
import Navigation from './Navigation';

function App() {
  useEffect(() => {
    const tl = gsap.timeline();
    tl
      .to('body', 0, { css: { visibility: 'visible' } })
      .fromTo('.brand-name span', 1, { opacity: 0 }, { opacity: 1, delay: 1, stagger: { amount: 0.5 } })
      .to('.brand-name', 1, { scale: 1.2, ease: 'elastic.inOut' }, '-=0.8')
      .to('.overlay', 2, { y: '-100vh', ease: 'power4.out' }, '+=0.4')
      .to('nav', 0.5, { height: '75px' })
      .from('.brand-logo', 0.5, { y: -100 });
  });

  const string = 'ларек';

  const spanArray = string.split('');

  function makeSpans() {
    // eslint-disable-next-line react/no-array-index-key
    return spanArray.map((letter, i) => <span key={i}>{letter}</span>);
  }

  return (
    <div className="App">
      <div className="overlay">
        <div className="brand-wrapper">
          <h1 className="brand-name">
            {makeSpans()}
          </h1>
        </div>
      </div>
      <Navigation />
      <HoverImage />
    </div>
  );
}

export default App;
