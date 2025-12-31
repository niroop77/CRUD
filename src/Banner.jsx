import { Link } from "react-router-dom";

function Banner() {
  return (
    <div className="container my-5">
      <div className="hero-box text-center">
        <h1 className="hero-title">
          Welcome to <span>CRUD Operations</span>
        </h1>

        <p className="hero-subtitle">
          Build, manage, and test data seamlessly using
        </p>

        <Link
          to="https://mockapi.io/"
          target="_blank"
          className="hero-link"
        >
          Mock API
        </Link>
      </div>
    </div>
  );
}

export default Banner;
