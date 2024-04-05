import { Link } from "react-router-dom";
import Card from "../../components/Card/Card";
import "./home.css";
export default function Home() {
  return (
    <>
      <section className="section-1">
        <img className="home-bg" src="/homeBg.jpg" alt="real-estate-bg" />
        <article className="home-text">
          <h1>Discover your dream place with our expertise in real estate!</h1>
          <p>
            At our real estate agency, we are committed to providing exceptional
            service and finding the best homes for our clients.
          </p>
          <Link to={"/placeList"} className="button">
            Get Started
          </Link>
        </article>
      </section>
      <section className="section-2">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </section>
    </>
  );
}
