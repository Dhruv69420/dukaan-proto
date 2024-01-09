import React from 'react'
import SearchBar from "./SearchBar"

const Header = () => {
  return (
    <div className="absolute w-full top-0 z-10 flex justify-between items-center bg-white border-b-2 border-[#D9D9D9] py-3 px-8 xl:px-10">
        <div className="flex gap-4">
            <p className="text-primaryBlack cursor-default">Payments</p>
            <div className="text-[#4C4C4C] flex gap-1 items-center cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-[18px] h-[18px] stroke-[1.5] stroke-[#4C4C4C]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                </svg>
                <p className="text-sm">How it works</p>
            </div>
        </div>
        <div className="w-[32.89%] mr-32">
            <SearchBar bgColor="#F2F2F2" placeholderText="Search features, tutorials, etc."/>
        </div>
        <div className="flex gap-2">
            <div className="bg-[#E6E6E6] flex items-center justify bg-center rounded-full w-[38px] h-[38px] cursor-pointer">
              <img src="/dukaan-proto/images/message.webp" className="object-contain w-[55%] ml-[6px]"/>
            </div>
            <div className="bg-[#E6E6E6] rounded-full w-[38px] h-[38px] p-2 flex items-center justify-center cursor-pointer">
                <img src="/dukaan-proto/images/down.png" className="w-[12px]"/>
            </div>
        </div>
    </div>
  )
}

export default Header