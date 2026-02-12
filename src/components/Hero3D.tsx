import { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Environment, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

const Geometries = () => {
    const groupRef = useRef<THREE.Group>(null);
    const [hovered, setHover] = useState(false);

    // Mouse interaction for rotation
    useFrame((state) => {
        if (groupRef.current) {
            // Smooth rotation based on mouse position
            const { x, y } = state.mouse;

            // Gentle constant rotation
            groupRef.current.rotation.y += 0.002;

            // Mouse influence
            groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, y * 0.2, 0.1);
            groupRef.current.rotation.z = THREE.MathUtils.lerp(groupRef.current.rotation.z, x * 0.2, 0.1);
        }
    });

    return (
        <group ref={groupRef}>
            {/* Central Icosahedron */}
            <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
                <mesh position={[0, 0, 0]} scale={hovered ? 1.1 : 1} onPointerOver={() => setHover(true)} onPointerOut={() => setHover(false)}>
                    <icosahedronGeometry args={[1.5, 0]} />
                    <meshStandardMaterial
                        color="#0a0a0a"
                        metalness={0.8}
                        roughness={0.2}
                        emissive="#00f3ff"
                        emissiveIntensity={hovered ? 0.8 : 0.2}
                        wireframe
                    />
                </mesh>
            </Float>

            {/* Floating Torus */}
            <Float speed={3} rotationIntensity={1} floatIntensity={0.5}>
                <mesh position={[3, 2, -2]} rotation={[Math.PI / 4, 0, 0]}>
                    <torusGeometry args={[0.8, 0.2, 16, 100]} />
                    <meshStandardMaterial
                        color="#bc13fe"
                        metalness={0.9}
                        roughness={0.1}
                        transparent
                        opacity={0.6}
                    />
                </mesh>
            </Float>

            {/* Floating Octahedron */}
            <Float speed={4} rotationIntensity={1.5} floatIntensity={1.5}>
                <mesh position={[-3, -1, -1]}>
                    <octahedronGeometry args={[1]} />
                    <meshStandardMaterial
                        color="#0066ff"
                        metalness={0.9}
                        roughness={0.1}
                        wireframe
                    />
                </mesh>
            </Float>

            {/* Background Particles or Small Cubes */}
            <Float speed={1.5} rotationIntensity={2} floatIntensity={2}>
                <mesh position={[2, -3, -3]}>
                    <boxGeometry args={[0.5, 0.5, 0.5]} />
                    <meshStandardMaterial color="#00f3ff" wireframe />
                </mesh>
            </Float>
        </group>
    );
};

const Hero3D = () => {
    return (
        <div className="w-full h-full absolute inset-0 z-0">
            <Canvas>
                <PerspectiveCamera makeDefault position={[0, 0, 8]} />

                {/* Lighting */}
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1} color="#00f3ff" />
                <pointLight position={[-10, -10, -10]} intensity={1} color="#bc13fe" />

                <Geometries />

                {/* Environment reflection */}
                <Environment preset="city" />

                {/* Optional: Add stars or particles if desired */}
            </Canvas>
        </div>
    );
};

export default Hero3D;
