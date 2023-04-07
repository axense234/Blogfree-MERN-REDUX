// Redux
import { useDispatch, useSelector } from "react-redux";
// Data
import { BlogCategoryEmojies, ProfileDetailsTemplate } from "../../data";
// Redux
import {
  changeMode,
  getJWT,
  getMode,
  getProfileSelector,
  updateProfile,
  updateProfileImage,
  updateProfileLocal,
} from "../../redux/slices/generalSlice";
// Components
import ProfileImageOverlay from "./ProfileImageOverlay";

const ProfileDetailsInfo = () => {
  const profile = useSelector(getProfileSelector);
  const jwt = useSelector(getJWT);
  const mode = useSelector(getMode);
  const dispatch = useDispatch();

  const {
    imgUrl,
    username,
    age,
    job,
    blogsCount,
    description,
    selectedCategory,
    id,
  } = profile;

  if (mode === "edit") {
    const handleInputChange = (value, type) => {
      dispatch(updateProfileLocal({ value, type }));
    };

    const handleInputSubmit = (e) => {
      e.preventDefault();
      dispatch(updateProfile({ jwt, authorId: id, newAuthor: profile }));
      dispatch(changeMode("default"));
    };

    const handleInputImageSubmit = (file) => {
      dispatch(updateProfileImage(file));
    };

    return (
      <form className='profile-details' onSubmit={(e) => handleInputSubmit(e)}>
        <ProfileImageOverlay />
        <div className='profile-details-image'>
          <img src={imgUrl} alt='Default Profile' />
          <input
            type='file'
            onChange={(e) => handleInputImageSubmit(e.target.files[0])}
          />
        </div>
        <ul className='profile-details-text'>
          <input
            type='string'
            value={username}
            onChange={(e) => handleInputChange(e.target.value, "username")}
          />
          <li>
            <label htmlFor='age'>Age:</label>
            <input
              type='number'
              id='age'
              value={age}
              onChange={(e) => handleInputChange(e.target.value, "age")}
            />
          </li>
          <li>
            <label htmlFor='job'>Job:</label>
            <input
              type='text'
              id='job'
              value={job}
              onChange={(e) => handleInputChange(e.target.value, "job")}
            />
          </li>
          <li>
            <span>Blogs Made:</span>
            <p>{blogsCount}</p>
          </li>
          <li>
            <span htmlFor='stars'>Stars Count:</span>
            <p>{blogsCount}</p>
          </li>
          <li>
            <label htmlFor='description'>Description:</label>
            <input
              type='text'
              id='description'
              value={description.slice(0, 400)}
              onChange={(e) => handleInputChange(e.target.value, "description")}
            />
          </li>
          <li>
            <label htmlFor='categories'>Selected Category:</label>
            <select
              type='text'
              id='categories'
              value={selectedCategory}
              onChange={(e) =>
                handleInputChange(e.target.value, "selectedCategorie")
              }
            >
              {Object.entries(BlogCategoryEmojies).map(([key, value]) => {
                return (
                  <option value={value} id={key} key={key}>
                    {" "}
                    {key.charAt(0).toUpperCase() + key.slice(1)} {value}
                  </option>
                );
              })}
            </select>
          </li>
        </ul>
        <button type='submit'>Save</button>
      </form>
    );
  } else if (mode === "default") {
    return (
      <div className='profile-details'>
        <img src={imgUrl} alt='Default Profile' />
        <ul className='profile-details-text'>
          <h3>{username}</h3>
          {ProfileDetailsTemplate.map((detailTemplate) => {
            return (
              <li key={detailTemplate.id}>
                <span>{detailTemplate.label}</span>
                <p>{profile[detailTemplate.detailsKey]}</p>
              </li>
            );
          })}
        </ul>
        <button onClick={() => dispatch(changeMode("edit"))}>Edit</button>
      </div>
    );
  }
};

export default ProfileDetailsInfo;
