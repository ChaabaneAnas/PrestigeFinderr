import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface propTypes {
  to: string;
  className?: string;
  children: ReactNode;
}

const Lin = ({ to, children, className }: propTypes) => {
  return (
    <Link
      className={`text-sm font-light font-serif tracking-wider mb-2 ${className}`}
      to={to}
    >
      {children}
    </Link>
  );
};

export default Lin;
