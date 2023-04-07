// Components
import AuthorProfileButtonsComp from "./ProfileButtonsComp";
// CSS
import "../../styles/Profile/AuthorProfileComp.css";

const AuthorProfileComp = ({
  imgUrl,
  username,
  description,
  job,
  id,
  type,
  index,
}) => {
  return (
    <article
      className='hidden author-profile-comp-container'
      style={{ transitionDelay: `${index * 8}ms` }}
    >
      <div className='author-profile-comp-buttons'>
        <img src={imgUrl} alt={username} />
        <AuthorProfileButtonsComp
          favorite={true}
          id={id}
          profileComponentType='Author'
          profilePageType={type}
        />
      </div>
      <div className='author-profile-comp-info'>
        <h1>{username}</h1>
        <p>{job}</p>
      </div>
      <p>{description.slice(130)}...</p>
    </article>
  );
};

export default AuthorProfileComp;
