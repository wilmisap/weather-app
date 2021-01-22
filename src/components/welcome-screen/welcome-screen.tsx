import React, { useRef, useEffect, useState } from "react";
import * as THREE from "three";
import Clouds from "vanta/dist/vanta.clouds.min";

const WelcomeScreen: React.FC = ({ children }) => {
  const myRefDiv = useRef(null);
  const [vanta, setVanta] = useState<any>(null);

  useEffect(() => {
    if (!vanta) {
       setVanta(Clouds({ THREE, el: myRefDiv.current }, [vanta]));
    }
    return () => {
      console.log('vanta', vanta)
      if (vanta) {
         vanta.destroy();
      }
    };
  }, [vanta]);

  return <div ref={myRefDiv}></div>;
};

export default WelcomeScreen;
