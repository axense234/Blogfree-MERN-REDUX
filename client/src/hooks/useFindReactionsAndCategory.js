import React from "react";
// DATA
import { BlogReactionsEmojies, BlogCategoryEmojies } from "../data";

const useFindReactionsAndCategory = (blogReactions, blogCategory) => {
  const specificBlogReactions = Object.entries(blogReactions).map(
    ([reactionName, reactionCount]) => {
      return (
        <button key={reactionName}>
          {BlogReactionsEmojies[reactionName]}
          {reactionCount}
        </button>
      );
    }
  );

  const specificBlogCategory = BlogCategoryEmojies[blogCategory.toLowerCase()];

  return { specificBlogReactions, specificBlogCategory };
};

export default useFindReactionsAndCategory;
