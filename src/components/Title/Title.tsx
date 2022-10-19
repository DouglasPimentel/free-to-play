import React from "react";

type TitleProps = {
  label: string;
};

const Title = ({ label }: TitleProps) => {
  return <h2 className="mb-5 text-3xl text-secondary font-bold">{label}</h2>;
};

export default Title;
