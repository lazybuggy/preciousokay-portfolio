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
              className="GalleryImage"
              alt={pane.title}
              onClick={() => setPane(pane)}
            >
              <source
                src={pane.video}
                type="video/mp4"
              />
            </video>
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
          <video width="100%" height="100%" autoPlay>
            <source
              src={pane.video}
              type="video/mp4"
            />
          </video>
        ) : (
          <div
            className="GalleryImageBig"
            style={{ backgroundImage: `url(${pane.image})` }}
          />
        )}
      </div>
      <div className="InfoWrapper">
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
      </div>
    </div>
  );
}

export default Gallery;
