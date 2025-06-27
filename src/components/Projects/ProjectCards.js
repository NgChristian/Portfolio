import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="image du projet" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>

        {/* Si un fichier audio est fourni, afficher un lecteur audio */}
        {props.audio ? (
          <audio controls style={{ width: "100%", marginTop: "10px" }}>
            <source src={props.audio} type="audio/mpeg" />
            Votre navigateur ne supporte pas l'élément audio.
          </audio>
        ) : (
          <>
            <Button variant="primary" href={props.ghLink} target="_blank">
              <BsGithub /> &nbsp;
              {props.isBlog ? "Article" : "Code source"}
            </Button>

            {!props.isBlog && props.demoLink && (
              <Button
                variant="primary"
                href={props.demoLink}
                target="_blank"
                style={{ marginLeft: "10px" }}
              >
                <CgWebsite /> &nbsp;
                {"Démo"}
              </Button>
            )}
          </>
        )}
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;