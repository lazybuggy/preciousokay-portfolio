import doodle1 from "../assets/doodles/doodle1.png";
import doodle2 from "../assets/doodles/doodle2.png";
import doodle3 from "../assets/doodles/doodle3.png";
import doodle4 from "../assets/doodles/doodle4.png";
import doodle5 from "../assets/doodles/doodle5.png";
import doodle6 from "../assets/doodles/doodle6.png";
import doodle7 from "../assets/doodles/doodle7.png";
import doodle8 from "../assets/doodles/doodle8.png";
import doodle9 from "../assets/doodles/doodle9.png";

import "./styles/Home.css";
import Gallery from "./Gallery";

function Doodles() {
  return (
    <div className="DoodlesMain Main">
      <Gallery
        panes={[
          { image: doodle2, title: "02/18", tt: "30 minutes", mu: "Krita" },
          { image: doodle3, title: "02/28", tt: "1 hour", mu: "Krita" },
          { image: doodle6, title: "02/20", tt: "35 minutes", mu: "Krita" },
          {
            image: doodle5,
            title: "02/13",
            tt: "1 hour 30 minutes",
            mu: "Krita",
          },
          { image: doodle7, title: "01/22", tt: "10 minutes", mu: "Krita" },
          { image: doodle9, title: "01/20", tt: "15 minutes", mu: "Krita" },
          { image: doodle4, title: "02/27", tt: "30 minutes", mu: "Krita" },
          { image: doodle1, title: "01/08", tt: "5 minutes", mu: "Krita" },
          { image: doodle8, title: "02/24", tt: "15 minutes", mu: "Krita" },
        ]}
      />
    </div>
  );
}

export default Doodles;
