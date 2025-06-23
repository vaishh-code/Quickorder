// import { IMG_mcd } from "../constants"
// import { img_ccd } from "../constants"

const Restaurantcard = ({title, rating, deliveryTime, cuisines, location, img}) => {  
    return(
        <>
        <div className="w-full">
            <div className="w-full overflow-hidden"> 
                <img className="w-full h-50 object-cover rounded-2xl" src={img} alt="mc" />
            </div>
            <div>
                <h3 className="font-bold text-xl">{title}</h3>
                <div className="flex gap-4 font-medium text-md">
                    <p>{rating}</p>
                    <p>{deliveryTime}</p>
                </div>
                <p>{cuisines}</p>
                <p>{location}</p>
            </div>
        </div>
        </>
    )
}

export default Restaurantcard