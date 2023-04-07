// CSS
import "../../styles/Home/HomePageInfo.css";
// React Router
import { Link } from "react-router-dom";

const HomePageInfo = () => {
  return (
    <div className='home-page-info'>
      <div className='home-page-info-text'>
        <h1>Blogfree</h1>
        <p>Discover,create,enjoy blogs from people all around the world!</p>
      </div>
      <Link to='/signup'>Sign Up</Link>
    </div>
  );
};

export default HomePageInfo;
