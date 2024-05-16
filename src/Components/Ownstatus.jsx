import Carousel from "react-bootstrap/Carousel";
import bg from "../assets/img/card-img-7.png";
import bg1 from "../assets/img/bg.png";
function Ownstatus() {
  return (
    <div style={{ backgroundImage: `url(${bg1})` }}>
      <div className="container p-5">
        <button type="button" className="btn btn-primary me-3">
          Own Status
        </button>
        <button type="button" className="btn btn-outline-secondary me-3">
          My Page
        </button>
        <button type="button" className="btn btn-outline-secondary">
          Cancel
        </button>
        <br></br>
        <br></br>
        <Carousel data-bs-theme="dark">
          <Carousel.Item>
            <img className="d-block w-100" src={bg} alt="First slide" />
            <Carousel.Caption>
              <h5>First slide label</h5>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
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
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default Ownstatus;
