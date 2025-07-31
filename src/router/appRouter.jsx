import { createBrowserRouter } from "react-router";
import App from "../App";
import Body from "../components/Body"
import About from "../components/About";
import Contact from "../components/Contact";
import Cart from "../components/Cart"
import Menu from "../components/Menu"

const appRouter = createBrowserRouter([
{
    path : "/",
    Component : App,
    children : [
        {
            path: "/",
            Component : Body
        },
        {
            path: "/about",
            Component: About
        },
        {
            path : "/contact",
            Component: Contact
        },

        {
            path : "/cart",
            Component : Cart
        },
        {
            path : "/restaurant/:title",
            Component: Menu
        }
    ]
},

])

export default appRouter