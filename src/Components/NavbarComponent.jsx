import React from "react";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineSearch, AiOutlineClose, AiFillTag } from 'react-icons/ai';
import { BsFillCartFill, BsFillSaveFill } from "react-icons/bs"
import { TbTruckDelivery } from "react-icons/tb"
import { FaUserFriends, FaWallet } from "react-icons/fa"
import { MdFavorite, MdHelp } from "react-icons/md"
import { Router, Route, Link, hashHistory } from 'react-router-dom'

function NavbarComponent() {

    const [nav, setNav] = useState(false);

    return (
        <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4">
            <div className="flex items-center">
                <div onClick={() => setNav(!nav)} className="cursor-pointer">
                    <AiOutlineMenu size={30} />
                </div>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2">
                    <span className="font-bold">LIHO</span>
                </h1>
                <div className="hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]">
                    <p className="bg-black text-white rounded-full p-2">Delivery</p>
                    <p className="p-2">Pickup</p>
                </div>
            </div>

            {/* Search Input */}
            <div className="bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]">
                <AiOutlineSearch size={25} />
                <input
                    className="bg-transparent p-2 w-full focus:outline:none"
                />
            </div>

            {/* Cart Button */}
            <button
                className="bg-black text-white md:flex hidden item-center px-4 py-2 rounded-full">
                <BsFillCartFill size={20} className="mr-2" />
                Cart
            </button>

            {/* Mobile Menu */}
            {/* OverLay */}
            {nav ? <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div> : ''}

            <div className={nav ? 'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300' : 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300'}>
                <AiOutlineClose
                    size={30} onClick={() => { setNav(!nav) }} className="absolute right-4 top-4 cursor-pointer" />
                <h2 className="text-2xl p-4">
                    LIHO <span>Shop</span>
                </h2>
                <nav>
                    <ul className="flex flex-col p-4 text-gray-800">
                        <li className="text-x1 py-4 flex"><TbTruckDelivery className="mr-4" size={25} /><Link to="/">Orders</Link></li>
                        <li className="text-x1 py-4 flex"><MdFavorite className="mr-4" size={25} /><Link to="/favourites">Favourites</Link></li>
                        <li className="text-x1 py-4 flex"><FaWallet className="mr-4" size={25} />Wallet</li>
                        <li className="text-x1 py-4 flex"><MdHelp className="mr-4" size={25} />Help</li>
                        <li className="text-x1 py-4 flex"><AiFillTag className="mr-4" size={25} />Promotions</li>
                        <li className="text-x1 py-4 flex"><BsFillSaveFill className="mr-4" size={25} />Best One</li>
                        <li className="text-x1 py-4 flex"><FaUserFriends className="mr-4" size={25} />Invite a Friend</li>
                    </ul>
                </nav>
            </div>

        </div>
    )
}

export default NavbarComponent