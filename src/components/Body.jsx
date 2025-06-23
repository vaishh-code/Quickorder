import Searchbar from "./Searchbar"
import Filters from "./Filters"
import Cardcontainer from "./Cardcontainer"

const Body = () => {
    return(
        <div className="p-5">
            <div> 
                <Filters/>
                <Searchbar/>
            </div>
            <Cardcontainer/>
        </div>
    )
}

export default Body