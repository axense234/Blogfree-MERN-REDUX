// CSS
import "../../styles/AuthorsList/AuthorsListItems.css";
// React Router
import { Link } from "react-router-dom";
// Redux
import { useSelector } from "react-redux";
import { getAllAuthorsSelector } from "../../redux/slices/authorsSlice";

const AuthorsListItems = () => {
  const authors = useSelector(getAllAuthorsSelector);

  const renderedAuthors = authors.map(
    ({ username, imgUrl, id, selectedCategory }, index) => {
      return (
        <Link
          key={id}
          className='hidden authors-list-items-li'
          to={`/authors/view-author/${id}`}
          style={{ transitionDelay: `${index * 8}ms` }}
        >
          <h2>
            {index + 1}.{username}
          </h2>
          <img src={imgUrl} alt={username} />
          <p>({selectedCategory})</p>
        </Link>
      );
    }
  );

  return <div className='authors-list-items-container'>{renderedAuthors}</div>;
};

export default AuthorsListItems;
