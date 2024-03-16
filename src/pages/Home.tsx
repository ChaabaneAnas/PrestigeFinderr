import Card, { propTypes } from "../components/Card.js";
import Layout from "../components/Layout.js";
import { data } from "../../src/Data.js";
import { useMemo } from "react";

const Home = () => {
  const estate = useMemo(
    () => data.filter((elem) => elem.category === "REAL ESTATE"),
    []
  );
  const watches = useMemo(
    () => data.filter((elem) => elem.category === "WATCHES"),
    []
  );
  const cars = useMemo(
    () => data.filter((elem) => elem.category === "CAR"),
    []
  );
  const yachts = useMemo(
    () => data.filter((elem) => elem.category === "YACHTS"),
    []
  );
  const jets = useMemo(
    () => data.filter((elem) => elem.category === "JETS"),
    []
  );

  return (
    <Layout>
      <div className="px-6 py-2 md:px-16 md:py-6">
        <h1 className="text-2xl font-light mb-6 mt-20">
          {" "}
          <span className="font-serif font-normale">LATEST</span> STRORIES
        </h1>

        <div className="mb-4">
          <div className="flex gap-[1.8px]">
            <span className=" text-[8px] leading-4 font-light ">
              ({estate.length})
            </span>
            <h1 className="mb-2 font-normale font-lg">Real Estate</h1>
          </div>

          <div className="flex flex-col justify-between w-full md:flex-row flex-wrap gap-4 ">
            {estate.map((elem) => (
              <Card
                className="md:w-[23.8%]"
                key={elem.id}
                thumbnail={elem.thumbnail}
                title={elem.title}
                description={elem.description}
                id={elem.id}
                date={elem.date}
              />
            ))}
          </div>
        </div>
        <div className="mb-4">
          <div className="flex gap-[1.8px]">
            <span className=" text-[8px] leading-4 font-light ">
              ({watches.length})
            </span>
            <h1 className="mb-2 font-normale font-lg">Watches</h1>
          </div>
          <div className="flex flex-col justify-between w-full md:flex-row gap-4 ">
            {watches.map((elem) => (
              <Card
                className="md:w-[23.8%]"
                key={elem.id}
                thumbnail={elem.thumbnail}
                title={elem.title}
                description={elem.description}
                id={elem.id}
                date={elem.date}
              />
            ))}
          </div>
        </div>
        <div className="mb-4">
          <div className="flex gap-[1.8px]">
            <span className=" text-[8px] leading-4 font-light ">
              ({cars.length})
            </span>
            <h1 className="mb-2 font-normale font-lg">Cars</h1>
          </div>
          <div className="flex flex-col justify-between w-full md:flex-row gap-4 ">
            {cars.map((elem) => (
              <Card
                className="md:w-[23.8%]"
                key={elem.id}
                thumbnail={elem.thumbnail}
                title={elem.title}
                description={elem.description}
                id={elem.id}
                date={elem.date}
              />
            ))}
          </div>
        </div>
        <div className="mb-4">
          <div className="flex gap-[1.8px]">
            <span className=" text-[8px] leading-4 font-light ">
              ({estate.length})
            </span>
            <h1 className="mb-2 font-normale font-lg">Yachts</h1>
          </div>
          <div className="flex flex-col justify-between w-full md:flex-row gap-4">
            {yachts.map((elem) => (
              <Card
                className="md:w-[23.8%]"
                key={elem.id}
                thumbnail={elem.thumbnail}
                title={elem.title}
                description={elem.description}
                id={elem.id}
                date={elem.date}
              />
            ))}
          </div>
        </div>
        <div className="mb-4">
          <div>
            <div className="flex gap-[1.8px]">
              <span className=" text-[8px] leading-4 font-light ">
                ({jets.length})
              </span>
              <h1 className="mb-2 font-normale font-lg">Jets</h1>
            </div>
            <div className="flex flex-col justify-between w-full md:flex-row gap-4 ">
              {jets.map((elem) => (
                <Card
                  className="md:w-[23.8%]"
                  key={elem.id}
                  thumbnail={elem.thumbnail}
                  title={elem.title}
                  description={elem.description}
                  id={elem.id}
                  date={elem.date}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
