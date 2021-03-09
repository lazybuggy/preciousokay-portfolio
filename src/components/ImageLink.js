import "./styles/ImageLink.css";
import {Link} from "react-router-dom";

function ImageLink({ src, href, text, className }) {
  return (
    <Link to={href} className={["Root", className].join(" ")}>
      <img src={src} className="Image" alt={text} />
      <p className="Title">{text}</p>
    </Link>
  );
}

export default ImageLink;
