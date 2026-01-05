const Button = ({ name }) => {
  return (
    <button
      className="
        shrink-0
        px-4 py-2
        text-sm font-medium
        bg-gray-100
        border border-gray-300
        rounded-full
        hover:bg-gray-200
        transition
        whitespace-nowrap
      "
    >
      {name}
    </button>
  );
};

export default Button;
