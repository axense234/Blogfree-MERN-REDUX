import React from "react";
// CSS
import "../../styles/Others/BlogPreview.css";
// Components
import Reactions from "../Others/Reactions";
// Hooks
import useFindReactions from "../../hooks/useFindReactions";
// Data
import { TemplateCreateBlogPreview } from "../../data";
// Redux
import { useSelector } from "react-redux";
import {
  getBlogSettingsSelector,
  getProfileSelector,
} from "../../redux/slices/generalSlice";
import { getBlogById } from "../../redux/slices/blogsSlice";

const BlogPreview = ({ id }) => {
  // EDIT MODE
  const blog = useSelector((state) => getBlogById(state, id));
  const blogDetails = useSelector(getBlogSettingsSelector);

  const { reactions } = blog || TemplateCreateBlogPreview;
  console.log(reactions);

  const clickable = false;
  const { specificBlogReactions } = useFindReactions(
    reactions,
    "",
    "",
    "",
    clickable
  );

  const { username } = useSelector(getProfileSelector);
  const defBlogDesc =
    "This will be your blog content.Be careful what you type here!";

  return (
    <section className='blog-preview-container'>
      <h1>Preview</h1>
      <div className='blog-preview-info'>
        <Reactions reactions={specificBlogReactions} />
        <h2>
          {blogDetails.title || "Blog Title"}
          {blogDetails.category}
        </h2>
        <p>...by {username || "You"}</p>
        <p>{blogDetails.description.slice(0, 1000) || defBlogDesc}...</p>
      </div>
    </section>
  );
};

export default BlogPreview;
