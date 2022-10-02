import React from "react";
// Data
import { TemplateAuthors } from "../../data";
// CSS
import "../../styles/AuthorsList/AuthorsListItems.css";
// React Router
import { Link } from "react-router-dom";

const AuthorsListItems = () => {
  const renderedAuthors = TemplateAuthors.map(
    ({ authorUsername, authorImg, id, authorSelectedCategories }, index) => {
      const categories = Object.values(authorSelectedCategories);
      return (
        <Link
          key={id}
          className='authors-list-items-li'
          to={`/authors/view-author/${id}`}
        >
          <h2>
            {index + 1}.{authorUsername}
          </h2>
          <img src={authorImg} alt={authorUsername} />
          <p>({categories})</p>
        </Link>
      );
    }
  );

  return <ul className='authors-list-items-container'>{renderedAuthors}</ul>;
};

export default AuthorsListItems;
