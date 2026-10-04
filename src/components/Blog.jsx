import Button from "./UI/Button";
import resting from "../assets/images/chair.png";
const Blog = () => {
  return (
    <section className="bg-main py-6 md:py-12 items-center space-y-8 justify-around px-2.5 md:px-6 lg:px-24 xl:px-36 flex flex-col md:flex-row">
      <article className="flex flex-col p-2 space-y-12  text-white lg:w-1/2 md:p-16 details">
        <h2 className="text-4xl font-bold tracking-wider">
          From Our Blog Health & Wellness, Simplified
        </h2>

        <p className="text-white">
          Discover practical tips, expert insights and helpful information about
          medicines, nutrition, preventive care and everyday wellness.
        </p>
        <button className="px-8 py-4 font-semibold capitalize duration-300 text-sky-600 bg-white rounded-full w-fit hover:scale-105">
              <p>Learn More</p>
        </button>
      </article>
      <figure className="flex shrink-0">
        <img src={resting} className="w-64" alt="chair" />
      </figure>
    </section>
  );
};
export default Blog;
