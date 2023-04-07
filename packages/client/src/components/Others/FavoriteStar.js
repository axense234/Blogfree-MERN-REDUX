// React Icons
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
// CSS
import "../../styles/Others/FavoriteStar.css";
// Redux
import { useDispatch, useSelector } from "react-redux";
import {
  getJWT,
  getProfileSelector,
  getTempFavorites,
  updateTempFavorites,
} from "../../redux/slices/generalSlice";
import { updateProfile } from "../../redux/slices/generalSlice";

const FavoriteStar = ({ id }) => {
  const jwt = useSelector(getJWT);
  // id from params is the id of the blog/author that needs to be favorited

  const dispatch = useDispatch();
  const { id: profileId } = useSelector(getProfileSelector);
  const tempFavorites = useSelector(getTempFavorites);

  const handleFavorite = (type) => {
    let newFavorites = [];

    if (type === "full") {
      newFavorites = tempFavorites.filter((favorite) => {
        return favorite !== id;
      });
      dispatch(updateTempFavorites(newFavorites));
      dispatch(
        updateProfile({
          jwt,
          authorId: profileId,
          newAuthor: { favorites: newFavorites },
        })
      );
    } else if (type === "unfull") {
      newFavorites = [...tempFavorites, id];
      dispatch(updateTempFavorites(newFavorites));
      dispatch(
        updateProfile({
          jwt,
          authorId: profileId,
          newAuthor: { favorites: newFavorites },
        })
      );
    }
  };

  if (!jwt) {
    return null;
  }

  return (
    <div className='search-results-star'>
      {tempFavorites.find((favorite) => favorite === id) ? (
        <AiFillStar
          aria-label='Favorite Star,Full'
          onClick={() => handleFavorite("full")}
          className='star-fill-blog-icon'
          title='Unfavorite Blog'
        />
      ) : (
        <AiOutlineStar
          aria-label='Favorite Star,Empty'
          onClick={() => handleFavorite("unfull")}
          className='star-outline-blog-icon'
          title='Favorite Blog'
        />
      )}
    </div>
  );
};

export default FavoriteStar;
