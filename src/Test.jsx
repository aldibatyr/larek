import React from 'react';


const Test = () => (
  <mesh visible userData={{ test: 'hello' }} position={[10, 0, 0]} rotation={[0, 0, 0]}>
    <sphereGeometry attach="geometry" args={[1, 1, 111]} />
    <meshStandardMaterial attach="material" color="hotpink" transparent />
  </mesh>
);

export default Test;
