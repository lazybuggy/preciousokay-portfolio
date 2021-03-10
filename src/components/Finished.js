import annie from "../assets/finished/annie.png";
import boyyee from "../assets/finished/boyyyee.png";
import dtiyss from "../assets/finished/dtiyss.png";
import family from "../assets/finished/family.png";
import friends from "../assets/finished/friends.png";
import bro from "../assets/finished/bro.png";
import sis from "../assets/finished/sis.png";
import ll from "../assets/finished/ll.png";
import snacktime from "../assets/finished/snacktime.png";

import "./styles/Home.css";
import Gallery from "./Gallery";

function Finished() {
return (
<div className="FinishMain Main">
    <Gallery
    panes={[
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
);
}

export default Finished;
