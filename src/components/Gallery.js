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
            <b>INFO</b>
        </div>
        <div className="Info">
        <p><b>TITLE:</b> {pane.title}</p>
        <p><b>TIME:</b> {pane.tt}</p>
        <p><b>MEDIUM:</b> {pane.mu}</p>
        </div>
    </div>
</div>
);
}

export default Gallery;
