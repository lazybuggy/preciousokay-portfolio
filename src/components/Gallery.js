import "./styles/Gallery.css";
import { useState } from "react";

function Gallery({ panes }) {
  const [pane, setPane] = useState(panes[0]);
  return (
    <div className="Gallery">
      <div className="Pane">
        {panes.map((pane, index) => {
          return pane.video != null ? (
            <video
              key={index}
              width="100%"
              height="100%"
              autoPlay={true}
              loop={true}
              className="GalleryImage"
              alt={pane.title}
              onClick={() => setPane(pane)}
              src={pane.video}
            />
          ) : (
            <img
              key={index}
              src={pane.image}
              className="GalleryImage"
              alt={pane.title}
              onClick={() => setPane(pane)}
            />
          );
        })}
      </div>
      <div className="Enlarged">
        {pane.video != null ? (
          <video
            width="100%"
            height="100%"
            src={pane.video}
            autoPlay={true}
            loop={true}
          />
        ) : (
          <div
            className="GalleryImageBig"
            style={{ backgroundImage: `url(${pane.image})` }}
          />
        )}
      </div>
      {/* <div className="InfoWrapper">
        <div className="Tab">
          <b>INFO</b>
        </div>
        <div className="Info">
          <p>
            <b>TITLE:</b> {pane.title}
          </p>
          <p>
            <b>TIME:</b> {pane.tt}
          </p>
          <p>
            <b>MEDIUM:</b> {pane.mu}
          </p>
        </div>
      </div> */}
    </div>
  );
}

export default Gallery;
