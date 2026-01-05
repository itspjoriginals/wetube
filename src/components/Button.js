const Button = ({ name }) => {
  return (
    <button className="
      px-4 py-2 
      text-sm font-medium
      bg-gray-100 
      border border-gray-300 
      rounded-full 
      hover:bg-gray-200 
      active:bg-gray-300
      transition 
      duration-200
      whitespace-nowrap
    ">
      {name}
    </button>
  );
};

export default Button;
