const Header = () =>{
    return(
        <div className="flex justify-between p-2 pr-10 pl-5 shadow-xl bg-yellow-300 items-center">
            <div><img src="src/assets/logo.png" alt="logo" className="size-12 rounded-b-full"/></div>
            <div className="flex gap-8 font-semibold">
                <div>Home</div>
                <div>About us</div>
                <div>Contact us</div>
                <div>Cart</div>
            </div>
        </div>
    )
}


export default Header
