import hero from "../assets/home/hero.png";
import green from "../assets/home/green.png";
import pink from "../assets/home/pink.png";
import yellow from "../assets/home/yellow.png";
import "./styles/Home.css";
import ImageLink from "./ImageLink";

function Home() {
  return (
    <div className="Main">
      <div className="HeroContainer">
        <img src={hero} className="Hero" alt="Precious Okeh Portfolio" />
      </div>
      <div className="Container">
        <div className="Links">
          <ImageLink
            className="finished"
            text="Finished"
            href="/finished"
            src={green}
          />
          <ImageLink className="wip" text="WIP" href="/wip" src={yellow} />
          <ImageLink
            className="doodles"
            text="Doodles"
            href="/doodles"
            src={pink}
          />
        </div>
        <div className="Description">
          Pastry soufflé brownie. Macaroon tiramisu tootsie roll. Sweet roll
          chocolate chocolate bar marzipan croissant caramels topping muffin.
          Croissant gingerbread lemon drops topping brownie croissant tiramisu
          dragée. Lemon drops muffin cake jelly cookie tootsie roll pie. Lemon
          drops pastry chocolate cake marzipan croissant chocolate cake. Topping
          marzipan jujubes muffin sweet roll. Apple pie chupa chups pastry.
          Tootsie roll pie cupcake chupa chups. Soufflé macaroon sweet roll
          lollipop icing cookie pastry donut candy canes. Sweet roll jujubes
          dessert tootsie roll sweet. Chocolate bar carrot cake tiramisu dessert
          tiramisu sesame snaps gummies carrot cake. Sweet powder carrot cake
          fruitcake toffee sesame snaps brownie.
        </div>
      </div>
    </div>
  );
}

export default Home;
