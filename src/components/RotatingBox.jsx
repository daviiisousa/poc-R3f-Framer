import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";

export function RotatingBox() {
    const [hovered, setHover] = useState(false)
    const meshRef = useRef();
  
    useFrame(() => {
      if (meshRef.current) {
        meshRef.current.rotation.x += 0.01;
        meshRef.current.rotation.y += 0.01;
      }
    });
  
   
  
    return (
      <mesh ref={meshRef}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
      >
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial 
        color={hovered ? 'hotpink' : 'orange'} />
      </mesh>
    );
  }