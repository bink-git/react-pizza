import React from "react";
import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";

const Header = () => {
  return (
    <header className="flex items-center justify-between bg-yellow-500 px-4 py-3 uppercase">
      <Link to="/" className="text-xl font-bold uppercase">
        React Pizza
      </Link>
      <SearchOrder />
      <Username />
    </header>
  );
};

export default Header;
