import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useRef, useMemo, useState } from "react";
import * as THREE from "three";

/* 🖱 Mouse Hook */
function useMouse() {
  const { mouse } = useThree();
  return mouse;
}

/* 🌀 GALAXY */
function Galaxy({ explode }) {
  const ref = useRef();
  const mouse = useMouse();

  const count = 4000;

  const { positions, colors } = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);

    const inside = new THREE.Color("#00ffff");
    const outside = new THREE.Color("#1e3a8a");

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;

      const radius = Math.random() * 7;
      const angle = Math.random() * Math.PI * 2;

      pos[i3] = Math.cos(angle) * radius;
      pos[i3 + 1] = (Math.random() - 0.5) * 2;
      pos[i3 + 2] = Math.sin(angle) * radius;

      const mixed = inside.clone().lerp(outside, radius / 7);

      col[i3] = mixed.r;
      col[i3 + 1] = mixed.g;
      col[i3 + 2] = mixed.b;
    }

    return { positions: pos, colors: col };
  }, []);

  useFrame(() => {
    ref.current.rotation.y += 0.0015;

    // 🖱 mouse move
    ref.current.rotation.x = mouse.y * 0.5;
    ref.current.rotation.z = mouse.x * 0.5;

    // 💥 explode effect
    if (explode) {
      ref.current.scale.set(1.2, 1.2, 1.2);
    } else {
      ref.current.scale.set(1, 1, 1);
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={colors.length / 3}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>

      <pointsMaterial
        size={0.03}
        vertexColors
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

/* ⚡ LIGHTNING LINES */
function Lightning() {
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
        <line key={i}>
          <bufferGeometry setFromPoints={points} />
          <lineBasicMaterial color="#00ffff" transparent opacity={0.4} />
        </line>
      ))}
    </>
  );
}

/* 🧠 HOLOGRAM RINGS */
function Rings() {
  const ref = useRef();

  useFrame(() => {
    ref.current.rotation.x += 0.01;
    ref.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={ref}>
      <torusGeometry args={[2.5, 0.05, 16, 100]} />
      <meshBasicMaterial color="#00ffff" wireframe />
    </mesh>
  );
}

/* 🕳 BLACK HOLE */
function BlackHole() {
  return (
    <mesh>
      <sphereGeometry args={[0.6, 32, 32]} />
      <meshStandardMaterial emissive="#00ffff" color="black" />
    </mesh>
  );
}

/* 🌌 MAIN */
export default function GalaxyBackground() {
  const [explode, setExplode] = useState(false);

  return (
    <div
      className="absolute inset-0 -z-10"
      onMouseEnter={() => setExplode(true)}
      onMouseLeave={() => setExplode(false)}
    >
      <Canvas camera={{ position: [0, 3, 10] }}>
        <ambientLight intensity={0.3} />
        <pointLight position={[5, 5, 5]} />

        <Galaxy explode={explode} />
        <Lightning />
        <Rings />
        <BlackHole />
      </Canvas>

      {/* 🔥 overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-blue-900/30 to-black" />
    </div>
  );
}