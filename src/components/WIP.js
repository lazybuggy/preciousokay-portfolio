import wip1 from "../assets/wip/wip1.png";
import wip2 from "../assets/wip/wip2.png";
import wip3 from "../assets/wip/wip3.png";
import wip4 from "../assets/wip/wip4.png";
import wip5 from "../assets/wip/wip5.png";
import wip6 from "../assets/wip/wip6.png";
import wip7 from "../assets/wip/wip7.png";

import "./styles/Home.css";
import Gallery from "./Gallery";

function WIP() {
  return (
    <div className="WIPMain Main">
      <Gallery
        panes={[
          { image: wip1, title: "N/A", tt: "N/A", mu: "Krita" },
          { image: wip2, title: "N/A", tt: "N/A", mu: "Krita" },
          { image: wip3, title: "N/A", tt: "N/A", mu: "Krita" },
          { image: wip4, title: "N/A", tt: "N/A", mu: "Krita" },
          { image: wip5, title: "N/A", tt: "N/A", mu: "Krita" },
          { image: wip6, title: "N/A", tt: "N/A", mu: "Krita" },
          { image: wip7, title: "N/A", tt: "N/A", mu: "Krita" },
        ]}
      />
    </div>
  );
}

export default WIP;
