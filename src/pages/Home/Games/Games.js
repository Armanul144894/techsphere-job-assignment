import React, { useEffect, useState } from "react";
import line from "../../../assets/game/line.png";
import button from "../../../assets/game/button.png";

const Games = () => {
  const [games, setGames] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setGames(data));
  }, []);
  return (
    <div className="mt-10">
      <div className="flex flex-col lg:flex-row justify-center gap-8 items-center ">
        <div className="relative mt-10">
          <h1 className="text-[64px] font-[700] text-white lg:absolute uppercase">
            Whats New?
          </h1>
          <img className="w-[967.34px] mt-9 hidden lg:block" src={line} alt="" />
        </div>
        <button className="w-[277px] h-[41px]">
          <img src={button} alt="" />
        </button>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 mx-10 mt-10">
        {games.map((game) => (
          <div key={game.id}>
            <div className="card bg-[#2E1F37]  lg:w-[550px] shadow-xl p-2">
              <figure>
                <img className="lg:w-[520px]" src={game.img} alt="game" />
              </figure>
              <div className="card-body text-start">
                <h2 className="card-title uppercase text-white">{game.title}</h2>
                <p className="text-white">{game.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Games;
