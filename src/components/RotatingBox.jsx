import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { useTexture } from "@react-three/drei";

export function RotatingBox() {
  const meshRef = useRef();

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  });

  const diceTexture = useTexture("texturaPedra.jpg"); // Substitua pelo caminho da sua textura

  return (
    <mesh
      ref={meshRef}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial
        map={diceTexture} // Aplicando a textura do dado
      />
    </mesh>
  );
}
