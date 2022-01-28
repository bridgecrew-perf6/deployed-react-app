import Banner1 from "./Banners/Banner1";
import Banner2 from "./Banners/Banner2";
import React, { FC } from "react";

export const Homepage: FC = ({ ...props }) => {
  return (
    <>
      <Banner1 />
      <Banner2 />
    </>
  );
};
