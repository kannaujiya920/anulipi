import { Canvas, useFrame } from "@react-three/fiber";
import { Stars, Line } from "@react-three/drei";
import { useRef, useMemo } from "react";
import * as THREE from "three";

/* 🤖 AI CHIP */
function AICore() {
  const ref = useRef();
  const pulse = useRef(1);

  useFrame((state) => {
    ref.current.rotation.y += 0.01;

    // ⚡ Pulse effect
    pulse.current = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.2;
    ref.current.scale.set(pulse.current, pulse.current, pulse.current);
  });

  return (
    <mesh ref={ref}>
      <boxGeometry args={[2, 2, 0.5]} />
      <meshStandardMaterial
        color="#00f0ff"
        emissive="#00f0ff"
        emissiveIntensity={2}
        wireframe
      />
    </mesh>
  );
}

/* ⚡ PARTICLES (MOUSE FOLLOW) */
function DataParticles() {
  const ref = useRef();

  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < 2000; i++) {
      temp.push(
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20
      );
    }
    return new Float32Array(temp);
  }, []);

  useFrame((state) => {
    ref.current.rotation.y += 0.001;

    // 🖱 mouse follow
    ref.current.position.x = state.mouse.x * 2;
    ref.current.position.y = state.mouse.y * 2;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particles.length / 3}
          array={particles}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.03} color="#00ffff" />
    </points>
  );
}

/* 🔗 CIRCUIT LINES */
function CircuitLines() {
  const lines = useMemo(() => {
    return new Array(20).fill().map(() => [
      new THREE.Vector3(
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10
      ),
      new THREE.Vector3(
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10
      ),
    ]);
  }, []);

  return (
    <>
      {lines.map((points, i) => (
        <Line
          key={i}
          points={points}
          color="#00f0ff"
          lineWidth={1}
          transparent
          opacity={0.4}
        />
      ))}
    </>
  );
}

/* 🌊 ENERGY WAVE */
function EnergyWave() {
  const ref = useRef();

  useFrame((state) => {
    const scale = 2 + Math.sin(state.clock.elapsedTime * 3) * 0.5;
    ref.current.scale.set(scale, scale, scale);
  });

  return (
    <mesh ref={ref}>
      <ringGeometry args={[2.5, 2.6, 64]} />
      <meshBasicMaterial
        color="#00ffff"
        transparent
        opacity={0.4}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}

/* 🔵 GRID */
function TechGrid() {
  const ref = useRef();

  useFrame(() => {
    ref.current.position.z += 0.02;
    if (ref.current.position.z > 1) ref.current.position.z = 0;
  });

  return (
    <mesh ref={ref} rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry args={[30, 30, 30, 30]} />
      <meshBasicMaterial wireframe color="#00ffff" />
    </mesh>
  );
}

/* 🎯 MAIN */
export default function DynamicBackground() {
  return (
    <div className="absolute inset-0 -z-10">

      <Canvas camera={{ position: [0, 0, 8] }}>
        <ambientLight intensity={0.6} />
        <pointLight position={[5, 5, 5]} intensity={2} />

        <Stars radius={100} depth={50} count={4000} factor={3} fade />

        <TechGrid />
        <DataParticles />
        <CircuitLines />
        <EnergyWave />
        <AICore />
      </Canvas>

      {/* 🔥 overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-blue-950/40 to-black" />
    </div>
  );
}