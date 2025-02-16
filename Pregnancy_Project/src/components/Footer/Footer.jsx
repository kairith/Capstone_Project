import React from "react";
import { FaFacebookF, FaInstagram, FaTelegramPlane } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-blue-500 text-white py-8">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                {/* Column 1 */}
                <div>
                    <h4 className="font-bold mb-4">Browse</h4>
                    <ul className="space-y-2">
                        <li>Features products</li>
                        <li>UI Kits</li>
                        <li>Coded Templates</li>
                        <li>Wireframe Kits</li>
                        <li>Illustrations</li>
                        <li>Fonts</li>
                    </ul>
                </div>

                {/* Column 2 */}
                <div>
                    <h4 className="font-bold mb-4">Resources</h4>
                    <ul className="space-y-2">
                        <li>Presentations</li>
                        <li>Mockups</li>
                        <li>3D Assets</li>
                        <li>Icon sets</li>
                        <li>Themes @ Templates</li>
                    </ul>
                </div>

                {/* Column 3 */}
                <div>
                    <h4 className="font-bold mb-4">Membership</h4>
                    <ul className="space-y-2">
                        <li>All-Access Pass</li>
                        <li>UI8 Design Studio</li>
                        <li>Become an author</li>
                        <li>Affiliate program</li>
                        <li>Term & Licensing</li>
                    </ul>
                </div>

                {/* Column 4 */}
                <div>
                    <h4 className="font-bold mb-4">Support</h4>
                    <ul className="space-y-2">
                        <li>All-Access Pass</li>
                        <li>UI8 Design Studio</li>
                        <li>Become an author</li>
                        <li>Affiliate program</li>
                        <li>Term & Licensing</li>
                    </ul>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="border-t border-white mt-6 pt-4">
                <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
                    <p className="text-sm text-center">
                        © 2024 - 2025 Kore Group Inc. All rights reserved.
                    </p>
                    <div className="flex space-x-4">
                        <a href="#" className="bg-white p-2 rounded-full shadow-sm hover:shadow-white">
                            <FaFacebookF className="text-blue-500" />
                        </a>
                        <a href="#" className="bg-white p-2 rounded-full shadow-sm hover:shadow-white">
                            <FaInstagram className="text-pink-500" />
                        </a>
                        <a href="#" className="bg-white p-2 rounded-full shadow-sm hover:shadow-white">
                            <FaTelegramPlane className="text-blue-500" />
                        </a>
                    </div>
                </div>
            </div>

        </footer>
    );
};

export default Footer;
