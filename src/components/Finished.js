import annie from "../assets/finished/annie.png";
import boyyee from "../assets/finished/boyyyee.png";
import dtiyss from "../assets/finished/dtiyss.png";
import family from "../assets/finished/family.png";
import friends from "../assets/finished/friends.png";
import bro from "../assets/finished/bro.png";
import sis from "../assets/finished/sis.png";
import ll from "../assets/finished/ll.png";
import snacktime from "../assets/finished/snacktime.png";

import ee from "../assets/work/ee.png";
import dos from "../assets/work/dos.png";
import uno from "../assets/work/uno.png";
import pgp from "../assets/work/pgp.jpg";
import pcp from "../assets/work/pcp.jpg";
import httrt from "../assets/work/httrt.jpg";
import qq from "../assets/work/qq.png";
import sketching from "../assets/work/sketching.png";
import eyecatcher from "../assets/work/eyecatcher.png";

import chewing from "../assets/work/chewing.mp4";
import gleaming from "../assets/work/gleaming.mp4";

import "../App.css";
import "./styles/Home.css";
import Gallery from "./Gallery";
import { Link } from "react-router-dom";

function Finished() {
return (<>
      <div className="Nav">
        <Link to="/">Home</Link>
        <Link to="/work">Work</Link>
      </div>
<div className="FinishMain Main">
    <Gallery
    panes={[
        {video:gleaming, title:"Among Us MECHA", tt:"3 hours", mu: "Pencil and Paper + FireAlpaca + InkScape"},
        {image:ee, title:"Among Us MECHA", tt:"3 hours", mu: "Pencil and Paper + FireAlpaca + InkScape"},
        {image:uno, title:"Among Us MECHA", tt:"3 hours", mu: "Pencil and Paper + FireAlpaca + InkScape"},
        {video:chewing, title:"Among Us MECHA", tt:"3 hours", mu: "Pencil and Paper + FireAlpaca + InkScape"},
        {image:dos, title:"Among Us MECHA", tt:"3 hours", mu: "Pencil and Paper + FireAlpaca + InkScape"},
        {image:httrt, title:"Among Us MECHA", tt:"3 hours", mu: "Pencil and Paper + FireAlpaca + InkScape"},
        {image:pcp, title:"Among Us MECHA", tt:"3 hours", mu: "Pencil and Paper + FireAlpaca + InkScape"},
        {image:pgp, title:"Among Us MECHA", tt:"3 hours", mu: "Pencil and Paper + FireAlpaca + InkScape"},
        {image:sketching, title:"Among Us MECHA", tt:"3 hours", mu: "Pencil and Paper + FireAlpaca + InkScape"},
        {image:qq, title:"Among Us MECHA", tt:"3 hours", mu: "Pencil and Paper + FireAlpaca + InkScape"},
        {image:eyecatcher, title:"Among Us MECHA", tt:"3 hours", mu: "Pencil and Paper + FireAlpaca + InkScape"},

        {image:friends, title:"Among Us MECHA", tt:"3 hours", mu: "Pencil and Paper + FireAlpaca + InkScape"},
        {image:family, title:"Okeh Christmas Card", tt:"1 hour 30 minutes", mu: "Pencil and Paper + FireAlpaca + InkScape"},
        {image:bro, title:"The Chronicles of Sly", tt:"6 hours", mu: "Pencil and Paper + FireAlpaca + InkScape"},
        {image:sis, title:"Luyasha", tt:"3 hours", mu: "Pencil and Paper + FireAlpaca + InkScape"},
        {image:dtiyss, title:"Tasia", tt:"5 hours", mu: "Krita"},
        {image:ll, title:"6ix", tt:"1 hour", mu: "Krita"},
        {image:snacktime, title:"Snacktime", tt:"1 hour", mu: "Krita"},
        {image:annie, title:"Annie Leonhardt", tt:"2 hours", mu: "Krita"},
        {image:boyyee, title:"Boye", tt:"30 minutes", mu: "Krita"},
    ]}
    />
</div>
</>
);
}

export default Finished;
