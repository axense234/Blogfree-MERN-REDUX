// Mountains
import LeftMountainsGroup from "./LeftMountainsGroup";
import RightMountainsGroup from "./RightMountainsGroup";
// CSS
import "../../styles/Mountains/Mountains.css";

const Mountains = () => {
  return (
    <div className='mountains-container'>
      <LeftMountainsGroup />
      <RightMountainsGroup />
    </div>
  );
};

export default Mountains;
