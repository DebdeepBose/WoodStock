const Button = ({ title }) => {
  return (
    <button className="px-4 py-2 capitalize duration-300 text-white bg-brand-600 rounded-full w-fit hover:bg-brand-700 hover:shadow-lg hover:scale-105">
      {title}
    </button>
  );
};
export default Button;
