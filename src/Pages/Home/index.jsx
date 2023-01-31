import { Canvas, useFrame } from "@react-three/fiber";
import React, { useRef, useState, Suspense } from 'react';
import { Model } from "../../Components/TinyTokyo";
import { OrbitControls} from '@react-three/drei';


export function Home() {
    return (
        <div className="container">
            <Canvas>
                <ambientLight />
                <pointLight position={[10, 10, 10]} />
                <Model scale={.005} />
                <OrbitControls />
            </Canvas>
        </div>
    )
}