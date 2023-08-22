import { offer } from "../assets/images";
import Button from "../Components/Button";
import { arrowRight } from "../assets/icons";

const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gao-10 max-container  v ">
      <div className="flex-1">
        <img
          src={offer}
          width={773}
          height={687}
          className="object-contain w-full"
        />
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          <span className="text-coral-red">Special</span> Offer
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
        <div className="mt-11 flex flex-wrap gap-4 ">
          <Button label="Shop now" iconURL={arrowRight} />
          <Button
            label="Learn more"
            backgroundColor="bg-white"
            borderColor="border-slate-gray"
            textColor="text-slate-gray"
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
