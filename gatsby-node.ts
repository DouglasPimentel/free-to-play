import type { GatsbyNode } from "gatsby";
import fetch from "node-fetch";
import path from "path";
import { config } from "./src/config";
import { GameType } from "./src/types/GameType";

export const sourceNodes: GatsbyNode["sourceNodes"] = async ({
  actions,
  createNodeId,
  createContentDigest,
}) => {
  const { createNode } = actions;

  const url = `https://${config.X_RAPIDAPI_HOST}/api/games?sort-by=alphabetical`;

  const response = await fetch(url, {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": `${config.X_RAPIDAPI_KEY}`,
      "X-RapidAPI-Host": `${config.X_RAPIDAPI_HOST}`,
    },
  });

  const games: Array<GameType> = await response.json();

  games.forEach((item) => {
    const slug = item.title.trim();
    console.log(slug);
    createNode({
      ...item,
      id: createNodeId(`Game-${item.title}-${item.id}`),
      internal: {
        type: `Game`,
        contentDigest: createContentDigest(item),
      },
    });
  });
};

export const createPages: GatsbyNode["createPages"] = async ({
  actions,
  graphql,
}) => {
  const { createPage } = actions;

  const queryResults: any = await graphql(`
    query AllGame {
      allGame {
        nodes {
          id
          title
          thumbnail
          short_description
          game_url
          genre
          platform
          publisher
          developer
          release_date
        }
      }
    }
  `);

  const gameTemplate = path.resolve(`src/templates/Game.tsx`);

  const games: any = queryResults.data.allGame.nodes;

  games.forEach((node: any) => {
    createPage({
      path: `/games/${node.id}`,
      component: gameTemplate,
      context: {
        game: node,
      },
      ownerNodeId: node.id,
    });
  });
};
