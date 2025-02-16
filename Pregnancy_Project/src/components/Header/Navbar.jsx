import React, { useState } from "react";
import Logo from "../../assets/Header/Logo_Kore.jpg";
import { FaUserCircle } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";

const NavbarMenu = [
    {
        id: 1,
        title: "អំពីយើងខ្ញុំ",
        path: "/",
    },
    {
        id: 2,
        title: "ការអប់រំ",
        path: "#",
        dropdown: [
            { id: 1, title: "Blog Page", path: "/blog" },
            { id: 2, title: "Video Page", path: "/videos" },
        ],
    },
    {
        id: 3,
        title: "សហគម៍",
        path: "#",
    },
    {
        id: 4,
        title: "ពិភាក្សាជាមួយ AI",
        path: "#",
    },
    {
        id: 5,
        title: "ទាក់ទងមកពួកយើង",
        path: "#",
    },
];

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);

    const toggleDropdown = (menuId) => {
        setActiveDropdown(activeDropdown === menuId ? null : menuId);
    };

    return (
        <nav className="relative z-20 bg-white shadow-md">
            <div className="container flex items-center justify-between px-6">
                {/* Logo Section */}
                <div className="w-20 h-20 lg:ml-5 flex-shrink-0">
                    <img
                        className="w-full h-full object-contain"
                        src={Logo}
                        alt="Logo-Kore"
                    />
                </div>

                {/* Tablet and Desktop Menu Section */}
                <div className="hidden lg:flex md:flex flex-grow justify-center items-center">
                    <ul className="flex items-center lg:space-x-8">
                        {NavbarMenu.map((menu) => (
                            <li key={menu.id} className="relative group">
                                <a
                                    href={menu.path}
                                    className="font-regular font-medium text-gray-800 text-lg hover:text-blue-300 transition duration-300"
                                >
                                    {menu.title}
                                </a>

                                {/* Dropdown for ការអប់រំ */}
                                {menu.dropdown && (
                                    <ul className="absolute left-1/2 transform -translate-x-1/2 mt-2 hidden group-hover:block bg-white shadow-lg rounded-lg p-2 w-40">
                                        {menu.dropdown.map((item) => (
                                            <li
                                                key={item.id}
                                                className="px-4 py-2 hover:bg-gray-100 border-b last:border-b-0 border-gray-200"
                                            >
                                                <a
                                                    href={item.path}
                                                    className="block text-gray-800 hover:text-sky-300 transition duration-100"
                                                >
                                                    {item.title}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Register Button */}
                <button className="font-bold hidden lg:flex lg:mr-5 md:flex items-center bg-blue-300 text-white px-4 py-2 rounded-lg hover:bg-sky-300 shadow-md hover:shadow-sky-300 transition duration-300">
                    <FaUserCircle className="w-5 h-5 mr-2" />
                    បង្កើតគណនី
                </button>

                {/* Mobile Hamburger Menu Section */}
                <div className="lg:hidden md:hidden">
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="text-2xl text-gray-800 hover:text-blue-300 transition duration-300"
                    >
                        {isMenuOpen ? (
                            <AiOutlineClose className="text-2xl text-gray-800" />
                        ) : (
                            <RxHamburgerMenu className="text-2xl text-gray-800" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`lg:hidden fixed top-21 right-0 rounded-lg h-full w-56 bg-white shadow-lg p-5 transform ${isMenuOpen ? "translate-x-0" : "translate-x-full"
                    } transition-transform duration-300`}
            >

                <ul className="flex flex-col space-y-4">
                    {NavbarMenu.map((menu) => (
                        <li key={menu.id} className="relative">
                            <button
                                className="text-lg text-gray-800 hover:text-blue-300 transition duration-300 flex justify-between w-full"
                                onClick={() =>
                                    menu.dropdown
                                        ? toggleDropdown(menu.id)
                                        : null
                                }
                            >
                                {menu.title}
                                {menu.dropdown && (
                                    <span className="text-gray-600">
                                        {activeDropdown === menu.id ? "-" : "+"}
                                    </span>
                                )}
                            </button>

                            {/* Dropdown for ការអប់រំ */}
                            {menu.dropdown && activeDropdown === menu.id && (
                                <ul className="mt-2 bg-gray-100 rounded-lg shadow-md p-2">
                                    {menu.dropdown.map((item) => (
                                        <li
                                            key={item.id}
                                            className="px-4 py-2 hover:bg-gray-200 rounded-md"
                                        >
                                            <a
                                                href={item.path}
                                                className="block text-gray-800 hover:text-sky-500 transition duration-200"
                                            >
                                                {item.title}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>

                {/* Register Button */}
                <button className=" flex mt-4 w-full bg-blue-300 text-white px-4 py-2 rounded-lg hover:bg-sky-300 shadow-md transition duration-300">
                    <FaUserCircle className="w-5 h-5 mr-2" />
                    បង្កើតគណនី
                </button>
            </div>

        </nav>
    );
};

export default Navbar;