import { useMemo } from "react";
import { datatypes } from "../../Data";

interface propTypes {
  data: datatypes[];
  categorie: string;
  isActive?: boolean;
  onClick: () => void;
}
const TabButton = ({ data, categorie, isActive, onClick }: propTypes) => {
  const filterData = useMemo(
    () => data.filter((elem) => elem.category === categorie),
    [data, categorie]
  );
  return (
    <button
      onClick={onClick}
      className={`flex gap-[1.8px]  justify-start px-3  ${
        isActive && "border-b-2 border-black"
      }`}
    >
      <span className=" text-[8px] leading-4 font-light ">
        ({categorie === "ALL" ? data.length : filterData.length})
      </span>
      <h1
        className={`hover:font-normale ${
          isActive ? "font-normale" : "font-light "
        }`}
      >
        {categorie}
      </h1>
    </button>
  );
};

export default TabButton;
