/* eslint-disable no-return-assign */
/* eslint-disable no-multi-assign */
/* eslint-disable no-unused-vars */
import React, { useState, useRef } from 'react';
import { useFrame } from 'react-three-fiber';

const Box = (props) => {
  const mesh = useRef();

  const [hovered, setHovered] = useState(false);
  const [active, setActive] = useState(false);

  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.1));

  return (
    <mesh
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
      ref={mesh}
      scale={active ? [1.5, 1.5, 1.5] : [1, 1, 1]}
      onClick={(e) => setActive(!active)}
      onPointerOver={(e) => setHovered(true)}
      onPointerOut={(e) => setHovered(false)}
    >
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <meshStandardMaterial attach="material" color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  );
};

export default Box;
