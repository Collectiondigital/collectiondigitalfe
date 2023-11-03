import { NavLink } from "react-router-dom";
import { FaSearch, FaHeart } from "react-icons/fa";
import { useEffect, useState } from "react";

export default function CollectItem() {
  return (
    <>
      <h1>Hello individual Collection</h1>
      <NavLink to="/ItemPage2">Individual Item</NavLink>
    </>
  );
}
