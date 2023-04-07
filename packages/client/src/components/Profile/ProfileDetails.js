// CSS
import "../../styles/Profile/ProfileDetails.css";
// Components
import FavoriteStar from "../Others/FavoriteStar";
import ProfileDetailsInfo from "./ProfileDetailsInfo";
// Redux
import { useSelector } from "react-redux";
import { getAuthorByIdSelector } from "../../redux/slices/authorsSlice";
// React Router
import { useParams } from "react-router-dom";
import { ProfileDetailsTemplate } from "../../data";

const ProfileDetails = ({ type }) => {
  const { authorId } = useParams();
  const profile = useSelector((state) =>
    getAuthorByIdSelector(state, authorId)
  );
  // PROFILE PART
  if (type !== "Author") {
    return <ProfileDetailsInfo />;
  } else {
    // AUTHOR PART
    return (
      <div className='profile-details'>
        <FavoriteStar id={profile?.id} />
        <img src={profile?.imgUrl} alt='Default Profile' />
        <ul className='profile-details-text'>
          <h3>{profile?.username}</h3>
          {ProfileDetailsTemplate.map((detailTemplate) => {
            return (
              <li key={detailTemplate.id}>
                <span>{detailTemplate.label}</span>
                <p>{profile[detailTemplate.detailsKey]}</p>
              </li>
            );
          })}
        </ul>
        {type !== "Author" && <button>Edit</button>}
      </div>
    );
  }
};

export default ProfileDetails;
