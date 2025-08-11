import { IMG_URL } from "../constants";

const MenuItem = ({ isVeg, name, price, description, imgUrl }) => {
  return (
    <div className="flex flex-col md:flex-row justify-between w-full max-w-4xl mx-auto my-3 bg-white rounded-lg shadow-md overflow-hidden border border-gray-100">
      <div className="flex-1 p-2">
        <span className="text-lg">{isVeg ? '🟢' : '🔴'}</span>
        <h3 className="text-lg font-semibold text-gray-800 mt-1">{name}</h3>
        <p className="text-gray-600 text-sm mt-1">{description}</p>
        <p className="text-gray-800 font-medium mt-2">₹{price}</p>
      </div>
      <div className="w-full md:w-1/3 h-20 md:h-auto">
        <img 
          src={IMG_URL + imgUrl} alt={name} className="w-full h-full object-cover"/>
      </div>
    </div>
  );
};

export default MenuItem;