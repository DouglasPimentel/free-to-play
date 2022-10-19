import React, { useState } from "react";
import { MagnifyingGlass } from "@styled-icons/fa-solid";

const Search = () => {
  const [search, setSearch] = useState<string>("");

  const handlerOnSubmit = (event: React.FormEvent) => {
    event.preventDefault();
  };

  return (
    <div className="w-1/4 hidden lg:block">
      <form
        className="pr-2 bg-primary border border-secondary rounded flex justify-between gap-2"
        onSubmit={handlerOnSubmit}
      >
        <input
          className="w-11/12 h-10 px-4 bg-transparent text-base focus:outline-none"
          type="text"
          name="search"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Pesquisar..."
          autoComplete="off"
        />
        <button
          className="w-1/12 h-10 text-base text-secondary hover:opacity-75"
          type="submit"
        >
          <MagnifyingGlass width={20} height={20} />
        </button>
      </form>
    </div>
  );
};

export default Search;
