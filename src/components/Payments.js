import React, { useState } from 'react'
import SearchBar from "./SearchBar"
import Pagination from "./Pagination";

const Payments = () => {

  const tableData = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];  
  const [ showTimeMenu, setShowTimeMenu ] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);  
  const [ currentTimeFilter, setCurrentTimeFilter ] = useState("Last Month")

  const itemsPerPage = 19;

  const handlePageChange = (page) => {
    setCurrentPage(page);
    // Fetch or update your data for the new page here if needed
  };

  return (
    <div className="px-8 xl:px-10 relative mt-[67px]">
      <div className="w-full pt-8">
        <div className="w-full flex justify-between items-center">
          <p className="text-xl font-medium text-primaryBlack">Overview</p>
          <div onClick={()=>setShowTimeMenu(!showTimeMenu)} className="cursor-pointer w-[131px] text-[#4C4C4C] relative border-[1px] border-[#D9D9D9] rounded-md py-2 px-3 flex gap-2 items-center justify-between text-base bg-white">
            { currentTimeFilter }
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-[#4C4C4C] stroke-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg> 
            <div className={`text-[#4C4C4C] absolute w-full ${showTimeMenu ? "top-11 opacity-100" : "top-9 opacity-0"} transition-all duration-300 left-0 shadow-md bg-white rounded-md`}>
              <div id="Last Week" onClick={(e)=>setCurrentTimeFilter(e.target.id)} className="text-[#4C4C4C] text-sm border-b-[1px] border-[#d9d9d960] px-3 py-2 hover:bg-[#F2F2F2]">
                Last Week
              </div>
              <div id="Last Month" onClick={(e)=>setCurrentTimeFilter(e.target.id)} className="text-[#4C4C4C] text-sm border-b-[1px] border-[#d9d9d960] px-3 py-2 hover:bg-[#F2F2F2]">
                Last Month
              </div>
              <div id="Last Year" onClick={(e)=>setCurrentTimeFilter(e.target.id)} className="text-[#4C4C4C] text-sm border-b-[1px] border-[#d9d9d960] px-3 py-2 hover:bg-[#F2F2F2]">
                Last Year
              </div>
            </div>                       
          </div>
        </div>
        <div className="flex gap-4 pt-8">
          <div className="w-1/2 bg-white rounded-md shadow-sm px-4 py-5">
            <p className="text-base text-[#4C4C4C] font-[450]">Online orders</p>
            <p className="text-3xl text-primaryBlack font-medium mt-4">231</p>
          </div>
          <div className="w-1/2 bg-white rounded-md shadow-sm px-4 py-5">
            <p className="text-base text-[#4C4C4C] font-[450]">Amount received</p>
            <p className="text-3xl text-primaryBlack font-medium mt-4">₹23,92,312.19</p>
          </div>
        </div>
      </div>
      <div className="pt-8 sticky top-0">
        <p className="text-primaryBlack text-xl font-medium">
          Transactions | This Month
        </p>
        <div className="w-full h-full bg-white rounded-md shadow-sm p-3 mt-6 mb-10">
          <div className="flex justify-between">
            <div className="w-56">
              <SearchBar border="1px solid #D9D9D9" placeholderText="Search by order ID..."/>
            </div>
            <div className="flex gap-2">
              <div className="cursor-pointer px-3 flex items-center gap-2 text-[#4C4C4C] border-[1px] border-[#D9D9D9] rounded-md">
                <p className="text-base">
                  Sort
                </p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-[1.5] stroke-[#4C4C4C] w-4 h-4" style={{ transform: "rotateY(180deg)" }}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5" />
                </svg>
              </div>
              <div className="cursor-pointer px-2 border-[1px] border-[#D9D9D9] shadow-sm flex items-center rounded-md">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="stroke-[1.5] stroke-[#4C4C4C] w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </svg>
              </div>
            </div>
          </div>
          <table className="w-full mt-3 text-primaryBlack">
            <thead>
              <tr className="grid grid-cols-4 bg-[#F2F2F2] rounded-md p-2 text-[#4C4C4C]">
                <th className="font-medium text-start">Order ID</th>
                <th className="font-medium text-start flex items-center gap-[5px]">
                  <span>
                    Order date                    
                  </span>
                  <img src="/dukaan-proto/images/down.png" className="w-[7px] h-[5px]"/>
                </th>
                <th className="font-medium text-end">Order amount</th>
                <th className="font-medium text-end">Transaction fees</th>
              </tr>
            </thead>              
            <tbody>
              { tableData.map((item, index)=>(
                <tr key={"rowNo"+index} className="grid grid-cols-4 px-2 py-[10px] border-b-[1px] border-[#D9D9D9]">
                  <td className="text-[#146EB4] text-start font-medium">#281209</td>
                  <td className="text-start">7 July, 2023</td>
                  <td className="text-end">₹12,78.23</td>
                  <td className="text-end">₹22</td>
                </tr>
              )) }            
            </tbody>              
          </table>
          <div className="flex justify-center mt-6">
            <Pagination
              totalItems={342}
              itemsPerPage={itemsPerPage}
              onPageChange={handlePageChange}
              currentPage={currentPage}
            />
          </div>          
          <div className="w-56 mx-auto mt-3">
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Payments