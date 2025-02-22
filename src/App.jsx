import React from "react";
import { Canvas } from "@react-three/fiber";
import { motion } from "framer-motion";
import { RotatingBox } from "./components/RotatingBox";

import "./App.css";

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
    <div className="vo">
      <motion.div
        drag
        dragConstraints={{
          top: -metadeDaAltura,
          bottom: metadeDaAltura - 120,
          right: metadeDoEspaço,
          left: -metadeDoEspaço,
        }}
        className="pai"
      >
        <Canvas
          camera={{
            fov: 40
          }}
          
        >
          <ambientLight />
          <pointLight position={[1, 1, 1]} />
          <RotatingBox />
        </Canvas>
      </motion.div>
    </div>
  );
}
