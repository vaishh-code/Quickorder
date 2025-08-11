const MenuContainer = ({name, avgRating, cuisines, locality, totalRatingsString})=>{
    return(
        <>
        <div className="w-10/12 max-w-4xl mx-auto text-2xl p-2">
            <h2 className="text-2xl font-bold">{name}</h2>
        </div>

        <div className="w-3xl m-auto container shadow-2xl p-8 rounded-xl">

            <div className="flex gap-3 pt-1">
                <p className="font-semibold rounded-md">⭐{avgRating}</p>
                <p className="font-semibold">({totalRatingsString})</p>
            </div>
            <p className="font-medium text-md pt-4">{cuisines}</p>
            <p className="text-gray-700 text-sm pt-4 ">{locality}</p> 
        </div>
        </>
    )
}
export default MenuContainer