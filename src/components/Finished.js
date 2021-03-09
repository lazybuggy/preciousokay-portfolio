import annie from "../assets/finished/annie.jpg";
import boyyee from "../assets/finished/boyyyee.jpg";
import dtiyss from "../assets/finished/dtiyss.jpg";
import family from "../assets/finished/FAMILY.png";
import friends from "../assets/finished/FRIENDS.png";
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
        images={[
          annie,
          boyyee,
          dtiyss,
          family,
          friends,
          bro,
          sis,
          ll,
          snacktime,
        ]}
      />
    </div>
  );
}

export default Finished;
