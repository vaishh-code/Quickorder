// import { img_ccd, IMG_mcd } from "../constants";
import Restaurantcard from "./Restaurantcard"

const Cardcontainer = () => {
    const resData=[
        {
            title:"Mcdonalds",
            rating:4.5,
            deliveryTime:"15-20 min",
            cuisines:"Burgers, Beverages, Cafe",
            location:"Bhandup west",
            img : "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/5/22/7d75687b-e820-4d04-95c7-010ae56cb94a_32399.JPG"
        },
        {
            title:"cafe coffee day",
            rating:3.5,
            deliveryTime:"40-45 min",
            cuisines:"coffee, Cafe, Beverages",
            location:"Bandra",
            img : "https://i.pinimg.com/736x/78/f1/a4/78f1a4a67e5f5db909d8ab4bb117302a.jpg"
        },
        {
            title:"Pizza Hut",
            rating:3,
            deliveryTime:"20-25 min",
            cuisines:"Pizza, Beverages",
            location:"Powai",
            img : "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/6/9/a1e023e4-bdf3-4bcb-b4d9-2498ba52528e_1003414.JPG"
        },
        {
            title:"WOW momos",
            rating:4,
            deliveryTime:"30-35 min",
            cuisines:"momos",
            location:"Sion west",
            img:"https://i.pinimg.com/736x/8a/a7/e1/8aa7e1031ee43685b9a7d8de1568c583.jpg"
        },
        {
            title:"Monginis",
            rating:4.5,
            deliveryTime:"25-30 min",
            cuisines:"Cake, cookies",
            location:"Ghatkopar",
            img:"https://i.pinimg.com/736x/18/2e/f4/182ef49204fa76d6f1b8faf395c92ac2.jpg"
        },
        {
            title:"Domino's",
            rating:4,
            deliveryTime:"15-20 min",
            cuisines:"pizza, Beverages, Cafe",
            location:"Kanjur",
            img:"https://i.pinimg.com/736x/9c/fb/ff/9cfbffd2fccf09cde0af5d066af30a35.jpg"
        },
        {
            title:"Chinese",
            rating:4.5,
            deliveryTime:"25-30 min",
            cuisines:"noodles, rice, beverages",
            location:"Vikroli",
            img:"https://i.pinimg.com/736x/3f/81/67/3f8167ad09086397c9afcc2608e8edd3.jpg"
        },
        {
            title:"Belgian waffle",
            rating:4.5,
            deliveryTime:"25-30 min",
            cuisines:"waffels, ice-cream",
            location:"Thane",
            img:"https://i.pinimg.com/736x/74/d5/29/74d529960f0a094ded769c6f77e37877.jpg"
        },


    ];  


    return(
        <>
        <div className="p-3 grid grid-cols-4 container mx-auto max-w-[1200px] gap-10"> 
         
        {resData.map((restaurant,index)=>{
            return (
                <Restaurantcard
                {...restaurant}
                />
            )
        })} 
        </div> 
        </>
    )
}

export default Cardcontainer