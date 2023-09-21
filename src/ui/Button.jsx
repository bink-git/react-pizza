import React from "react";
import { Link } from "react-router-dom";

const Button = ({ children, disabled, to, type, onClick }) => {
  const base =
    "px-3 py-2 inline-block text-sm rounded-full bg-yellow-400 font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300 active:outline-none active:ring active:ring-yellow-300 active:ring-opacity-50 active:ring-offset-1";

  const styles = {
    primary: `${base} px-4 py-3 md:px-6 md:py-4`,
    small: `${base} md:px-5 md:py-2.5 text-sm`,
    cart: `${base} px-4 py-2 bg-stone-400`,
    round: `${base} px-2.5 py-1 md:px-3.5 md:py-2`,
    secondary:
      "inline-block text-sm rounded-full border-2 border-stone-500 font-semibold uppercase tracking-wide text-stone-600 transition-colors duration-300 hover:bg-stone-600 hover:text-white focus:outline-none focus:ring focus:ring-stone-300 focus:ring-opacity-50 focus:ring-offset-1 px-4 py-2.5 md:px-6 md:py-3.5",
  };

  if (to)
    return (
      <Link className={styles[type]} to={to}>
        {children}
      </Link>
    );

  if (onClick)
    return (
      <button className={styles[type]} onClick={onClick}>
        {children}
      </button>
    );

  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
};

export default Button;
