import { Link } from "react-router-dom";
export default function Home() {
  return (
    <div className="container-fluid min-vh-100 ">
      <div className="row min-vh-100 justify-content-center align-items-center ">
        <div className="col-12 text-center mb-0">
          <h1 className="h3">Choose a deck</h1>
        </div>
        <div class="col-12 col-md-4 mb-5">
          <Link to="/html" className="text-decoration-none">
            <div class="cardDeck mx-auto">
              <i class="fab fa-html5 fa-4x text-danger"></i>
            </div>
          </Link>
        </div>

        <div class="col-12 col-md-4 mb-5">
          <Link to="/css" className="text-decoration-none">
            <div class="cardDeck mx-auto">
              <i class="fab fa-js-square fa-4x text-warning"></i>
            </div>
          </Link>
        </div>
        <div class="col-12 col-md-4 mb-5">
          <Link to="/js" className="text-decoration-none">
            <div class="cardDeck mx-auto">
              <i class="fab fa-css3-alt fa-4x text-primary"></i>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
