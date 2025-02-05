import React, { useContext } from "react";
import { FaSearch } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';
import { SidebarContext } from '../../Context/PopUpContex';
import { FiShoppingCart } from "react-icons/fi";
import { BiMenu } from 'react-icons/bi';
import { HiOutlineUser } from 'react-icons/hi';
import { FiShoppingBag } from 'react-icons/fi';

const Navbar = () => {
    // const {
    //     setSearch,
    //     search,
    // } = useContext(SidebarContext);
    const hover = 'hover:text-main transitions';
    const Hover = ({ isActive }) => (isActive ? 'text-main': hover);
    return(
        <div className="bg-white shadow-md sticky top-0 z-40">
            <div className="container mx-auto py-4 px-2 gap-10 lg:grid grid-cols-7 justify-between items-center">
                <div className="col-span-1 flex-btn flex-wrap lg:pb-0 pb-4">
                    <div className="flex items-center gap-2">
                        <button
                            className="lg:hidden block text-2xl"
                        >
                            <BiMenu/>
                        </button>
                        <Link to="/">
                            <img 
                                src="/images/logoMultihogar.png"
                                alt="logo"
                                className="lg:w-full h-12 w-32 object-contain"
                            />
                        </Link> 
                    </div>
                    <div className="flex lg:hidden items-center gap-4 pr-2">
                        <NavLink
                            className={`${Hover} text-2xl`}
                        >
                            <HiOutlineUser />
                        </NavLink>
                        <button className={`text-xl relative`}>
                            {/* <div className="w-5 h-5 flex-colo rounded-full text-[10px] bg-flash text-white absolute -top-3 -right-2">
                            
                            </div> */}
                            <FiShoppingBag />
                        </button>
                    </div>
                </div>
                <div className="col-span-3">
                    <form
                        // onSubmit={(e) => submitHandler(e)}
                        className="w-full bg-dryGray rounded flex gap-4 justify-between"
                    >
                        <button
                            type="submit"
                            className="w-12 transitions hover:bg-subMain grid place-items-center flex-colo text-xs h-10 md:text-sm md:h-12 rounded bg-main text-white"
                        >
                            <FaSearch />
                        </button>
                        <input 
                            // onChange={(e) => setSearch(e.target.value)}
                            // value={search}
                            type="text"
                            placeholder="Search appliances, crockery, ..."
                            className="font-semibold text-xs md:text-sm w-11/12 bg-transparent border-none px-2 text-black"
                        />
                    </form>
                </div>   
                <div className="col-span-3 font-bold hidden xl:gap-20 justify-between lg:flex xl:justify-end items center">
                    <NavLink>
                        Tienda
                    </NavLink>
                    <NavLink>
                        Nosotros
                    </NavLink>
                    <NavLink>
                        Contacto
                    </NavLink>
                    <button className={`${hover} relative`}>
                        <FiShoppingCart className="w-6 h-6" />
                        {/* <div className="w-6 h-6 flex-colo rounded-full text-[10px] bg-flash text-white absolute -top-5 -right-3">
                            {wishlist?.length}
                        </div> */}
                    </button>
                </div>      
            </div>
        </div> 
    )
};

export default Navbar;