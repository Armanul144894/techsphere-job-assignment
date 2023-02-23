import React, { useEffect, useState } from "react";
import line from "../../../assets/seller/line.png";
import button from "../../../assets/seller/btn.png";

const Sellers = () => {
  const [games, setAllGames] = useState([]);
  useEffect(() => {
    fetch("sellers.json")
      .then((res) => res.json())
      .then((data) => setAllGames(data));
  }, []);
  return (
    <div className="container mx-auto">
      <div className="flex flex-col lg:flex-row justify-center gap-8 items-center ">
        <div className="relative mt-10">
          <h1 className="text-[64px] font-[700] text-white lg:absolute uppercase">
            Best Sellers
          </h1>
          <img
            className="w-[967.34px] mt-9 hidden lg:block"
            src={line}
            alt=""
          />
        </div>
        <button className="w-[277px] h-[41px]">
          <img src={button} alt="" />
        </button>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 mx-10 gap-5 mt-10">
        {games.map((game) => (
          <div key={game.id}>
            <div className="card lg:w-[330px] bg-[#2E1F37] shadow-xl p-2">
              <figure>
                <img
                  className="lg:w-[293px] mt-5 lg:h-[438px]"
                  src={game.img}
                  alt="game"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title uppercase text-white">{game.name}</h2>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sellers;
