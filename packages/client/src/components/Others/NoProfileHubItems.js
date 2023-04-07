// CSS
import "../../styles/Profile/NoProfileHubItems.css";
// React Router
import { Link } from "react-router-dom";

const NoProfileHubItems = ({ type }) => {
  if (type === "Author") {
    return (
      <article className='no-author-items'>
        <h2>Author has no blogs created,blogs favorited,authors favorited.</h2>
      </article>
    );
  } else if (type === "Profile") {
    return (
      <article className='no-profile-items'>
        <h2>
          Create blogs,favorite blogs or favorite authors and they will appear
          here!
        </h2>
        <div className='npi-options'>
          <Link to='/blogs/create-blog'>Create a blog!</Link>
          <Link to='/search-results'>Check out blogs!</Link>
          <Link to='/authors/authors-list'>Check out authors!</Link>
        </div>
      </article>
    );
  }
};

export default NoProfileHubItems;
