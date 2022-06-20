import React, { Fragment } from "react";
import "./CertificatesItem.css";
import { Button, Card, Col } from "react-bootstrap";

export default function CertificatesItem({ data }) {
  const { profilePic, name, profession, msg, certificateSrc, postLink } = data;

  return (
    <Fragment>
      <Card className="certificates-card h-100 px-3 py-0 border-0">
        <Card.Body>
          <a
            href={postLink}
            target="_blank"
            rel="noopener noreferrer"
            className="row text-decoration-none"
          >
            {/* profile division starts */}
            <Col md={6} className="px-0 pb-1 pe-md-2">
              <div className="certificates-profile-details d-flex align-items-center">
                {/* profile picture starts */}
                <div className="certificates-profile-pic-container">
                  <img
                    src={profilePic}
                    alt={`${name} img`}
                    className="certificates-profile-pic overflow-hidden"
                  />
                </div>
                {/* profile picture ends */}
                {/* profile details starts */}
                <div className="ps-2">
                  <Card.Title className="certificates-title mb-2">
                    {name}
                  </Card.Title>
                  <Card.Subtitle className="certificates-subtitle">
                    {profession}
                  </Card.Subtitle>
                </div>
                {/* profile details ends */}
              </div>
              <Card.Text className="certificates-text mt-2">{msg}</Card.Text>
            </Col>
            {/* profile division ends */}
            {/* cerificate division starts */}
            <Col md={6} className="px-0 my-auto">
              <img
                src={certificateSrc}
                alt={`${name} cetificate img`}
                className="certificates-img w-100"
              />
            </Col>
            {/* cerificate division ends */}
          </a>
          {/* view post button starts */}
          <div className="row text-center pt-2">
            <Button
              href={postLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary bg-gradient form-control"
            >
              View Post
            </Button>
          </div>
          {/* view post button ends */}
        </Card.Body>
      </Card>
    </Fragment>
  );
}
