
const Header = () =>{
    return(
        <div className="flex justify-between p-6 bg-amber-600">
            <div><img src="./assets/logo.png" alt="logo" /></div>
            <div className="flex gap-8">
                <div>Home</div>
                <div>About us</div>
                <div>Contact us</div>
                <div>Cart</div>
            </div>
        </div>
    )
}


export default Header
