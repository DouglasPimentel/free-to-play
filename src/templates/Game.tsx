import React from "react";
import type { PageProps } from "gatsby";
import { GameType } from "../types/GameType";

import Layout from "../components/Layout/Layout";

type GamePageProps = PageProps<unknown, { game: GameType }>;

const Game = ({ pageContext }: GamePageProps) => {
  const { game } = pageContext;

  return (
    <Layout>
      <div>
        <h2>{game.title}</h2>
        <img src={game.thumbnail} alt={game.title} />
        <p>{game.short_description}</p>
        <span>{game.platform}</span>
        <span>{game.developer}</span>
      </div>
    </Layout>
  );
};

export default Game;
