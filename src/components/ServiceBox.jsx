import { FaUserSecret, FaWarehouse, FaShippingFast } from "react-icons/fa";

const ServiceBox = () => {
  const servicesData = [
    {
      id: 1,
      icon: <FaUserSecret className="mx-auto text-6xl" />,
      content:
        "Shop with confidence with secure payments and a safe, reliable shopping experience.",
    },
    {
      id: 2,
      icon: <FaWarehouse className="mx-auto text-6xl" />,
      content:
        "Explore a wide collection of carefully selected furniture designed for comfort, style, and everyday living.",
    },
    {
      id: 3,
      icon: <FaShippingFast className="mx-auto text-6xl" />,
      content:
        "Get your furniture delivered safely and conveniently right to your doorstep.",
    },
  ];

  return (
    <>
      {servicesData.map((item) => {
        return (
          <article
            key={item.id}
            className="flex flex-col max-w-xs p-4 py-8 mx-auto space-y-4 duration-300 ease-in rounded-md cursor-pointer bg-main text-slate-100 hover:bg-slate-100 hover:translate-y-2 hover:text-brand-100 justify-evenly box"
          >
            {item.icon}
            <p className="text-center">{item.content}</p>
          </article>
        );
      })}
    </>
  );
};
export default ServiceBox;
