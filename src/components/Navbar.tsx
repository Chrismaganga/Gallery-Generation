import { NAV_ITEMS } from '@/lib/constants';
import React from 'react';
import { Link } from 'react-router-dom';


const Navbar: React.FC = () => {
    return (
        <nav className="bg-blue-800 p-4 m-5 ">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white text-lg font-bold bg-slate-200">Video & Images Generation</div>
                <div className="hidden md:flex space-x-4">
                    {NAV_ITEMS.map((item) => (
                        <Link
                            key={item.name}
                            to={item.path}
                            className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
                <div className="md:hidden">
                    <button className="text-gray-300 hover:text-white focus:outline-none focus:text-white">
                        <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;