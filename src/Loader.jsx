import { RiLoaderFill } from "react-icons/ri";
import "./index.css";

const Loader = () => {
  return (
    <div className=" flex justify-center items-center">
      <h1 className="flex justify-center items-center text-4xl">
        Loading...
        <RiLoaderFill size={50} className="spinning-loader" />
      </h1>
    </div>
  );
};

export default Loader;
