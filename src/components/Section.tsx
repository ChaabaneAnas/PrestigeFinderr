import { useMemo } from "react";
import Card from "./Card";
import { datatypes } from "../Data";

interface propTypes {
  data: datatypes[];
  category: string;
  summary?: boolean;
}
const Section = ({ data, category, summary }: propTypes) => {
  const filterData = useMemo(
    () => data.filter((elem) => elem.category === category),
    [data, category]
  );

  return (
    <div className="mb-4">
      <div className="flex gap-[1.8px]">
        <span className=" text-[8px] leading-4 font-light ">
          ({filterData.length})
        </span>
        <h1 className="mb-2 font-normale font-lg">{category}</h1>
      </div>

      <ul className="flex flex-col justify-between w-full md:flex-row flex-wrap gap-4 ">
        {summary
          ? filterData
              .slice(0, 4)
              .map((elem) => (
                <Card
                  className="md:w-[23.8%]"
                  key={elem.id}
                  thumbnail={elem.thumbnail}
                  title={elem.title}
                  description={elem.description}
                  id={elem.id}
                  date={elem.date}
                />
              ))
          : filterData.map((elem) => (
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
      </ul>
    </div>
  );
};

export default Section;
