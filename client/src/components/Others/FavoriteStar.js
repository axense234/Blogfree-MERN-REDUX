import React from "react";
// React Icons
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
// CSS
import "../../styles/Others/FavoriteStar.css";

const FavoriteStar = ({ id }) => {
  return (
    <div className='search-results-star'>
      {id === 1 || id === 3 ? (
        <AiFillStar aria-label='Favorite Star,Full' />
      ) : (
        <AiOutlineStar aria-label='Favorite Star,Empty' />
      )}
    </div>
  );
};

export default FavoriteStar;
