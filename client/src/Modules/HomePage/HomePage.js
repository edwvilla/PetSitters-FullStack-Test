import React from "react";
import Carousel from "../../components/Carousel/Carousel";

import { useSelector } from "react-redux";
import { authSelector } from "../../store/reducers/authSlice";

// HomePage with carousel, featured products, and more using MUI
// https://mui.com/components/carousel/#main-content
export default function HomePage() {
  const user = useSelector(authSelector);
  console.log("HomePage", user);
  return (
    <div>
      {/* // Carousel */}
      <Carousel />

      <nav>
        <ul>
          <li>
            <a href={`/petsitters`}>petsitters list</a>
          </li>
          <li>
            <a href={`/petsitters/1`}>petsitter jp</a>
          </li>
          <li>
            <a href={`/petsitters/2`}>petsitter edw</a>
          </li>
        </ul>
      </nav>

      {/* // Featured products */}
      {/* // More */}

      {/* // Footer */}
    </div>
  );
}
