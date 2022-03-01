import ee from "../assets/work/ee.png";
import dos from "../assets/work/dos.png";
import uno from "../assets/work/uno.png";
import pgp from "../assets/work/pgp.jpg";
import pcp from "../assets/work/pcp.jpg";
import httrt from "../assets/work/httrt.jpg";
import qq from "../assets/work/qq.png";
import sketching from "../assets/work/sketching.png";
import eyecatcher from "../assets/work/eyecatcher.png";
import ll from "../assets/work/littlenightmares.jpg";
import friends from "../assets/work/friends.png";
import kozuria from "../assets/work/kozuria.png";

import chewing from "../assets/work/chewing.mp4";
import gleaming from "../assets/work/gleaming.mp4";
import loading from "../assets/work/loading.mp4";
import haro from "../assets/work/HARO.mp4";
import card from "../assets/work/CARD.mp4";
import skincare from "../assets/work/skincare.png";
import agn from "../assets/work/agn.mp4";

import graphic1 from "../assets/work/graphics-01.png";
import graphic2 from "../assets/work/graphics-02.png";
import graphic3 from "../assets/work/graphics-03.png";
// import graphic4 from "../assets/work/graphics-04.png";


import "../App.css";
import "./styles/Home.css";
import Gallery from "./Gallery";
import { Link } from "react-router-dom";

function Finished() {
return (<>
      <div className="Nav">
        <Link to="/">Home</Link>
        <Link to="/work">Work</Link>
        <Link to="/recentwork">UX/UI</Link>
      </div>
<div className="FinishMain Main">
    <Gallery
    panes={[
        {image:graphic1, title:"Among Us MECHA", tt:"3 hours", mu: "Pencil and Paper + FireAlpaca + InkScape"},
        {image:graphic2, title:"Among Us MECHA", tt:"3 hours", mu: "Pencil and Paper + FireAlpaca + InkScape"},
        {image:graphic3, title:"Among Us MECHA", tt:"3 hours", mu: "Pencil and Paper + FireAlpaca + InkScape"},
        {video:agn, title:"Among Us MECHA", tt:"3 hours", mu: "Pencil and Paper + FireAlpaca + InkScape"},
        {image:skincare, title:"Among Us MECHA", tt:"3 hours", mu: "Pencil and Paper + FireAlpaca + InkScape"},
        {video:gleaming, title:"Among Us MECHA", tt:"3 hours", mu: "Pencil and Paper + FireAlpaca + InkScape"},
        {image:ee, title:"Among Us MECHA", tt:"3 hours", mu: "Pencil and Paper + FireAlpaca + InkScape"},
        {image:uno, title:"Among Us MECHA", tt:"3 hours", mu: "Pencil and Paper + FireAlpaca + InkScape"},
        {video:chewing, title:"Among Us MECHA", tt:"3 hours", mu: "Pencil and Paper + FireAlpaca + InkScape"},
        {image:dos, title:"Among Us MECHA", tt:"3 hours", mu: "Pencil and Paper + FireAlpaca + InkScape"},
        {video:haro, title:"Among Us MECHA", tt:"3 hours", mu: "Pencil and Paper + FireAlpaca + InkScape"},
        {image:httrt, title:"Among Us MECHA", tt:"3 hours", mu: "Pencil and Paper + FireAlpaca + InkScape"},
        {image:pcp, title:"Among Us MECHA", tt:"3 hours", mu: "Pencil and Paper + FireAlpaca + InkScape"},
        {video:loading, title:"Among Us MECHA", tt:"3 hours", mu: "Pencil and Paper + FireAlpaca + InkScape"},
        {image:pgp, title:"Among Us MECHA", tt:"3 hours", mu: "Pencil and Paper + FireAlpaca + InkScape"},
        {image:sketching, title:"Among Us MECHA", tt:"3 hours", mu: "Pencil and Paper + FireAlpaca + InkScape"},
        {video:card, title:"Among Us MECHA", tt:"3 hours", mu: "Pencil and Paper + FireAlpaca + InkScape"},
        {image:qq, title:"Among Us MECHA", tt:"3 hours", mu: "Pencil and Paper + FireAlpaca + InkScape"},
        {image:eyecatcher, title:"Among Us MECHA", tt:"3 hours", mu: "Pencil and Paper + FireAlpaca + InkScape"},
        {image:friends, title:"Among Us MECHA", tt:"3 hours", mu: "Pencil and Paper + FireAlpaca + InkScape"},
        {image:ll, title:"6ix", tt:"1 hour", mu: "Krita"},
        {image:kozuria, title:"Snacktime", tt:"1 hour", mu: "Krita"},
    ]}
    />
</div>
</>
);
}

export default Finished;
