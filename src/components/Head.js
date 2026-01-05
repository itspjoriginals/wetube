import { useDispatch } from "react-redux";
import { HAMBURGER_ICON, YT_LOGO, USER_ICON } from "../utils/constants";
import { toggleMenu } from "../store/appSlice";

const Head = () => {
  const dispatch = useDispatch();

  const toggleMenuHandler = () =>{
    dispatch(toggleMenu());
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="flex items-center justify-between px-4 py-2">

        {/* Left Section */}
        <div className="flex items-center gap-4">
          <img
          onClick={()=> toggleMenuHandler()}
            className="h-8 w-8 cursor-pointer hover:bg-gray-100 p-1 rounded-full"
            alt="hamburger-icon"
            src={HAMBURGER_ICON}
          />
          <img
            className="h-6 cursor-pointer"
            alt="youtube-logo"
            src={YT_LOGO}
          />
        </div>

        {/* Middle Search Section */}
        <div className="flex flex-1 justify-center px-4">
          <div className="flex w-full max-w-xl">
            <input
              className="w-full px-4 py-2 border border-gray-300 rounded-l-full focus:outline-none focus:ring-1 focus:ring-blue-500"
              type="text"
              placeholder="Search"
            />
            <button className="
  px-6 
  border border-gray-300 
  rounded-r-full 
  bg-gray-100 
  hover:bg-gray-200 
  flex 
  items-center 
  justify-center
">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5 text-gray-700"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21 21l-4.35-4.35m1.6-5.15a7 7 0 11-14 0 7 7 0 0114 0z"
    />
  </svg>
</button>

            
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center">
          <img
            className="h-8 w-8 cursor-pointer rounded-full hover:ring-2 hover:ring-gray-300"
            alt="user"
            src={USER_ICON}
          />
        </div>

      </div>
    </header>
  );
};

export default Head;
