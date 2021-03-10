import annie from "../assets/finished/annie.jpg";
import boyyee from "../assets/finished/boyyyee.jpg";
import dtiyss from "../assets/finished/dtiyss.jpg";
import family from "../assets/finished/family.png";
import friends from "../assets/finished/friends.png";
import bro from "../assets/finished/bro.png";
import sis from "../assets/finished/sis.png";
import ll from "../assets/finished/ll.jpg";
import snacktime from "../assets/finished/snacktime.jpg";

import "./styles/Home.css";
import Gallery from "./Gallery";

function Finished() {
return (
<div className="Main">
    <Gallery
    panes={[
        {image:friends, title:"friends", tt:0, mu: "digital"},
        {image:family, title:"friends", tt:0, mu: "digital"},
        {image:bro, title:"friends", tt:0, mu: "digital"},
        {image:sis, title:"friends", tt:0, mu: "digital"},
        {image:dtiyss, title:"friends", tt:0, mu: "digital"},
        {image:ll, title:"friends", tt:0, mu: "digital"},
        {image:snacktime, title:"friends", tt:0, mu: "digital"},
        {image:annie, title:"friends", tt:0, mu: "digital"},
        {image:boyyee, title:"friends", tt:0, mu: "digital"},
    ]}
    />
</div>
);
}

export default Finished;
