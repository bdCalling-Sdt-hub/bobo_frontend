"use client";

import { redirect } from "next/navigation";

const Home = () => {
  redirect("/en/auth/login");

  return <div></div>;
};

export default Home;
