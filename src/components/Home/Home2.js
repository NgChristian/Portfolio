import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={10} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              Laisse-moi me <span className="purple"> présenter </span>
            </h1>
            <p className="home-about-body">
              Je suis étudiant en dernière année de BUT Informatique à l'IUT de Villetaneuse,
              passionné par le développement web et logiciel.
              <br />
              <br />
              Je maîtrise plusieurs technologies tels que :
              <i>
                <b className="purple"> JavaScript, TypeScrip et Python</b>
              </i>
              <br />
              <br />
              Mes domaines de prédilection sont la conception d’
              <i>
                <b className="purple"> applications web modernes </b> ainsi que
                tout ce qui touche à la <b className="purple">data visualisation</b> et à
                l’<b className="purple">architecture logicielle</b>.
              </i>
              <br />
              <br />
              J’ai travaillé sur des projets universitaires concrets : gestion de tâches type Trello, 
              sélection de plats en temps réel, et analyse de données en Python.
              <br />
              <br />
              J’aime développer avec <b className="purple">React</b> et 
              <i>
                <b className="purple"> Node.js</b>
              </i>
              , et j’utilise aussi des outils comme
              <i>
                <b className="purple"> Git, Jupyter Notebook, Visual Studio Code </b>
              </i>
              pour structurer mes projets.
            </p>
          </Col>
        </Row>

        <Row>
          <Col md={12} className="home-about-social">
            <h1>RETROUVE-MOI SUR</h1>
            <p>
              N'hésite pas à <span className="purple">me contacter</span> !
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/NgChristian"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/christian-nguyen-8a8a6520a/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
