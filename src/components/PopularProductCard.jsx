import { star } from "../assets/icons";

const PopularProductCard = ({ imgURL, name, price }) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
      <img src={imgURL} alt={name} className="w-[280px] h-[280px] mx-auto" />
      <div className="mt-8 flex justify-startgap-2.5 mx-auto">
        <img src={star} alt="rating" width={24} height={24} />
        <p className="font-montserrat text-xl leading-normal text-slate-gray">
          (4.8)
        </p>
      </div>
      <h3 className="mt-2 text-2xl leading-normal mx-auto font-semibold font-palanquin">
        {name}
      </h3>
      <p className="mt-2 font-semibold mx-auto font-montserrat text-coral-red text-2xl leading-normal">
        {price}
      </p>
    </div>
  );
};

export default PopularProductCard;
