import Button from "../Components/Button";
import { shoe8 } from "../assets/images";

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          Elevate Your Experience with{" "}
          <span className="text-coral-red">Premium</span> Nike Shoes
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Immerse yourself in the world of ultimate quality and comfort through
          our meticulously crafted Nike shoes. With an array of styles and hues,
          we cater to every occasion. Your perfect pair awaits – seize the
          moment!
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Impeccable quality and unrivaled comfort are the cornerstones of our
          commitment.
        </p>
        <div className="mt-11">
          <Button label="Explore Further" />
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <img
          src={shoe8}
          alt="shoe8"
          width={570}
          height={522}
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default SuperQuality;
