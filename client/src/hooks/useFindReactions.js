import React from "react";
// DATA
import { BlogReactionsEmojies, TemplateCreateBlogPreview } from "../data";
// Redux
import { updateBlog } from "../redux/slices/blogsSlice";

const useFindReactions = (reactions, id, dispatch, jwt, clickable = true) => {
  let specificBlogReactions = [];

  console.log(clickable);

  if (!clickable) {
    specificBlogReactions = Object.entries(
      reactions || TemplateCreateBlogPreview.reactions
    ).map(([reactionName, reactionCount]) => {
      return (
        <button key={reactionName}>
          {BlogReactionsEmojies[reactionName]}
          {reactionCount}
        </button>
      );
    });
  } else if (clickable) {
    const handleUpdateBlogReactions = (type) => {
      dispatch(
        updateBlog({
          newBlog: {
            reactions: { ...reactions, [type]: reactions[type] + 1 },
          },
          jwt,
          id,
        })
      );
    };
    specificBlogReactions = Object.entries(reactions).map(
      ([reactionName, reactionCount]) => {
        return (
          <button
            key={reactionName}
            onClick={() => handleUpdateBlogReactions(reactionName)}
          >
            {BlogReactionsEmojies[reactionName]}
            {reactionCount}
          </button>
        );
      }
    );
  }
  return { specificBlogReactions };
};

export default useFindReactions;
