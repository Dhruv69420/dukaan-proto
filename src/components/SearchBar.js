import React from 'react'

const SearchBar = (props) => {
  return (
    <div className="w-full bg-[#F2F2F2] text-[#808080] flex items-center gap-2 px-3 py-2 rounded-md" style={{ backgroundColor:props.bgColor || "white", border: props.border || "none"}}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-5 h-5 stroke-[2] stroke-[#808080]">
          <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
        </svg>
        <input placeholder={ props.placeholderText } className="w-full focus:outline-none" style={{ backgroundColor: props.bgColor }}>
        </input>                    
    </div>
  )
}

export default SearchBar