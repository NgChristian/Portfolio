import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Salut ! Je m'appelle <span className="purple">Christian NGUYEN</span>,
            je viens de <span className="purple">Noisy-le-Grand, France</span>.
            <br />
            Je suis actuellement en dernière année de B.U.T. Informatique à l'IUT de Villetaneuse.
            <br />
            Je suis passionné par le développement web, notamment avec des technos comme
            <span className="purple"> React, Node.js, TypeScript</span> et <span className="purple">Python</span>.
            <br />
            J’ai travaillé sur plusieurs projets allant de la data visualisation à la création d’applications web complètes.
            <br />
            <br />
            En dehors du code, j’aime aussi :
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Les jeux vidéo
            </li>
            <li className="about-activity">
              <ImPointRight /> La randonnée
            </li>
            <li className="about-activity">
              <ImPointRight /> La natation
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;