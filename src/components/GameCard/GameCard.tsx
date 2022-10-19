import React from "react";
import { GameType } from "../../types/GameType";

type GameCardProps = {
  games: Array<GameType>;
};

const GameCard = ({ games }: GameCardProps) => {
  return (
    <>
      {games.length !== 0 ? (
        games.map((game, index) => (
          <div
            key={index}
            className="w-full max-w-full mb-8 bg-primary border border-secondary rounded transition-all duration-1000 ease-in-out cursor-pointer hover:scale-110 md:w-72"
          >
            <div>
              <img
                className="w-full max-full rounded"
                src={game.thumbnail}
                alt={game.title}
              />
            </div>
            <div className="py-4 px-3">
              <h2 className="mb-2 text-secondary font-bold">{game.title}</h2>
              <p className="text-base text-ellipsis whitespace-nowrap overflow-hidden">
                {game.short_description}
              </p>
            </div>
            <div className="px-3 pb-4 flex flex-col">
              <span className="text-sm">Gênero: {game.genre}</span>{" "}
              <span className="text-sm">Plataformas: {game.platform}</span>
            </div>
          </div>
        ))
      ) : (
        <div>
          <p className="text-base">Nenhum jogo encontrado!</p>
        </div>
      )}
    </>
  );
};

export default GameCard;
