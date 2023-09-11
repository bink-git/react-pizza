import React from "react";
import { Link } from "react-router-dom";

const Button = ({ children, disabled, to, type }) => {
  const base =
    "inline-block text-sm rounded-full bg-yellow-400 font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-opacity-50 focus:ring-offset-1";

  const styles = {
    primary: `${base} px-4 py-3 md:px-6 md:py-4`,
    small: `${base} px-4 py-2 md:px-5 md:py-2.5 text-sm`,
    secondary:
      "inline-block text-sm rounded-full border-2 border-stone-500 font-semibold uppercase tracking-wide text-stone-600 transition-colors duration-300 hover:bg-stone-600 hover:text-white focus:outline-none focus:ring focus:ring-stone-300 focus:ring-opacity-50 focus:ring-offset-1 px-4 py-2.5 md:px-6 md:py-3.5",
  };

  if (to)
    return (
      <Link className={styles[type]} to={to}>
        {children}
      </Link>
    );

  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
};

export default Button;
