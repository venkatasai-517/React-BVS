import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
// import Card from "react-bootstrap/Card";
// import bg from "../assets/img/bg.jpg";
import Carousel from "react-bootstrap/Carousel";
import bg from "../assets/img/card-img-7.png";
import bg1 from "../assets/img/bg.png";

function Createpage() {
  const pillo = {
    width: "18rem",
  };
  return (
    <>
      <div style={{ backgroundImage: `url(${bg1})` }}>
        <div className="text-center">
          <h1>Hey ! Create Your Page Here</h1>
        </div>
        <div className="container p-5">
          <Carousel data-bs-theme="dark">
            <Carousel.Item>
              <img className="d-block w-100" src={bg} alt="First slide" />
              <Carousel.Caption>
                <h5>First slide label</h5>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={bg} alt="Second slide" />
              <Carousel.Caption>
                <h5>Second slide label</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={bg} alt="Third slide" />
              <Carousel.Caption>
                <h5>Third slide label</h5>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={bg} alt="Third slide" />
              <Carousel.Caption>
                <h5>Third slide label</h5>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
        <div className="container text-center ">
          <Row className="justify-content-md-center">
            <Col xs lg="2"></Col>
            <Col md="auto">
              <Button variant="light">
                <i className="bi bi-hand-thumbs-up-fill"></i>Like
              </Button>{" "}
              <Button variant="light">View</Button>{" "}
              <Button variant="light" className="me-5">
                Delete Content
              </Button>{" "}
              <Button variant="light">Upload Video</Button>{" "}
              <Button variant="light">Image</Button>{" "}
              <Button variant="light">Upload Ads</Button>{" "}
            </Col>
            <Col xs lg="2"></Col>
          </Row>
          <Row className="justify-content-md-center">
            <Col xs lg="2">
              Add Your Links
            </Col>
          </Row>
          <div className="row justify-content-evenly">
            <div className="col-4">Live Link</div>
            <div className="col-4">Add More Link</div>
          </div>
          <Row className="justify-content-md-center mt-2">
            <Col xs lg="7">
              <InputGroup>
                <Form.Control
                  placeholder="Add Live Link Here"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
                <InputGroup.Text className="bg-primary ">
                  <i className="bi bi-cloud-arrow-up-fill"></i>
                </InputGroup.Text>
              </InputGroup>
            </Col>
          </Row>
          <div className="row justify-content-evenly">
            <div className="col-4">General Link</div>
            <div className="col-4">Add More Link</div>
          </div>
          <Row className="justify-content-md-center mt-3">
            <Col xs lg="7">
              <InputGroup>
                <Form.Control
                  placeholder="Add Live Link Here"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
                <InputGroup.Text className="bg-primary ">
                  <i className="bi bi-cloud-arrow-up-fill"></i>
                </InputGroup.Text>
              </InputGroup>
            </Col>
          </Row>
          <div className="row justify-content-evenly">
            <div className="col-4">Chaneel Link</div>
            <div className="col-4">Add More Link</div>
          </div>
          <Row className="justify-content-md-center mt-3">
            <Col xs lg="7">
              <InputGroup>
                <Form.Control
                  placeholder="Add Live Link Here"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
                <InputGroup.Text className="bg-primary ">
                  <i className="bi bi-cloud-arrow-up-fill"></i>
                </InputGroup.Text>
              </InputGroup>
            </Col>
          </Row>
          <div className="row justify-content-evenly pt-3">
            <div className="col-4">User Page Link</div>
            <div className="col-4"></div>
          </div>
        </div>
        <div className="container text-center p-5">
          <div className="row justify-content-evenly ">
            <div className="card  border-0" style={pillo}>
              <img src={bg} className="card-img-top" alt="..."></img>
            </div>
            <div className="card  border-1" style={pillo}>
              {/* <img src="..." className="card-img-top" alt="..."></img> */}
              <a href="addtheadd.com">AddtheAdd.com</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Createpage;
