// React
import React, { useState, useMemo } from "react";
// CSS
import "../../styles/Profile/ProfileHub.css";
// Components
import AuthorProfileComp from "../Profile/AuthorProfileComp";
import BlogProfileComp from "../Profile/BlogProfileComp";
import NoProfileHubItems from "../Others/NoProfileHubItems";
// Hooks
import useFilterItems from "../../hooks/useFilterItems";
// Data
import { BlogCategoryEmojies } from "../../data";
// React Router
import { Link, useParams } from "react-router-dom";
// Redux
import { useDispatch, useSelector } from "react-redux";
import {
  getAllAuthorsSelector,
  getAuthorByIdSelector,
} from "../../redux/slices/authorsSlice";
import { getAllBlogsSelector } from "../../redux/slices/blogsSlice";
import {
  changePHFilters,
  getJWT,
  getPHFilters,
  getPhInput,
  getProfileSelector,
  updatePhInput,
} from "../../redux/slices/generalSlice";

const ProfileHub = ({ type }) => {
  // Selectors
  const dispatch = useDispatch();
  const jwt = useSelector(getJWT);
  const { authorId } = useParams();
  const filters = useSelector(getPHFilters);
  const query = useSelector(getPhInput);
  // Favorites
  const profile = useSelector(getProfileSelector);
  const author = useSelector((state) => getAuthorByIdSelector(state, authorId));
  const favorites = profile?.favorites || author?.favorites;
  // Authors
  const renderedAuthors = useSelector(getAllAuthorsSelector).filter(
    (author) => {
      return favorites.find((fav) => fav === author.id);
    }
  );
  // Profile Blogs
  const profileBlogs = useSelector(getAllBlogsSelector).filter((profBlog) => {
    return profBlog.author === (profile?.id || authorId);
  });
  // Favorite Blogs
  const favoriteBlogs = useSelector(getAllBlogsSelector).filter((profBlog) => {
    return favorites.find(
      (fav) =>
        fav === profBlog.id && profBlog.author !== (profile?.id || authorId)
    );
  });
  // All Rendered Blogs
  const allRenderedBlogs = profileBlogs.concat(favoriteBlogs);
  const renderedItems = useMemo(
    () =>
      allRenderedBlogs
        .map((blog, index) => {
          return (
            <BlogProfileComp
              key={blog.id}
              type={type}
              id={blog.id}
              {...blog}
              dispatch={dispatch}
              jwt={jwt}
              index={index}
            />
          );
        })
        .concat(
          renderedAuthors.map((author, index) => {
            return (
              <AuthorProfileComp
                key={author.id}
                {...author}
                type={type}
                index={index}
              />
            );
          })
        ) || [],
    [allRenderedBlogs, renderedAuthors, dispatch, jwt, type]
  );

  // Temporary states/Current items
  const [tempSelectedCategory, setTempSelectedCategory] = useState("");
  const [tempQuery, setTempQuery] = useState(query);

  // Filtering items every time favorites/filters change
  const { itemsTemp } = useFilterItems(renderedItems, favorites, filters);

  // PROFILE PART
  if (type !== "Author") {
    const onChangeInput = (value) => {
      setTempQuery(value);
    };

    const handleSubmitInput = (e) => {
      e.preventDefault();
      dispatch(updatePhInput(tempQuery));
    };

    return (
      <div className='profile-hub'>
        <nav className='profile-hub-buttons'>
          <div className='profile-hub-choices'>
            <button
              onClick={() => dispatch(changePHFilters({ type: "blogs" }))}
            >
              Blogs
            </button>
            <button
              onClick={() => dispatch(changePHFilters({ type: "authors" }))}
            >
              Authors
            </button>
            {type === "Author" || (
              <Link to='/blogs/create-blog'>Create Blog</Link>
            )}
          </div>
          <form
            className='profile-hub-input'
            onSubmit={(e) => handleSubmitInput(e)}
          >
            <input
              type='text'
              id='ph-input-value'
              value={tempQuery}
              onChange={(e) => onChangeInput(e.target.value)}
              autoComplete={"off"}
            />
            <div>
              <button
                onClick={() => dispatch(changePHFilters({ type: "favorites" }))}
              >
                Favorites
              </button>
              <select
                value={tempSelectedCategory}
                onChange={(e) => {
                  setTempSelectedCategory(e.target.value);
                  dispatch(
                    changePHFilters({
                      type: "category",
                      categoryValue: e.target.value,
                    })
                  );
                }}
              >
                <option value=''>None</option>
                {Object.entries(BlogCategoryEmojies).map(([key, value]) => {
                  return (
                    <option value={value} id={key} key={key}>
                      {value}
                    </option>
                  );
                })}
              </select>
            </div>
          </form>
        </nav>
        <section className='profile-hub-content'>
          {itemsTemp.length === 0 ? (
            <NoProfileHubItems type={type} />
          ) : (
            itemsTemp
          )}
        </section>
      </div>
    );
  } else {
    // AUTHOR PART
    return (
      <div className='profile-hub'>
        <nav className='profile-hub-buttons'>
          <div className='profile-hub-choices'>
            <button
              onClick={() => dispatch(changePHFilters({ type: "blogs" }))}
            >
              Blogs
            </button>
            <button
              onClick={() => dispatch(changePHFilters({ type: "authors" }))}
            >
              Authors
            </button>
            {type === "Author" || (
              <Link to='/blogs/create-blog'>Create Blog</Link>
            )}
          </div>
          <div className='profile-hub-input'>
            <input type='text' />
            <div>
              <button
                onClick={() => dispatch(changePHFilters({ type: "favorites" }))}
              >
                Favorites
              </button>
              <select
                value={tempSelectedCategory}
                onChange={(e) => {
                  setTempSelectedCategory(e.target.value);
                  dispatch(
                    changePHFilters({
                      type: "category",
                      categoryValue: e.target.value,
                    })
                  );
                }}
              >
                <option value=''>None</option>
                {Object.entries(BlogCategoryEmojies).map(([key, value]) => {
                  return (
                    <option value={value} id={key} key={key}>
                      {value}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
        </nav>
        <section className='profile-hub-content'>
          {itemsTemp.length === 0 ? (
            <NoProfileHubItems type={type} />
          ) : (
            itemsTemp
          )}
        </section>
      </div>
    );
  }
};

export default ProfileHub;
