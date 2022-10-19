import React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { graphql } from "gatsby";
import { GameType } from "../types/GameType";

import Layout from "../components/Layout/Layout";
import Seo from "../components/Seo/Seo";
import Banner from "../components/Banner/Banner";
import Title from "../components/Title/Title";
import GameCard from "../components/GameCard/GameCard";

type IndexPageQueryProps = {
  allGame: { nodes: Array<GameType> };
};
type IndexPageProps = PageProps<IndexPageQueryProps>;

const IndexPage = ({ data }: IndexPageProps) => {
  return (
    <Layout>
      <Banner />
      <Title label="Todos os jogos" />
      <section className="mt-5 flex justify-between flex-wrap">
        <GameCard games={data.allGame.nodes} />
      </section>
    </Layout>
  );
};

export const query = graphql`
  query {
    allGame {
      nodes {
        developer
        freetogame_profile_url
        game_url
        genre
        id
        platform
        release_date
        publisher
        short_description
        thumbnail
        title
      }
    }
  }
`;

export default IndexPage;

export const Head: HeadFC = () => <Seo title="Página Inicial" />;
