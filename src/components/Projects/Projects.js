import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="SAE_Analyse_ParcourSup"
              description="Projet d'analyse de données sur les candidatures ParcourSup pour le BUT Informatique, développé avec Python, Pandas, Matplotlib et Jupyter Notebook. Permet d'extraire des tendances, d'étudier les profils des candidats et de proposer un classement basé sur des critères de sélection clés."
              ghLink="https://github.com/NgChristian/SAE_Analyse_ParcourSup"
              demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="SAE_Dev_Web"
              description="Application web de gestion de projet inspirée de Trello, développée avec HTML, CSS, TypeScript, React, Java Spring Boot et Node.js. Permet la création de tableaux, de listes et de cartes pour organiser les tâches efficacement."
              ghLink="https://github.com/NgChristian/SAE_Dev_Web"
              demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Miam-o-Pedia"
              description="Catalogue interactif de plats avec un sélecteur multimodal, développé avec HTML, CSS, JavaScript, Python et Flask. Recherche en temps réel, filtres par ordre alphabétique, gestion des favoris et création de catégories pour organiser les plats efficacement."
              ghLink="https://github.com/NgChristian/Miam-o-Pedia"
              demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Podcast"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
