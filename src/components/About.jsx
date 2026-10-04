/* import about from "../assets/images/about.jpg"
 */
import about from "../assets/images/about.jpg";
import SectionHeadline from "./UI/SectionHeadline";

const About = () => {
  return (
    <>
      <SectionHeadline name="About Us" />
      <div className="flex flex-col items-center justify-around gap-12 mt-16 lg:flex-row">
        <img
          src={about}
          className="w-full h-[450px] rounded-md object-cover flex-1"
          alt="about us image"
        />
        <article className="flex-1 leading-loose">

          <p className="mb-2">
            We believe furniture is more than something you place inside a room. It
            shapes the way you live, work, relax, and enjoy your space. Our goal is to
            bring together thoughtfully designed furniture that combines comfort,
            functionality, and timeless style.
          </p>

          <p className="mb-2">
            From everyday essentials to statement pieces, we offer a carefully
            selected collection for different spaces and lifestyles. Whether you're
            furnishing a new home, refreshing a room, or simply looking for that
            perfect finishing touch, we make it easy to discover pieces that fit your
            style.
          </p>

          <p>
            We are committed to making furniture shopping simple, convenient, and
            enjoyable. With a focus on quality design and a seamless shopping
            experience, we help you create a space that feels comfortable, personal,
            and truly yours.
          </p>


        </article>
      </div>
    </>
  );
};
export default About;
