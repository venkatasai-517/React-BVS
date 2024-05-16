import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

const Upload = () => {
  return (
    <>
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
            <h3>
              {" "}
              <b>Upload Ads</b>
            </h3>
          </Navbar.Brand>
        </Container>
      </Navbar>
      <div style={{ backgroundImage: `url("src/assets/img/bg.png")` }}>
        <div className="container">
          <div className="row g-0 text-center">
            <div className="col-md-4 col-sm-6">
              <div
                className="card text-center p-5 border-0"
                style={{ backgroundImage: `url("src/assets/img/bg.png")` }}
              >
                <div
                  className="card p-5 border-0"
                  style={{ backgroundImage: `url("src/assets/img/bg.png")` }}
                >
                  <div className="card-body">
                    <button
                      type="button"
                      className="btn border border-dark shadow bg-body rounded "
                    >
                      Upload My Page
                    </button>
                    <br></br>
                    <br></br>
                    <button
                      type="button"
                      className="btn border border-dark shadow bg-body rounded "
                    >
                      Add Ads Link
                    </button>
                    <br></br>
                    <br></br>
                    <button
                      type="button"
                      className="btn border border-dark shadow bg-body rounded "
                    >
                      Gift Ads
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-8">
              <div
                className="card text-center p-5 border-0 "
                style={{ backgroundImage: `url("src/assets/img/bg.png")` }}
              >
                <div
                  className="card  p-5 border-0 rounded-5"
                  style={{
                    backgroundImage: `url("src/assets/img/card-img-4.png")`,
                  }}
                >
                  <div className="card-body">
                    <button
                      type="button"
                      className="btn border border-dark shadow bg-body rounded "
                    >
                      My Page
                    </button>
                    <br></br>
                    <br></br>
                    <button
                      type="button"
                      className="btn border border-dark shadow bg-body rounded "
                    >
                      Add Page
                    </button>
                    <br></br>
                    <br></br>
                    <button
                      type="button"
                      className="btn border border-dark shadow bg-body rounded "
                    >
                      Add The Ads
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <h3 className="text-center ">
            <b>Choose a plan that’s right for you</b>
          </h3>
        </div>
      </div>
    </>
  );
};
export default Upload;
