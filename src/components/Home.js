import "./styles/Home.css";
import MagicText from "./MagicText";

function Home() {
  return (
    <div className="root">
      <div className="container">
        <div className="topNav">
          <h4 className="wip">WORK IN PROGRESS</h4>
          <h4 className="sketches">QUICK SKETCHES</h4>
        </div>
        <div className="homeNav">
          <h4 className="personalProjects">PERSONAL PROJECTS</h4>
          <h4 className="projects">PROJECTS</h4>
          <h4 className="resume">RESUME</h4>
          <h4 className="contact">CONTACT</h4>
        </div>
        <MagicText
          words={["fashion admirer", "cat lover", "anime lover", "cozy gamer", 'self taught artist', 'perfume enthusiast']}
        />

        <div className="backgroundText">0914</div>
        <div className="mainText">
          <h1>PRECIOUS OKEH</h1>
          <h3>MULTIMEDIA DESIGNER BASED IN TORONTO</h3>
        </div>
        <div className="halfCircle" />

        {/* <ImageLink
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
          /> */}
        {/* <div className="Description">
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
        </div> */}
        {/* </div>
      <div className="ContactMe">
          <h2>CONTACT ME</h2> */}
        {/* <a href="mailto:preciousezinnaokeh@gmail.com">preciousezinnaokeh at gmail dot com</a> */}
      </div>
    </div>
  );
}

export default Home;
