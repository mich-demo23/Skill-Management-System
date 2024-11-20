import { NavLink, Outlet } from "react-router-dom"
import { FaBars } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";


function Navbar(){

    const [toggleShow, setToggleShow] = useState('false')

    function toggle(){
        setToggleShow(prevshow => !prevshow)
    }


return(
    <>
    <nav className="relative px-3 h-14 flex justify-between items-center bg-blue-600">
        <FaBars className="text-2xl text-white hover:cursor-pointer" onClick={toggle} />
        <h1 className="text-3xl mr-auto ml-2 font-mono ">SKIILER</h1>
        <div className="relative flex">
            <input type="search" placeholder='Search skill' className="h-10 p-2 rounded-md focus:ring-2 focus:ring-blue-600 outline-none text-gray-500 placeholder:font-bold placeholder:text-gray-500" />
             <FaSearch className="absolute right-2 text-2xl top-2 "/>
        </div>
        {toggleShow && <nav className="absolute font-mono flex flex-col top-14 left-0 bg-blue-500  w-44 rounded-md py-3 font-bold text-white *:py-2 place-items-center">
            <NavLink to="home" className={` hover:underline ${({isActive}) => isActive? "underline" : ""}`}>Dashboard</NavLink>
            <NavLink to="skills" className={` hover:underline ${({isActive}) => isActive? "underline" : ""}`}>Skill</NavLink>
            <NavLink to="user" className={` hover:underline block ${({isActive}) => isActive? "underline" : ""}`}>Employee</NavLink>
        </nav>
        }
    </nav>
    <div className="mx-auto">
        <Outlet />
    </div>
    </>
)



}

export default Navbar