import Button from "react-bootstrap/Button";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
// import InputGroup from "react-bootstrap/InputGroup";
// import Card from "react-bootstrap/Card";
import yoga from "../assets/img/yoga.jpg";
import Carousel from "react-bootstrap/Carousel";
// import Container from "react-bootstrap/Container";

function User() {
  return (
    <>
      <div style={{ backgroundImage: `url("src/assets/img/bg.png")` }}>
        <div className="text-center">
          <h5>
            <b>Its Users Page</b>
          </h5>
        </div>
        <div className="container p-3">
          <Carousel data-bs-theme="dark">
            <Carousel.Item>
              <img className="d-block w-100" src={yoga} alt="First slide" />
              <Carousel.Caption>
                <h5>First slide label</h5>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={yoga} alt="Second slide" />
              <Carousel.Caption>
                <h5>Second slide label</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={yoga} alt="Third slide" />
              <Carousel.Caption>
                <h5>Third slide label</h5>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={yoga} alt="Third slide" />
              <Carousel.Caption>
                <h5>Third slide label</h5>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
          {/* <Container>
          <Row>
            <Col md={{ span: 2, offset: 4 }}></Col>
            <Col md={{ span: 4, offset: 3 }}>
              <Button variant="light" className="shadow bg-body rounded me-2">
                <i className="bi bi-hand-thumbs-up-fill"></i>Like
              </Button>
              <Button variant="light" className="shadow bg-body rounded me-2">
                11 View
              </Button>
              <Button variant="light" className="shadow bg-body rounded me-2">
                Share{" "}
              </Button>
            </Col>
          </Row>
        </Container> */}
          <div className="container p-3">
            <div className=" col float-end">
              <Button variant="light" className="shadow bg-body rounded me-2">
                <i className="bi bi-hand-thumbs-up-fill"></i>Like
              </Button>
              <Button variant="light" className="shadow bg-body rounded me-2">
                11 View
              </Button>
              <Button variant="light" className="shadow bg-body rounded me-2">
                Share{" "}
              </Button>{" "}
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row justify-content-md-center">
            <div className="col col-lg-7">
              <p>
                <b>Link Section</b>
              </p>
            </div>
          </div>
          <div className="row justify-content-md-center">
            <div className="col col-lg-8">
              {" "}
              <Form.Label htmlFor="inputPassword5">
                <b>Live Link</b>
              </Form.Label>
              <Form.Control
                type="password"
                id="inputPassword5"
                aria-describedby="passwordHelpBlock"
              />
            </div>
          </div>
          <div className="row justify-content-md-center">
            <div className="col col-lg-8">
              {" "}
              <Form.Label htmlFor="inputPassword5">
                <b>General Link</b>
              </Form.Label>
              <Form.Control
                type="password"
                id="inputPassword5"
                aria-describedby="passwordHelpBlock"
              />
            </div>
          </div>
          <div className="row justify-content-md-center mb-4">
            <div className="col col-lg-8">
              {" "}
              <Form.Label htmlFor="inputPassword5">
                <b>Chanel Link</b>
              </Form.Label>
              <Form.Control
                type="password"
                id="inputPassword5"
                aria-describedby="passwordHelpBlock"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default User;
