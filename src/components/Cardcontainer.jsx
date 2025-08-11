import Restaurantcard from "./Restaurantcard"
import { useState, useEffect, useRef} from "react";
import { API_URL } from "../constants";
import Shimmer from "./shimmer";

const Cardcontainer = () => {
    // const [count, setcount]= useState(1)
    const [restaurantData, setRestaurantData] = useState([])
    const [searchText, setSearchText] = useState("")
    const [filteredData, setFilteredData] = useState([])
    const [imageData, setImageData] = useState([])
    const scrollRef = useRef(null)
    const [isloading, setIsLoading] = useState(true)

    const scroll = (direction) =>{
        if(scrollRef.current){
                  const scrollAmount = direction === "left" ? -400 : 300;
                  scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
        }
    }
    // const resData=[
    //     {
    //         title:"Mcdonalds",
    //         rating:4.5,
    //         deliveryTime:"15-20 min",
    //         cuisines:"Burgers, Beverages, Cafe",
    //         location:"Bhandup west",
    //         img : "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/5/22/7d75687b-e820-4d04-95c7-010ae56cb94a_32399.JPG"
    //     },
    //     {
    //         title:"cafe coffee day",
    //         rating:3.5,
    //         deliveryTime:"40-45 min",
    //         cuisines:"coffee, Cafe, Beverages",
    //         location:"Bandra",
    //         img : "https://i.pinimg.com/736x/78/f1/a4/78f1a4a67e5f5db909d8ab4bb117302a.jpg"
    //     },
    //     {
    //         title:"Pizza Hut",
    //         rating:3,
    //         deliveryTime:"20-25 min",
    //         cuisines:"Pizza, Beverages",
    //         location:"Powai",
    //         img : "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/6/9/a1e023e4-bdf3-4bcb-b4d9-2498ba52528e_1003414.JPG"
    //     },
    //     {
    //         title:"WOW momos",
    //         rating:4,
    //         deliveryTime:"30-35 min",
    //         cuisines:"momos",
    //         location:"Sion west",
    //         img:"https://i.pinimg.com/736x/8a/a7/e1/8aa7e1031ee43685b9a7d8de1568c583.jpg"
    //     },
    //     {
    //         title:"Monginis",
    //         rating:4.5,
    //         deliveryTime:"25-30 min",
    //         cuisines:"Cake, cookies",
    //         location:"Ghatkopar",
    //         img:"https://i.pinimg.com/736x/18/2e/f4/182ef49204fa76d6f1b8faf395c92ac2.jpg"
    //     },
    //     {
    //         title:"Domino's",
    //         rating:4,
    //         deliveryTime:"15-20 min",
    //         cuisines:"pizza, Beverages, Cafe",
    //         location:"Kanjur",
    //         img:"https://i.pinimg.com/736x/9c/fb/ff/9cfbffd2fccf09cde0af5d066af30a35.jpg"
    //     },
    //     {
    //         title:"Chinese",
    //         rating:4.5,
    //         deliveryTime:"25-30 min",
    //         cuisines:"noodles, rice, beverages",
    //         location:"Vikroli",
    //         img:"https://i.pinimg.com/736x/3f/81/67/3f8167ad09086397c9afcc2608e8edd3.jpg"
    //     },
    //     {
    //         title:"Belgian waffle",
    //         rating:4.5,
    //         deliveryTime:"25-30 min",
    //         cuisines:"waffels, ice-cream",
    //         location:"Thane",
    //         img:"https://i.pinimg.com/736x/74/d5/29/74d529960f0a094ded769c6f77e37877.jpg"
    //     },


    // ];  


    const getData = async() =>{
        try{
            const data = await fetch(API_URL);
            const json = await data.json();
            console.log("json",json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            setFilteredData(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
            setRestaurantData(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        }
        catch(err){
            console.log("err",err)
        }
        finally{
            setIsLoading(false)
        }
    }

    const carousalData = async() =>{
        try{
            const data = await fetch(API_URL);
            const json = await data.json();
            console.log("json",json?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info);
            setImageData(json?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info)
        }
        catch(err){
            console.log("err",err)
        }
    }



    const handleSearch = () =>{
        const newArray = restaurantData?.filter(restaurant => restaurant?.info?.name.toLowerCase().includes(searchText))
        console.log("newArray",newArray);
        setFilteredData(newArray)
    }

    useEffect(()=>{
        getData(), carousalData()
    }, []);


    if(isloading){
        return(
            <div className="p-3 grid grid-cols-4 container mx-auto max-w-[1200px] gap-15">
                {new Array(20).fill(0).map((item,index)=>{
                    return <Shimmer key={index}/>
                })}
            </div>
        )
    }

    return(
        <>
            <div>
                <input type="text"  onChange={(e) => setSearchText(e.target.value.toLowerCase().trim())} className=" w-full max-w-[400px] bg-gray-200 border border-gray-300 hover:border-black rounded-xl p-1 mx-3" placeholder=" Enter name of the restaurant"/>
                <button onClick={handleSearch} className="p-2 rounded-3xl bg-gray-200 mx-2"> 🔍 </button>
            </div>
            <div className="relative container mx-auto">
        <button onClick={() => scroll("left")} className="absolute left-11/12 transform -translate-y-1/2 bg-white p-2 shadow rounded-full ">
          ⬅️
        </button>


            <div  ref = {scrollRef} className="overflow-hidden whitespace-nowrap flex gap-6 w-[1200px] container mx-auto ">
            {
                imageData.map((info, index) => (
                <div key={info?.id} className="inline-block">
                    <Restaurantcard 
                    {...info} />
                </div>
                ))
            }                 

            <button onClick={() => scroll("right")} className="absolute right-0 -top-0 transform -translate-y-1/2 bg-white p-2 shadow rounded-full z-10 no-scrollbar">
                ➡️
        </button>
      </div>
      </div>

         { filteredData && <div className="p-3 grid grid-cols-4 container mx-auto max-w-[1200px] gap-15"> 
        {filteredData.map((restaurant,index) => {
            return (
                <Restaurantcard
                // title={restaurant?.info?.name}
                // rating={restaurant?.info?.avgRating}
                // deliveryTime={restaurant?.info?.sla?.slaString}
                // cuisines={restaurant?.info?.cuisines?.join(", ")}
                // location={restaurant?.info?.locality}
                // imgId={restaurant?.info?.cloudinaryImageId}
                key={restaurant?.info?.id}
                {...restaurant?.info}
                />
            )
        })} 
        </div> }
        </>
    )
}

export default Cardcontainer