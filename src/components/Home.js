import hero from "../assets/home/hero.png";
import green from "../assets/home/green.png";
import pink from "../assets/home/pink.png";
import yellow from "../assets/home/yellow.png";
import "./styles/Home.css";
import ImageLink from "./ImageLink";
import Switcher from "./Switcher";

function Home() {
  return (
    <div className="Main">
      <div className="HeroContainer">
        <img src={hero} className="Hero" alt="Precious Okeh Portfolio" />
      </div>
      <div className="Container">
        <div className="Links">
          <ImageLink
            className="finished"
            text="Finished"
            href="/finished"
            src={green}
          />
          <ImageLink className="wip" text="WIP" href="/wip" src={yellow} />
          <ImageLink
            className="doodles"
            text="Doodles"
            href="/doodles"
            src={pink}
          />
        </div>
        <div className="Description">
          Hi, I’m Precious! I’m a student at Ryerson studying Aerospace
          Engineering and also a{" "}
          <Switcher
            words={[
              "Self-Taught Freelance Artist",
              "Anime Lover",
              "Cozy Gamer",
              "Music Enthusiast",
              "Cat Lover",
              "Fashion Admirer",
            ]}
            colour="#C4D6B0"
          />{" "}
          based in the Greater Toronto Area!
        </div>
      </div>
      <div className="ContactMe">
          <h2>CONTACT ME</h2>
          <a href="mailto:preciousezinnaokeh@gmail.com">preciousezinnaokeh at gmail dot com</a>
      </div>
    </div>
  );
}

export default Home;
