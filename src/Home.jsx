import { Link } from "react-router-dom";
import Navbar from "./Crud/Navbar";
import UserContext from "./UserContext";
import { useContext } from "react";

function Home() {

  const userName = useContext(UserContext)
 return (
  <>
    <Navbar />
    <div className="container my-5">
      <div className="hero-box text-center">
        <h1 className="hero-title">
          Welcome to <span>CRUD Operations by {userName}</span>
        </h1>

        <p className="hero-subtitle">
          Perform Create, Read, Update, and Delete operations using
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
  </>
);
}

export default Home;
