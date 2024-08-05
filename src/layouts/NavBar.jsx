
import { logo } from "../assets";
import { Search } from "lucide-react";

const NavBar = () => {
    return (
        <nav className="flex justify-between bg-green-700 items-center">
            <img className="w-[150px]" src={logo} alt="Logo" />
            <div className="flex justify-center items-center">
            <div className="flex justify-center items-center">
                <Search />
                <input type="search" placeholder="Want to learn?" className="h-[30px] w-[150px] border-none outline-none px-4 rounded-[5px]" />
            </div>
            <ul className="ml-14 flex justify-center items-center">
                <li><a href="">HI Let's build Rydon together </a></li>
            </ul>
            </div>

            <div className="flex justify-center items-center">
                <a href=""></a>
                <a href=""></a>
            </div>
        </nav>
    )
}

export default NavBar;