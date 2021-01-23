import React, { useRef, useEffect, useState } from "react";
import CloudImg from "./../../asset/cloud.png";

const WelcomeScreen: React.FC = ({ children }) => {
  return (
    <div>
      <img  src={CloudImg} width="100%" height="100%" />
      {children}
    </div>
  );
};

export default WelcomeScreen;
