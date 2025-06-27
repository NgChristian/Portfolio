import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Développeur Web Fullstack",
          "Étudiant en BUT Informatique",
          "Passionné par React & Node.js",
          "Créateur d'applications web",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 30,
        delay: 30
      }}
    />
  );
}

export default Type;
