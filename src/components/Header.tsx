import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faMagnifyingGlass,
  faUser,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const navitems = [
    { href: "/", name: "Blog" },
    { href: "/services", name: "Services" },
    { href: "/contact", name: "Contact Us" },
  ];
  const [open, setOpen] = useState(false);
  return (
    <div className="px-6 py-2 bg-white border-b-2 border-[#E4E4E4] flex justify-between items-center fixed top-0 left-0 right-0 z-10 h-16 md:px-16 md:py-6">
      <div className="w-1/3 flex gap-2 justify-start gap-2 items-center">
        <FontAwesomeIcon
          className="cursor-pointer"
          onClick={() => setOpen(!open)}
          icon={open ? faXmark : faBars}
        />{" "}
        <p>Menu</p>
      </div>
      <div className="w-1/3 flex flex-col justify-center items-center">
        <Link to="/" className="text-xl font-light font-serif 	">
          PRESTIGE
        </Link>
        <Link to="/" className="text-xl font-normale 	">
          FINDER
        </Link>
      </div>
      <div className="w-1/3 flex justify-end md:justify-between  items-center ">
        <ul
          className={` w-4/5 h-full bg-white z-10  px-6 py-8 fixed top-16 left-0 flex flex-col	${
            open ? "left-0 opacity-100" : "left-[-490px] opacity-0"
          } transition duration-300 ease-in-out md:w-72 md:static md:h-auto md:flex-row md:justify-between md:w-1/4 md:opacity-100  md:z-0 md:p-0`}
        >
          {navitems.map((elem) => (
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? " w-fit after:content-[' '] after:w-1/2 after:border-b-2 after:border-slate-700 after:block mb-4 md:m-0"
                  : "mb-4 md:m-0 font-light hover:font-normal ease-out duration-150	"
              }
              key={elem.name}
              to={elem.href}
            >
              {elem.name}
            </NavLink>
          ))}
        </ul>

        <div className="flex w-12 justify-around md:w-1/6 ">
          <FontAwesomeIcon className="cursor-pointer " icon={faUser} />
          <FontAwesomeIcon
            className="cursor-pointer"
            icon={faMagnifyingGlass}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
