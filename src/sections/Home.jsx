import React from "react";
import NewArrival from "./NewArrival";
import BestSeller from "./BestSeller";
import OurPolicies from "./OurPolicies";
import NewsLetter from "./NewsLetter";

const Home = () => {
  return (
    <main>
      <section>
        <NewArrival />
      </section>
      <section>
        <BestSeller />
      </section>
      <section>
        <OurPolicies />
      </section>
      <section>
        <NewsLetter />
      </section>
    </main>
  );
};

export default Home;
