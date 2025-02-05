import NextTopLoader from "nextjs-toploader";
import React from "react";

const TopLoader = () => {
  return (
    <NextTopLoader
      color="#000000"
      initialPosition={0.08}
      crawlSpeed={200}
      height={3}
      crawl={true}
      showSpinner={true}
      easing="ease"
      speed={300}
      shadow="0 0 10px #2299DD,0 0 5px #2299DD"
    />
  );
};

export default TopLoader;

