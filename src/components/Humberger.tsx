import { TiThMenu } from "react-icons/ti";
import { IoMdClose } from "react-icons/io";

interface PropTypes {
  state: boolean;
  onClick: () => void;
}
const Humberger = ({ state, onClick }: PropTypes): JSX.Element => {
  return state ? (
    <IoMdClose onClick={onClick} />
  ) : (
    <TiThMenu onClick={onClick} />
  );
};

export default Humberger;
