import React from "react";

import LinkButton from "../LinkButton/LinkButton";

const Banner = () => {
  return (
    <section className="w-full my-20 py-2 flex flex-col lg:py-8">
      <div className="w-full mr-auto ml-auto text-center lg:w-3/4">
        <h1 className="mb-7 text-3xl leading-snug font-bold lg:text-7xl">
          Encontre e acompanhe os{" "}
          <span className="text-secondary">melhores jogos grátis</span> para
          jogar!
        </h1>
        <p className="text-base lg:text-xl">
          Acompanhe o que você jogou e procure o que jogar em seguida!
        </p>
      </div>
      <div className="mt-12 flex flex-col justify-between gap-5 lg:flex-row lg:mr-auto lg:ml-auto">
        <LinkButton primary={true} slug="/" label="Vamos começar" />
        <LinkButton primary={false} slug="/" label="Procurar jogo" />
      </div>
    </section>
  );
};

export default Banner;
