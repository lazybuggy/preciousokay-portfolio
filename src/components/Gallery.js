import "./styles/Gallery.css";
import { useState } from "react";

function Gallery({ panes }) {
const [pane, setPane] = useState(panes[0]);
return (
<div className="Gallery">
    <div className="Pane">
    {panes.map((pane, index) => {
        return (
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
        <div
        className="GalleryImageBig"
        style={{ backgroundImage: `url(${pane.image})` }}
        />
    </div>
    <div className="InfoWrapper">
        <div className="Tab">
            INFO
        </div>
        <div className="Info">
        <p>Time Taken: {pane.tt}</p>
        <p>Media Used: {pane.mu}</p>
        <p>Title: {pane.title}</p>
        </div>
    </div>
</div>
);
}

export default Gallery;
