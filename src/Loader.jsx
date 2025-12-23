import { RiLoaderFill } from "react-icons/ri";
import "./index.css";

const Loader = () => {
  return (
    <div>
      <h1>
        Loading...
        <RiLoaderFill className="spinning-loader" />
      </h1>
    </div>
  );
};

export default Loader;
