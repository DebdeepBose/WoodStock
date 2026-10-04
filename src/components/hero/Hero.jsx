import Overlay from "../UI/Overlay";

const Hero = () => {
  return (
    <>
      <section className="hero h-[92vh]  relative flex items-center justify-center">
        <Overlay>
          <h1 className="p-2 mt-56 text-4xl font-bold text-white md:text-6xl rounded-xl">
            Wood
            <span className="my-auto text-4xl text-sky-500 md:text-7xl">
              S
            </span>
            tock
          </h1>
        </Overlay>
      </section>
    </>
  );
};
export default Hero;
