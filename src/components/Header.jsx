import { Link } from "react-router";

const Header = () => {
  return (
    <div className="flex justify-between p-2 pr-10 pl-5 shadow-lg bg-green-50 items-center">
      <Link to="/">
        <img src="src/assets/logo.png" alt="logo" className="size-12 rounded-b-full" />
      </Link>
      <div className="flex gap-8 font-semibold text-[#4E4B47]">
        <Link to="/" className="hover:underline hover:text-black">Home</Link>
        <Link to="/about" className="hover:underline hover:text-black">About</Link>
        <Link to="/contact" className="hover:underline hover:text-black">Contact</Link>
        <Link to="/cart" className="hover:underline hover:text-black">Cart</Link>
      </div>
    </div>
  );
};

export default Header;
