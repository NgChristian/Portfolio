import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>

        {/* Si un fichier audio est fourni, afficher un lecteur audio */}
        {props.audio ? (
          <audio controls style={{ width: "100%", marginTop: "10px" }}>
            <source src={props.audio} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        ) : (
          // Sinon, afficher les boutons GitHub et Demo
          <>
            <Button variant="primary" href={props.ghLink} target="_blank">
              <BsGithub /> &nbsp;
              {props.isBlog ? "Blog" : "GitHub"}
            </Button>
            {"\n"}
            {"\n"}

            {/* Afficher le bouton "Demo" seulement si ce n'est pas un blog et qu'il y a un lien demo */}
            {!props.isBlog && props.demoLink && (
              <Button
                variant="primary"
                href={props.demoLink}
                target="_blank"
                style={{ marginLeft: "10px" }}
              >
                <CgWebsite /> &nbsp;
                {"Demo"}
              </Button>
            )}
          </>
        )}
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;