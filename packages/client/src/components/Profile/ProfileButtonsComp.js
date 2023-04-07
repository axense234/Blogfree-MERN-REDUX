// React Icons
import { AiFillEdit } from "react-icons/ai";
import { BsFillTrashFill } from "react-icons/bs";
import { MdPreview } from "react-icons/md";
// CSS
import "../../styles/Profile/ProfileButtonsComp.css";
// React Router
import { Link } from "react-router-dom";
// Components
import FavoriteStar from "../Others/FavoriteStar";
// Redux
import { useDispatch, useSelector } from "react-redux";
import { deleteBlog } from "../../redux/slices/blogsSlice";
import { getJWT, updateOverlay } from "../../redux/slices/generalSlice";

const ProfileButtonsComp = ({ profileComponentType, profilePageType, id }) => {
  const linkDestination =
    profileComponentType === "Blog"
      ? `/blogs/view-blog/${id}`
      : `/authors/view-author/${id}`;

  const dispatch = useDispatch();
  const jwt = useSelector(getJWT);

  return (
    <div className='blog-profile-comp-buttons'>
      <FavoriteStar id={id} />
      {profilePageType === "Profile" && profileComponentType !== "Author" && (
        <>
          <Link
            to={`/blogs/edit-blog/${id}`}
            className='edit-blog-icon'
            aria-label='Edit Blog Icon'
          >
            <AiFillEdit title='Edit Blog' />
          </Link>
          <BsFillTrashFill
            className='trash-blog-icon'
            aria-label='Trash Blog Icon'
            onClick={() =>
              dispatch(
                updateOverlay({
                  functionUsedOnConfirmation: deleteBlog({
                    blogId: id,
                    jwt: jwt,
                  }),
                  msg: "Are you really sure you want to delete this blog?",
                  show: true,
                })
              )
            }
            title='Delete Blog'
          />
        </>
      )}
      <Link
        to={linkDestination}
        className='view-blog-icon'
        aria-label='View Full Blog Icon'
      >
        <MdPreview title='View Blog' />
      </Link>
    </div>
  );
};

export default ProfileButtonsComp;
