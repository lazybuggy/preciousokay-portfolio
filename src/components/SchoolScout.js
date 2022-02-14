import "./styles/SchoolScout.css";
import summary from "../assets/ux/summary.png";
import hero from "../assets/ux/hero.jpeg";
import features from "../assets/ux/features.svg";
import vanessa from "../assets/ux/vanessa.jpg";
import jane from "../assets/ux/jane.jpg";
import michael from "../assets/ux/michael.jpg";
import aesthetics from "../assets/ux/aesthetics.png";
import aestheticsCourses from "../assets/ux/aesthetics-courses.jpeg";
import { Link } from "react-router-dom";
import "../App.css";

function SchoolScout() {
  return (
    <>
      <div className="Nav">
        <Link to="/">Home</Link>
        <Link to="/work">Work</Link>
        <Link to="/recentwork">UX/UI</Link>
      </div>
      <div className="SSroot">
        <div className="SScontainer">
          <div className="hero">
            <img src={hero} className="SSImage" alt="summary" />
          </div>

          <div className="about">
            <div className="wrapper1">
              <h2>School Scout</h2>
              <h3>Fictoncal App</h3>
              <p>
                A project that I pursued is the accumulation of a school agenda,
                along with material specific to individual courses, all within
                one application. This project was inspired by the chaotic
                interface of multiple school servers and the way they bring a
                level of unnecessary difficulty when it comes to navigating
                through assignments, meetings, and deadlines.
              </p>
            </div>
            <div>
              <img src={summary} className="SSImage" alt="summary" />
            </div>
          </div>

          <h2 id="featuresTitle">Features</h2>
          <div className="features">
            <div className="wrapper1">
              <h4>Calendar</h4>
              <p>
                The calendar allows users to input data either onceor for
                repeating days.
              </p>
              <p>
                Users will be given reminders synced with the Calendar feature.
              </p>
              <p>
                The option to turn on/off holidays will also be implemented.
              </p>
            </div>
            <div>
              <img src={features} className="SSImage" alt="summary" />
            </div>
            <div className="wrapper2">
              <h4>Gnatt Chart</h4>
              <p>
                Day At A Glance gives users the ability to visualize how their
                day will go.
              </p>
              <p>
                The gantt chart moves in sync with real time, and includes an
                interactable sliding mechanic.
              </p>
            </div>
          </div>

          <div className="persona">
            <h2>User Persona</h2>
            <img src={vanessa} className="SSImage" alt="vanessa" />
            <img src={jane} className="SSImage" alt="jane" />
            <img src={michael} className="SSImage" alt="michael" />
          </div>

          <img src={aesthetics} className="aestheticsImage" alt="aesthetics" />
          <div className="aesthetics">
            <div>
              <img src={aestheticsCourses} className="SSImage" alt="aesthetics" />
            </div>
            <div className="wrapper1">
              <h4>Gradients</h4>
              <p>
                Gradients are an easy way of giving the human eye dimension with
                lack of depth. The switch between two colors creates a slightly
                higher level of design rather than choosing a singular color,
                and this is implemented throughout the app design.
              </p>

              <h4>Opacity</h4>
              <p>
                To heighten the effect of the gradient, buttons and other
                elements vary in both opacity and background blur. This is to
                reveal the artistic nature of the background and not completely
                obscure it.
              </p>
              <h4>Color Palette</h4>
              <p>
                When choosing the color palette, I began with orange and chose
                its complement. I changed the saturation and tone of the blue,
                as well as chose an inbetween color, lilac, for areas where a
                stand-out is needed.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SchoolScout;
