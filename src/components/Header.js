import React from 'react'
import SearchBar from "./SearchBar"

const Header = () => {
  return (
    <div className="absolute w-full top-0 z-10 flex justify-between items-center bg-white border-b-2 border-[#D9D9D9] py-3 px-10">
        <div className="flex gap-4">
            <p className="text-primaryBlack">Payments</p>
            <div className="text-[#4C4C4C] flex gap-1 items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="w-[18px] h-[18px] stroke-[1.5] stroke-[#4C4C4C]">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                </svg>
                <p className="text-sm">How it works</p>
            </div>
        </div>
        <div className="w-[32.89%] mr-32">
            <SearchBar bgColor="#F2F2F2" placeholderText="Search features, tutorials, etc."/>
        </div>
        <div className="flex gap-2">
            <div className="bg-[#E6E6E6] rounded-full p-2 cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-5 h-5 fill-[#4C4C4C] stroke-[#4C4C4C]">
                  <path fill-rule="evenodd" d="M12 2.25c-2.429 0-4.817.178-7.152.521C2.87 3.061 1.5 4.795 1.5 6.741v6.018c0 1.946 1.37 3.68 3.348 3.97.877.129 1.761.234 2.652.316V21a.75.75 0 0 0 1.28.53l4.184-4.183a.39.39 0 0 1 .266-.112c2.006-.05 3.982-.22 5.922-.506 1.978-.29 3.348-2.023 3.348-3.97V6.741c0-1.947-1.37-3.68-3.348-3.97A49.145 49.145 0 0 0 12 2.25ZM8.25 8.625a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25Zm2.625 1.125a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Zm4.875-1.125a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25Z" clip-rule="evenodd" />
                </svg>
            </div>
            <div className="bg-[#E6E6E6] rounded-full w-9 h-9 p-2 flex items-center justify-center cursor-pointer">
                <img src="/dukaan-proto/images/down.png" className="w-[14px]"/>
            </div>
        </div>
    </div>
  )
}

export default Header