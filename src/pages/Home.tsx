import Layout from "../components/Layout.js";
import { data } from "../../src/Data.js";
import Section from "../components/Section.js";
import { useState } from "react";
import Tabs from "../components/tabs/Tabs.js";

const Home = () => {
  const categories = ["REAL ESTATE", "WATCHES", "CARS", "YACHTS", "JETS"];
  const [selected, setSelected] = useState<string[]>([
    "REAL ESTATE",
    "WATCHES",
    "CARS",
    "YACHTS",
    "JETS",
  ]);

  const onSelect = (categorie: string) => {
    if (categorie === "ALL") {
      setSelected(categories);
    } else {
      setSelected(categories.filter((elem) => elem === categorie));
    }
  };

  return (
    <Layout>
      <div className="px-6 py-2 md:px-16 md:py-6">
        <h1 className="text-2xl font-light mb-6 mt-20">
          <span className="font-serif font-normale">LATEST</span> STRORIES
        </h1>
        <Tabs
          selected={selected}
          categories={categories}
          data={data}
          onSelect={(categorie) => onSelect(categorie)}
        />
        {selected.map((elem) => (
          <Section
            key={elem}
            data={data}
            category={elem}
            summary={selected.length > 1}
          />
        ))}
      </div>
    </Layout>
  );
};

export default Home;
