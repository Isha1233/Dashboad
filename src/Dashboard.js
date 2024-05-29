import React, { useState, useEffect } from 'react';
import { BsGraphUpArrow } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineDollar } from "react-icons/ai";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { AiOutlineLineChart } from "react-icons/ai";

const Dashboard = ({ data }) => {
  const [visibleData, setVisibleData] = useState([]);
  const [scrollPosition, setScrollPosition] = useState(0);
  useEffect(() => {
    console.log("Data received:", data); // Check if data is received
    if (data && data.length > 0) {
      // Display first ten rows initially
      setVisibleData(data.slice(0, 10));
    }
  }, [data]);
  
  const handleScroll = (event) => {
    const { scrollTop, clientHeight, scrollHeight } = event.currentTarget;
    if (scrollHeight - scrollTop === clientHeight && data) {
      // Calculate the index to slice the next batch of data
      const endIndex = Math.min(visibleData.length + 10, data.length);
      const nextData = data.slice(0, endIndex);
      setVisibleData(nextData);
      setScrollPosition(scrollTop);
    }
  };
  

  return (
    <div className='absolute mx-44 pt-10'>
       
      <div className='py-10 px-96  text-center'>
        <h1 className="rounded-md about-title text-4xl text-center italic font-bold p-2 mb-8 mt-[100px] bg-gradient-to-r from-gray-100 hover:bg-sky-500 transition-colors duration-300">LeaderBoards</h1>
      </div>
     
      <div className="container mx-auto p-4 " style={{ maxHeight: '500px', overflowY: 'auto' }} onScroll={handleScroll}>
        <div className="">
          <h1 className="flex text-2xl font-bold mb-4 p-4 bg-blue-200 rounded-t-md">Basic Backtest <img src="/b4.png" className='w-16 '/></h1>
          <div className=" overflow-y-auto h-96">
            <table className=" min-w-full bg-white ">
            <thead className='bg-blue-200  text-gray-900 sticky top-0'>
  <tr>
    <th className="py-3 px-4 bg-blue-200">
      <div className="flex items-center">
        <BsGraphUpArrow className="text-yellow-500 text-xl font-bold" /> Rank
      </div>
    </th>
    <th className="py-2 px-4 bg-blue-200">
      <div className="flex items-center">
        <AiOutlineUser className="text-yellow-600 text-xl" /> Name
      </div>
    </th>
    <th className="py-2 px-4 bg-blue-200">
      <div className="flex items-center">
        <RiMoneyDollarCircleFill className="text-yellow-600 text-xl" /> Calmar Ratio
      </div>
    </th>
    <th className="py-2 px-4 bg-blue-200">
      <div className="flex items-center">
        <AiOutlineDollar className="text-yellow-600 text-xl" /> Overall Profit
      </div>
    </th>
    <th className="py-2 px-4 bg-blue-200">
      <div className="flex items-center">
        <AiOutlineDollar className="text-yellow-600 text-xl" /> Avg. Daily Profit
      </div>
    </th>
    <th className="py-2 px-4 bg-blue-200">
      <div className="flex items-center">
        <AiOutlineLineChart className="text-yellow-600 text-xl" /> Win % (Day)
      </div>
    </th>
    <th className="py-2 px-4 bg-blue-200">
      <div className="flex items-center">
        <AiOutlineDollar className="text-yellow-600 text-xl" /> Price (Rs)
      </div>
    </th>
    <th className="py-2 px-4 bg-blue-200">
      <div className="flex items-center">
        <AiOutlineLineChart className="text-yellow-600 text-xl" /> Action
      </div>
    </th>
  </tr>
</thead>

              <tbody >
              {visibleData.map((item, index) => (
  <tr key={index} className={index % 2 === 0 ? "bg-gray-700 text-white border-b gap-y-4" : "bg-white border-b gap-y-4"} style={{ marginBottom: '0.5rem' }}>
    <td className="py-2 px-4">{item.Rank}</td>
    <td className="py-2 px-4">{item.Name}</td>
    <td className="flex gap-1 py-2 px-4"><BsGraphUpArrow className="text-green-500 font-extrabold text-2xl" />{item["Calmar Ratio"]}</td>
    <td className="py-2 px-4">{item["Overall Profit"]}</td>
    <td className="py-2 px-4">{item["Avg. Daily Profit"]}</td>
    <td className="py-2 px-4">{item["Win % (Day)"]}</td>
    <td className="py-2 px-4">{item["Price (Rs)"]}</td>
    <td className="py-2 px-4">
      <button className="bg-blue-500 text-white py-1 px-3 rounded">View</button>
    </td>
  </tr>
))}

              </tbody>
            </table>
          </div>
        </div>
      </div>
   
    </div>
  );
};

export default Dashboard;
