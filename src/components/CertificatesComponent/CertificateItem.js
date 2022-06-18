import React from "react";
import "./CertificateItem.css";
import { Button, Card, Col } from "react-bootstrap";

export default function CertificateItem({ data }) {
  const { profilePic, name, msg, certificateSrc, postLink } = data;

  return (
    <>
      <Card className="h-100 px-3 py-0 border-0 certificates-card">
        <Card.Body className="row">
          {/* profile division starts */}
          <Col md={6} className="px-0 py-1 pe-md-3">
            <div className="d-flex profile-details align-items-center">
              <img
                src={profilePic}
                alt={`${name} img`}
                className="certificates-profile-pic"
              />
              <Card.Title className="certificates-title mb-0 py-1 ps-2">
                {name}
              </Card.Title>
            </div>
            <Card.Text className="certificates-text mt-2 mt-md-3">
              {msg}
            </Card.Text>
          </Col>
          {/* profile division ends */}
          {/* cerificate division starts */}
          <Col
            md={6}
            className="px-0 pt-1 d-flex flex-column justify-content-around"
          >
            <img
              src={certificateSrc}
              alt={`${name} cetificate img`}
              className="certificates-img w-100"
            />
          </Col>
          {/* cerificate division ends */}
          {/* large button */}
          <div className="btn-container text-center px-0 pt-2">
              <Button
                href={postLink}
                target="_blank"
                rel="noopener noreferrer"
                className="certificate-btn btn-primary bg-gradient form-control"
              >
                View Post
              </Button>
            </div>
        </Card.Body>
      </Card>
    </>
  );
}
