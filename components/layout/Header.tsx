"use client";
import { FiSearch } from "react-icons/fi";
import { IoPeopleOutline } from "react-icons/io5";
import { LiaHotelSolid } from "react-icons/lia";
import { MdOutlineCalendarMonth } from "react-icons/md";

export default function Header() {
  return (
    <header className="w-full border-b bg-white">
      {/* Top Alert Bar */}
      <div className="bg-[#1C9E73] text-white text-sm py-2 flex justify-center items-center gap-3">
        <span className="flex items-center gap-2">
          <img src="assets/icons/plane.png" alt="" className="w-5 h-5" />
          Overseas trip? Get the latest information on travel guides
        </span>
        <button className="bg-black text-white px-3 py-1 rounded-lg text-xs">
          More info
        </button>
      </div>

      {/* Main Header */}
      <div className="max-w-8xl mx-auto px-8 py-4 flex items-center justify-between">
        {/* Left: Logo */}
        <img src="/alx-logo.png" alt="ALX Logo" className="w-14" />

        {/* Search Bar */}
        <div className="shadow-md border rounded-full flex items-center px-4 py-2 gap-4 w-[56%]">
          {/* Location */}
          <div className="flex flex-col">
            <span className="text-xs text-gray-500">Location</span>
            <input
              placeholder="Search for destination"
              className="text-sm outline-none"
            />
          </div>

          <span className="h-6 w-[1px] bg-gray-300"></span>

          {/* Check in */}
          <div className="flex flex-col">
            <span className="text-xs text-gray-500">Check in</span>
            <input
              placeholder="Add date"
              className="text-sm outline-none"
            />
          </div>

          <span className="h-6 w-[1px] bg-gray-300"></span>

          {/* Check out */}
          <div className="flex flex-col">
            <span className="text-xs text-gray-500">Check out</span>
            <input
              placeholder="Add date"
              className="text-sm outline-none"
            />
          </div>

          <span className="h-6 w-[1px] bg-gray-300"></span>

          {/* People */}
          <div className="flex flex-col">
            <span className="text-xs text-gray-500">People</span>
            <input
              placeholder="Add guest"
              className="text-sm outline-none"
            />
          </div>

          {/* Search Icon Button */}
         <button
  className="bg-[#FFD65C] p-2 rounded-full"
  aria-label="Search"
>
  <FiSearch className="text-black text-xl" />
</button>

        </div>

        {/* Right: Buttons */}
        <div className="flex gap-3">
          <button className="px-5 py-2 border  rounded-full bg-[#1C9E73] text-white  hover:bg-gray-800">
            Sign in
          </button>
          <button className="px-5 py-2  rounded-full bg-white  border    text-black">
            Sign up
          </button>
        </div>
      </div>

      {/* Categories Nav */}
      <div className="border-t">
        <div className="max-w-7xl mx-auto px-6 py-4 flex gap-10 overflow-x-auto">

          {/* Example icons (replace with your own icon set) */}
          <div className="flex flex-col items-center cursor-pointer hover:text-black text-gray-500">
            <LiaHotelSolid className="text-2xl" />
            <span className="text-sm">Rooms</span>
          </div>

          <div className="flex flex-col items-center cursor-pointer hover:text-black text-gray-500">
            <img src="assets/icons/mansion.png" alt="Mansion icon" className="w-6 h-6" />
            <span className="text-sm">Mansion</span>
          </div>

          <div className="flex flex-col items-center cursor-pointer text-black border-b-2 border-black pb-1">
            <img src="assets/icons/villa.png" alt="Villa icon"className="w-6 h-6" />
            <span className="text-sm">Villa</span>
          </div>

          <div className="flex flex-col items-center cursor-pointer hover:text-black text-gray-500">
            <img src="assets/icons/countryside.png" alt="Countryside icon" className="w-6 h-6" />
            <span className="text-sm">Countryside</span>
          </div>

          <div className="flex flex-col items-center cursor-pointer hover:text-black text-gray-500">
            <img src="assets/icons/tropical.png"  alt="Tropical icon" className="w-6 h-6" />
            <span className="text-sm">Tropical</span>
          </div>

        </div>
      </div>
    </header>
  );
}
