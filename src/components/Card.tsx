import Lin from "./Link";

export interface propTypes {
  thumbnail: string;
  title: string;
  description: string;
  id: number;
  date: string;
  className?: string;
}
const Card = ({
  thumbnail,
  title,
  description,
  id,
  date,
  className,
}: propTypes) => {
  return (
    <article className={`mb-6 ${className}`}>
      <img className="w-full h-auto mb-2" src={thumbnail}></img>
      <h3 className=" mb-4 text-2xl font-light tracking-wider text-transform: uppercase  ">
        {title}
      </h3>
      <p className="mb-2 font-light text-sm tracking-wider">{description}</p>
      <span className="mb-3 opacity-50 block text-sm"> {date}</span>
      <Lin to={`/articles/${id}`}>
        <b>READ MORE</b>
      </Lin>
    </article>
  );
};

export default Card;
