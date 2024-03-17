import icon from "../../src/assets/images/profile.png";
import Lin from "./Link";

interface propTypes {
  className?: string;
}

const PublisherCard = ({ className }: propTypes) => {
  return (
    <div className={`flex gap-4 ${className}`}>
      <div className="flex items-center">
        <img className="w-[44px] h-[44px] " src={icon} alt="" />
      </div>
      <div>
        <h4>
          Ortq{" "}
          <Lin className="border-b-[1px] border-black	" to="">
            Follow
          </Lin>
        </h4>
        <div className="flex flex-col md:flex-row items-center  mr-1">
          <div>
            <span className="opacity-50 font-light text-sm mr-1">
              Published in{" "}
            </span>
            <span className="text-sm font-light mr-1"> Astry Blog</span>
          </div>
          <span className=" hidden bg-black  m-2 w-[2px] h-[2px]  opacity-50 rounded-full md:inline "></span>

          <div className="flex items-center">
            <span className="opacity-50 font-light text-sm  ">5 min read</span>
            <span className="  bg-black  m-2 w-[2px] h-[2px]  opacity-50 rounded-full  "></span>
            <span className="opacity-50 font-light text-sm ">Oct 6 2023</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PublisherCard;
