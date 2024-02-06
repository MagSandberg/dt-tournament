import { useState } from "react";
import heroList from "./HeroList";
import heroUrl from "./HeroUrl"; // Import the heroUrl list using default import
import dtLogo from "../resources/dt_logo_animated.gif";
import "../App.css";

function RandomizeHero() {
  const heroes = heroList.s1.concat(
    heroList.s2,
    heroList.marvel,
    heroList.svsk
  );
  const [randomHero, setRandomHero] = useState<string | null>(null);
  let [selectedHeroUrl, setSelectedHeroUrl] = useState<string>(dtLogo);
  console.log(selectedHeroUrl);

  const handleButtonClick = () => {
    const selectedHero = heroes[Math.floor(Math.random() * heroes.length)];
    setRandomHero(selectedHero);
    const randomHeroUrl = heroUrl[selectedHero as keyof typeof heroUrl];
    setSelectedHeroUrl(randomHeroUrl || dtLogo);
    console.log(randomHeroUrl);
  };

  return (
    <>
      <div className="card w-50 m-auto" style={{ maxWidth: 400 }}>
        <img src={selectedHeroUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <button
            onClick={handleButtonClick}
            className="btn btn-lg btn-warning cm-font"
          >
            Get your fighter!
          </button>
        </div>
        {randomHero && <p>{randomHero}</p>}
      </div>
    </>
  );
}

export default RandomizeHero;
