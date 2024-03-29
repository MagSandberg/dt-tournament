import { useState } from "react";
import heroList from "./HeroList";
import heroUrl from "./HeroUrl";
import "../App.css";

function RandomizeHero() {
  const heroes = heroList.s1.concat(
    heroList.s2,
    heroList.marvel,
    heroList.svsk
  );
  const [randomHero, setRandomHero] = useState<string | null>(null);
  const [selectedHeroUrl, setSelectedHeroUrl] = useState<string>(heroUrl.default);
  console.log(selectedHeroUrl);

  const handleButtonClick = () => {
    const selectedHero = heroes[Math.floor(Math.random() * heroes.length)];
    setRandomHero(selectedHero);
    const randomHeroUrl = heroUrl[selectedHero as keyof typeof heroUrl];
    setSelectedHeroUrl(randomHeroUrl || heroUrl.default);
    console.log(randomHeroUrl);
  };

  return (
    <>
      <div className="card w-75 m-auto mt-5 align-items-center p-3">
        <img src={selectedHeroUrl} className="card-img-top w-100" alt="..." />
        <div className="card-body">
          <button
            onClick={handleButtonClick}
            className="btn btn-warning cf"
          >
            Get your fighter!
          </button>
        </div>
      </div>
    </>
  );
}

export default RandomizeHero;
