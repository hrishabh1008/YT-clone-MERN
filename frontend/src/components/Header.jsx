import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { RiAccountCircleLine } from "react-icons/ri";

const Header = ({ onSearch }) => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [user, setUser] = useState(null); // Replace with your auth logic

    const handleToggleSidebar = () => setSidebarOpen((open) => !open);

    const handleSignIn = () => {
        // Replace with your sign-in logic
        setUser({ name: "Demo User", avatar: "https://i.pravatar.cc/40" });
    };

    return (
        <header className="flex items-center justify-between px-4 py-0 bg-[#212121] shadow-sm h-14 fixed top-0 left-0 right-0 z-30">
            {/* Left: Hamburger & Logo */}
            <div className="flex items-center">
                <button
                    className="p-2 rounded-full hover:bg-[#383838] focus:bg-[#383838] transition"
                    onClick={handleToggleSidebar}
                    aria-label="Toggle navigation menu"
                >
                    <AiOutlineMenu size={24} color="#fff" />
                </button>
                <a href="/" className="ml-2 flex items-center">
                    <img
                        src="https://www.gstatic.com/youtube/img/branding/youtubelogo/svg/youtubelogo_dark.svg"
                        alt="YouTube"
                        className="h-6"
                    />
                </a>
            </div>

            {/* Center: Search */}
            <form
                className="flex flex-1 max-w-2xl mx-4"
                onSubmit={(e) => {
                    e.preventDefault();
                    onSearch && onSearch(e.target.elements.q.value);
                }}
            >
                <input
                    name="q"
                    className="flex-1 border border-[#303030] bg-[#121212] text-white rounded-l-3xl px-4 py-1.5 focus:outline-none focus:border-blue-500 placeholder:text-[#aaa] text-sm"
                    placeholder="Search"
                    autoComplete="off"
                />
                <button
                    type="submit"
                    className="bg-[#222222] border border-l-0 border-[#303030] rounded-r-3xl px-5 flex items-center justify-center hover:bg-[#383838] transition"
                >
                    <svg viewBox="0 0 24 24" width={22} height={22} fill="#fff">
                        <g>
                            <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99a1 1 0 001.41-1.41l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
                        </g>
                    </svg>
                </button>
            </form>

            {/* Right: Dots, User/Sign-in */}
            <div className="flex items-center space-x-2">
                <button className="p-2 rounded-full hover:bg-[#383838] focus:bg-[#383838] transition">
                    <BiDotsVerticalRounded size={24} color="#fff" />
                </button>
                {user ? (
                    <img
                        src={user.avatar}
                        alt="avatar"
                        className="w-8 h-8 rounded-full"
                    />
                ) : (
                    <button
                        onClick={handleSignIn}
                        className="flex items-center space-x-2 px-3 py-1.5 border border-[#3ea6ff] text-[#3ea6ff] rounded-3xl hover:bg-[#263850] transition"
                    >
                        <RiAccountCircleLine size={20} />
                        <span className="text-sm font-medium">Sign in</span>
                    </button>
                )}
            </div>
            {/* Sidebar (for demonstration) */}
            {sidebarOpen && (
                <div className="fixed top-14 left-0 w-64 h-full bg-[#212121] shadow-lg z-40 border-r border-[#303030]">
                    <div className="p-4 font-bold text-white">Sidebar Menu</div>
                </div>
            )}
        </header>
    );
};

export default Header;
