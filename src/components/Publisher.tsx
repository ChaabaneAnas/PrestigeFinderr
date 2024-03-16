import icon from "../../src/assets/images/profile.png";
import Lin from "./Link";

const PublisherCard = () => {
  return (
    <div className="flex gap-4">
      <img className="w-auto h-auto " src={icon} alt="" />
      <div>
        <h4>
          Ortq{" "}
          <Lin className="border-b-[1px] border-black	" to="">
            Follow
          </Lin>
        </h4>
        <p>Published in</p>
        <span> Astry Blog</span>
        <div>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default PublisherCard;
