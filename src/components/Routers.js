import React from "react";
import Header from "./Header";
import Info from "./Info";
import Payment from "./Payment";
import Upload from "./Upload";

export default function Routers() {
  return (
    <>
      <Header />
      <Info />
      <Upload />
      <Payment />
    </>
  );
}
