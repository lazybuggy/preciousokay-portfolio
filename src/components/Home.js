import "./styles/Home.css";
import Switcher from "./Switcher";

function Home() {
  return (
    <div className="root">
      <div className="container">
        <div className="homeNav">
          <h4 className="work" text="Finished">
            <a  href="/work">WORK</a>
          </h4>
          {/* <h4 className="resume">RESUME</h4>
          <h4 className="contact">CONTACT</h4> */}
        </div>
        {/* <MagicText
          words={["fashion admirer", "cat lover", "anime lover", "cozy gamer", 'self taught artist', 'perfume enthusiast']}
        /> */}

        <div className="backgroundText">
          <p className="month">09</p>
          <p className="day">14</p>
        </div>
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
        <div className="iAm">
          I am a:
          <Switcher
            words={[
              "fashion admirer",
              "cat lover",
              "fan of anime",
              "cozy gamer",
              "self taught artist",
              "perfume enthusiast",
            ]}
            colour="#FF6847"
          />
        </div>
        {/* </div>
      <div className="ContactMe">
          <h2>CONTACT ME</h2> */}
        {/* <a href="mailto:preciousezinnaokeh@gmail.com">preciousezinnaokeh at gmail dot com</a> */}
      </div>
    </div>
  );
}

export default Home;
