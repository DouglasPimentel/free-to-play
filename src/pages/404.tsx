import * as React from "react";
import { HeadFC } from "gatsby";

import Layout from "../components/Layout/Layout";
import Seo from "../components/Seo/Seo";
import LinkButton from "../components/LinkButton/LinkButton";

const NotFoundPage = () => {
  return (
    <Layout>
      <div className="py-16 text-center">
        <h1 className="mb-14 text-4xl">Página não encontrada!</h1>
        <span className="my-14 text-9xl text-secondary font-bold">404</span>
        <p className="mt-14 mb-12 text-lg">
          Desculpe 😔, não conseguimos encontrar o que você estava procurando.
        </p>
        <LinkButton primary={true} slug="/" label="Voltar para home" />
      </div>
    </Layout>
  );
};

export default NotFoundPage;

export const Head: HeadFC = () => <Seo title="Página não encontrada" />;
