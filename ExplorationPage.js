import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ExploreImage from "./ExploreImage";
import FlaticonAttribution from "../FlaticonAttribution";
import Image from 'react-bootstrap/Image';

function ExplorationPage(props) {
  const listImages = props.career.images.map((image, index) => (
    <ExploreImage
      image={image.image}
      key={index}
      content={image.content}
      title={image.title}
      alternate={image.alternate}
    />
  ));
  return (
    <div
      style={{ height: "100vh", width: "100%" }}
      className="align-middle pt-5"
    >
      <Container className="align-middle" style={{ maxWidth: "650px" }}>
          <h1 className="text-center">{props.career.title}</h1>
          <Image src={props.career.background} fluid/>
          <Row>
            <Col xs={6}>{listImages[0]}</Col>
            <Col xs={6}>{listImages[1]}</Col>
          </Row>
          <Row>
            <Col xs={6}>{listImages[2]}</Col>
            <Col xs={6}>{listImages[3]}</Col>
          </Row>
        
        <FlaticonAttribution />
      </Container>
    </div>
  );
}

export default ExplorationPage;
