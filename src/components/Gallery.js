import "./styles/Gallery.css";
import { useState, useEffect } from "react";

function Gallery({ images }) {
  const [img, setImg] = useState(images[0]);
  return (
    <div className="Gallery">
      <div className="Pane">
        {images.map((image,index) => {
          return (
            <img
            key={index}
              src={image}
              className="GalleryImage"
              onClick={() => setImg(image)}
            />
          );
        })}
      </div>
      <div className="Enlarged">
        <div className="EnlargedWrapper">
          {/* <img src={img} className="GalleryImageBig" /> */}
          <div className="GalleryImageBig" style={{ backgroundImage: `url(${img})` }}/>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
