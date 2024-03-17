import { datatypes } from "../../Data";
import TabButton from "./TabButton";

interface propTypes {
  selected: string[];
  categories: string[];
  data: datatypes[];
  onSelect: (categorie: string) => void;
}

const Tabs = ({ categories, selected, data, onSelect }: propTypes) => {
  return (
    <ul className="flex w-full overflow-auto mb-6">
      <TabButton
        data={data}
        categorie={"ALL"}
        isActive={categories.length === selected.length}
        onClick={() => onSelect("ALL")}
      />
      {categories.map((elem) => (
        <TabButton
          key={elem}
          data={data}
          categorie={elem}
          isActive={selected.length === 1 && selected[0] === elem}
          onClick={() => {
            onSelect(elem);
          }}
        />
      ))}
    </ul>
  );
};

export default Tabs;
