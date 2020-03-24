import React, { useState, useRef } from 'react';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { extend, useThree, useFrame } from 'react-three-fiber';
import { useSpring, a } from 'react-spring/three';

extend({ OrbitControls });

const Controls = () => {
    const orbitRef = useRef();
    const { camera, gl } = useThree();

    useFrame(() => {
        orbitRef.current.update();
    })
    return (
        <orbitControls
            args={[camera, gl.domElement]}
            ref={orbitRef}
            autoRotate
        />
    )
}

const Plane = () => {
    return (
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]}>
            <planeBufferGeometry
                attach="geometry"
                args={[100, 100]}
            />
            <meshPhysicalMaterial attach="material" color="red" />
        </mesh>
    )
}

const Image = () => {
    const [hovered, setHovered] = useState(false);
    const [active, setActive] = useState(false);
    const props = useSpring({
        scale: active ? [1.5, 1.5, 1.5] : [1, 1, 1],
        color: hovered ? "pink" : "grey"
    });

    return (
        <a.mesh
            onPointerOver={() => setHovered(true)}
            onPointerOut={() => setHovered(false)}
            onClick={() => setActive(!active)}
            scale={props.scale}
        >

            {/* <ambientLight /> */}
            <spotLight position={[0, 5, 10]} penumbra={1} />
            <fog attach="fog" args={["white", 10, 15]} />
            <Controls />
            <Plane />
            <a.boxBufferGeometry
                attach="geometry"
                args={[1, 1, 1]}
            />

            <a.meshPhysicalMaterial attach="material" color={props.color} />
        </a.mesh>
    )
}

export default Image
