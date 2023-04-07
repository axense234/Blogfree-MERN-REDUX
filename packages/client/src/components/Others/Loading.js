// React Spinners
import { PropagateLoader } from "react-spinners";

const Loading = ({ type, size, color = "#07982f" }) => {
  return (
    <section className={type}>
      <h2>Loading</h2>
      <PropagateLoader
        id='loader'
        size={size}
        color={color}
        speedMultiplier={2}
      />
    </section>
  );
};

export default Loading;
