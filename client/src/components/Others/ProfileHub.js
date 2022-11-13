import React, { useEffect, useState } from "react";
// CSS
import "../../styles/Profile/ProfileHub.css";
// Components
import AuthorProfileComp from "../Profile/AuthorProfileComp";
import BlogProfileComp from "../Profile/BlogProfileComp";
import NoProfileHubItems from "../Others/NoProfileHubItems";
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
import useFilterItems from "../../hooks/useFilterItems";

const ProfileHub = ({ type }) => {
  const jwt = useSelector(getJWT);
  // PROFILE PART
  if (type !== "Author") {
    const { favorites } = useSelector(getProfileSelector);
    const filters = useSelector(getPHFilters);
    const query = useSelector(getPhInput);

    const renderedAuthors = useSelector(getAllAuthorsSelector).filter(
      (author) => {
        return favorites.find((fav) => fav === author.id);
      }
    );
    const { id } = useSelector(getProfileSelector);
    const dispatch = useDispatch();

    // BLOGS
    const profileBlogs = useSelector(getAllBlogsSelector).filter((profBlog) => {
      return profBlog.author === id;
    });
    const favoriteBlogs = useSelector(getAllBlogsSelector).filter(
      (profBlog) => {
        return favorites.find(
          (fav) => fav === profBlog.id && profBlog.author !== id
        );
      }
    );
    const allRenderedBlogs = profileBlogs.concat(favoriteBlogs);
    const renderedItems =
      allRenderedBlogs
        .map((blog) => {
          return (
            <BlogProfileComp
              key={blog.id}
              type={type}
              id={blog.id}
              {...blog}
              dispatch={dispatch}
              jwt={jwt}
            />
          );
        })
        .concat(
          renderedAuthors.map((author) => {
            return (
              <AuthorProfileComp key={author.id} {...author} type={type} />
            );
          })
        ) || [];

    const [items, setItems] = useState(renderedItems || []);
    const [tempSelectedCategory, setTempSelectedCategory] = useState("");
    const [tempQuery, setTempQuery] = useState(query);

    const onChangeInput = (value) => {
      setTempQuery(value);
    };

    const handleSubmitInput = (e) => {
      e.preventDefault();
      dispatch(updatePhInput(tempQuery));
    };

    useEffect(() => {
      const { itemsTemp } = useFilterItems(renderedItems, favorites, filters);
      setItems(itemsTemp);
    }, [favorites, filters]);
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
          {items.length === 0 ? <NoProfileHubItems type={type} /> : items}
        </section>
      </div>
    );
  } else {
    // AUTHOR PART
    const { authorId } = useParams();
    const { favorites } = useSelector((state) =>
      getAuthorByIdSelector(state, authorId)
    );
    const filters = useSelector(getPHFilters);
    const renderedAuthors = useSelector(getAllAuthorsSelector).filter(
      (author) => {
        return favorites.find((fav) => fav === author.id);
      }
    );
    const dispatch = useDispatch();
    // BLOGS
    const profileBlogs = useSelector(getAllBlogsSelector).filter((profBlog) => {
      return profBlog.author === authorId;
    });
    const favoriteBlogs = useSelector(getAllBlogsSelector).filter(
      (profBlog) => {
        return favorites.find(
          (fav) => fav === profBlog.id && profBlog.author !== authorId
        );
      }
    );
    const allRenderedBlogs = profileBlogs.concat(favoriteBlogs);

    // RENDERING ACTUAL ITEMS
    const renderedItems =
      allRenderedBlogs
        .map((blog) => {
          return (
            <BlogProfileComp
              key={blog.id}
              type={type}
              id={blog.id}
              {...blog}
              dispatch={dispatch}
              jwt={jwt}
            />
          );
        })
        .concat(
          renderedAuthors.map((author) => {
            return (
              <AuthorProfileComp key={author.id} {...author} type={type} />
            );
          })
        ) || [];

    const [items, setItems] = useState(renderedItems || []);
    const [tempSelectedCategory, setTempSelectedCategory] = useState("");

    useEffect(() => {
      const { itemsTemp } = useFilterItems(renderedItems, favorites, filters);
      setItems(itemsTemp);
    }, [favorites, filters]);

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
          {items.length === 0 ? <NoProfileHubItems type={type} /> : items}
        </section>
      </div>
    );
  }
};

export default ProfileHub;
