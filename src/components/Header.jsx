import { Link } from "react-router"

const Header = () =>{
    return(
        <div className="flex justify-between p-2 pr-10 pl-5 shadow-xl bg-yellow-300 items-center">
            <div><img src="src/assets/logo.png" alt="logo" className="size-12 rounded-b-full"/></div>
            <div className="flex gap-8 font-semibold">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/cart">Cart</Link>
            </div>
        </div>
    )
}


export default Header
