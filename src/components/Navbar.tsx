import React, { useState } from "react";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);

    return (
        <div className="w-screen h-auto bg-white fixed drop-shadow-lg top-0 z-10">
            <div className="flex items-center justify-between p-5">
                <div className="flex items-center">
                    <h1 className="text-3xl font-bold mr-4 sm:text-4xl">
                        DocSpot
                    </h1>
                    <ul className="hidden md:flex">
                        <li>Home</li>
                        <li>About</li>
                        <li>Support</li>
                        <li>Platforms</li>
                        <li>Pricing</li>
                    </ul>
                </div>
                <div>
                    <div className="hidden md:flex pr-4">
                        <button className="border-none bg-transparent text-black mr-4">
                            Sign In
                        </button>
                        <button className="px-8 py-3">Register</button>
                    </div>
                    <div className="md:hidden" onClick={handleClick}>
                        {!nav ? (
                            <Bars3Icon className="w-5" />
                        ) : (
                            <XMarkIcon className="w-5" />
                        )}
                    </div>
                </div>
            </div>
            <ul className={!nav ? "hidden" : "absolute bg-zinc-200 w-full"}>
                <li className="border-b-2 border-zinc-300 w-full">Home</li>
                <li className="border-b-2 border-zinc-300 w-full">About</li>
                <li className="border-b-2 border-zinc-300 w-full">Support</li>
                <li className="border-b-2 border-zinc-300 w-full">Platforms</li>
                <li className="border-b-2 border-zinc-300 w-full">Pricing</li>
                <div className="flex flex-col my-4">
                    <button className="bg-transparent text-indigo-600 px-8 py-3 mb-4">
                        Sign In
                    </button>
                    <button className="px-8 py-3">Register</button>
                </div>
            </ul>
        </div>
    );
};

export default Navbar;
