"use client";

import { redirect } from "next/navigation";

const Home = () => {
  redirect("/fr/auth/login");

  return <div></div>;
};

export default Home;
