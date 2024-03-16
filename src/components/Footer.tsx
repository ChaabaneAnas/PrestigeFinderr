import {
  faFacebookF,
  faInstagram,
  faPinterestP,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Lin from "./Link";
const Footer = () => {
  return (
    <div className=" w-full px-6 py-6 flex flex-col justify-between md:flex-row md:px-16 ">
      <div className="md:w-3/12 mb-6">
        <h1 className="mb-4 text:lg">CUSTOMER CARE</h1>
        <div className="flex gap-12 md:gap-16">
          <div className="flex flex-col gap-2">
            <Lin to="">Cars</Lin>
            <Lin to="">Real Estate</Lin>
            <Lin to="">Watches</Lin>
            <Lin to="">Yachts</Lin>
            <Lin to="">Jets</Lin>
          </div>
          <div className="flex flex-col gap-2">
            <Lin to="">Helicopters</Lin>
            <Lin to="">Jewelry</Lin>
            <Lin to="">Collectibles</Lin>
            <Lin to="">Rentals</Lin>
            <Lin to="">Journal</Lin>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2 md:w-2/12 mb-6">
        <h1 className="mb-4 text:lg">LEGAL AREA</h1>
        <Lin to="">Terms of Use</Lin>
        <Lin to="">Privacy Policy</Lin>
        <Lin to="">Conditions of Sale</Lin>
        <Lin to="">Creadits</Lin>
        <Lin to="">Accessibility statement</Lin>
      </div>
      <div className="mb-6 md:w-2/12 ">
        <h1 className="mb-4 text:lg">FOLLOW US</h1>
        <div className="max-w-60 flex justify-between md:w-full ">
          <Lin to="">
            <FontAwesomeIcon size="xl" icon={faInstagram} />
          </Lin>
          <Lin to="">
            <FontAwesomeIcon size="xl" icon={faFacebookF} />
          </Lin>
          <Lin to="">
            <FontAwesomeIcon size="xl" icon={faXTwitter} />
          </Lin>
          <Lin to="">
            <FontAwesomeIcon size="xl" icon={faPinterestP} />
          </Lin>
        </div>
      </div>
      <div className="mb-6 md:w-3/12">
        <h1 className="mb-4 text:lg">SUBSCRIBE TO OUR NEWSLATTER</h1>
        <div className="flex h-12 w-full ">
          <input
            className="border-b-2 border-black h-full w-4/6 focus:outline-none px-3 text-sm font-norma"
            type="text"
            name=""
            id=""
            placeholder="Email"
          />{" "}
          <button className="px-4 py-2 bg-black text-white h-full w-2/6 min-w-28 text:sm font-light">
            SUBSCRIBE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
