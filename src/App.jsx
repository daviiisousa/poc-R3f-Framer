import React from "react";
import { Canvas } from "@react-three/fiber";
import { motion } from "framer-motion";
import { RotatingBox } from "./components/RotatingBox";



export default function App() {
  function metadeHeight() {
    return window.innerHeight / 4;
  }

  function metadeWidth() {
    return window.innerWidth / 4;
  }

  const metadeDaAltura = metadeHeight();
  const metadeDoEspaço = metadeWidth();
  return (
    <div>
      <motion.div
        drag
        dragConstraints={{
          top: -metadeDaAltura,
          bottom: metadeDaAltura,
          right: metadeDoEspaço,
          left: -metadeDoEspaço,
        }}
        style={{ width: "100vw", height: "100vh" }}
      >
        <Canvas>
          <ambientLight />
          <pointLight position={[1, 1, 1]} />
          <RotatingBox />
        </Canvas>
      </motion.div>
    </div>
  );
}
