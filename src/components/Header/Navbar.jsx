import { NavLink } from 'react-router-dom';

const Navbar = () => {



    const navlinks = <>
        <li>
            <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "font-bold text-[#0078FF]" : ""
                }
            >
                Home
            </NavLink>

        </li>

        <li>
            <NavLink
                to="/shop"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "font-bold text-[#0078FF]" : ""
                }
            >
                Shop
            </NavLink>
        </li>

        <li>
            <NavLink
                to="/about_us"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "font-bold text-[#0078FF]" : ""
                }
            >
                About Us
            </NavLink>
        </li>

    </>

    const usernav = <>
        <li>
            <NavLink
                to="/add_product"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "font-bold text-[#0078FF]" : ""
                }
            >
                Add Product
            </NavLink>

        </li>

        <li>
            <NavLink
                to="/cart"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "font-bold text-[#0078FF]" : ""
                }
            >
                My Cart
            </NavLink>
        </li>
    </>


    return (
        <div className='container mx-auto pt-5'>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className='hidden lg:flex'>
                        <ul className="flex gap-8 text-base font-semibold px-1">
                            {navlinks}
                        </ul>
                    </div>
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navlinks}
                            {usernav}
                        </ul>
                    </div>
                </div>
                <div className="navbar-center">
                    <a href='/' className=" normal-case text-xl"><img src="https://i.ibb.co/tMFSdqn/logo.png" alt='Logo' /></a>
                </div>
                <div className="navbar-end">
                    <div className='hidden lg:flex lg:mr-2'>
                        <ul className="flex gap-4 text-base font-semibold px-1">
                            {usernav}
                        </ul>
                    </div>
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </label>
                        <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-60">
                            <li><a>Username</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;