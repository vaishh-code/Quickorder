import { FILTERS_URL, IMG_URL } from "../constants"
import { Link } from "react-router"

const Restaurantcard = ({name, avgRating, sla, cuisines, locality, cloudinaryImageId, text, imageId,id}) => {  
    return(
        <>

        {imageId && (
            <div className="text-center w-[150px]">
                <div className="w-30 h-38 mx-auto overflow-hidden rounded-full">
                    <img src={`${FILTERS_URL + imageId}`} className="w-full h-full object-cover" alt="text"/>
                </div>
                <h4 className="mt-2 text-sm font-medium">{text}</h4>
           </div>
        )}
        <Link to={`/restaurant/${name}`}>
        {cloudinaryImageId && (
             <div className="w-full">
            <div className="w-full overflow-hidden"> 
                <img className="w-full h-50 object-cover rounded-2xl" src={`${IMG_URL+cloudinaryImageId}`} alt="" />
            </div>
            <div>
                <h3 className="font-bold text-xl">{name}</h3>
                <div className="flex gap-4 font-medium text-md">
                    <p>{avgRating}</p>
                    <p>{sla?.slaString}</p>
                </div>
                <p>{cuisines}</p>
                <p>{locality}</p>
            </div>
        </div>)}
        </Link>
        </>
    )
}

export default Restaurantcard