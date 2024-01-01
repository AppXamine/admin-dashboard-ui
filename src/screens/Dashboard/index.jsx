import { useState } from "react";
import Pricing from "../../component/Pricing";
import { storage, ref, uploadBytesResumable, getDownloadURL } from "../../config/Firebase/index.js"
import { CardPrimary, CardSecondary } from "../../component/Cards/index.jsx";
import Navbar from "../../component/Navbar/index.jsx";
import VerticalChart from "../../component/Chart/index.jsx";


function Dashboard() {

  return (
    <>


   
      <div className="w-full h-[100vh]">
        <Navbar />
        <div className="w-full h-auto  max-w-[1200px] mr-auto ml-auto mt-[40px]">
          <h1 className="font-semibold text-[#344767] text-[2.2em] ml-[10px]  tracking-[-0.025em]">General Statistics</h1>
        </div>
        {/* <div className="w-full h-auto flex-wrap p-[10px] flex  max-w-[1200px] mr-auto ml-auto mt-[40px]">
          <CardPrimary />
          <CardPrimary />
          <CardPrimary />
          <CardPrimary />
          <CardPrimary />
          <CardPrimary />
          <CardPrimary />
          <CardPrimary />
        </div> */}

        {/* <div className="w-full h-auto flex-wrap p-[10px] flex  max-w-[1200px] mr-auto ml-auto mt-[40px]">
          <CardSecondary />
        </div> */}


          {/* <div className="w-full max-w-[500px] text-center pt-[10px]  pb-[10px] h-auto rounded-[10px] bg-[#fff]  ml-[50px]" style={{ boxShadow: "1px 1px .4rem #d3d3d3" }}>

            <div className="w-[400px] h-[200px] mb-[20px] rounded-[10px] ml-[50px] bg-gradient-to-r from-[#141727] to-[#3a416f]">
              <VerticalChart />
            </div>
            <div className="w-full max-w-[400px] m-auto h-auto text-left mt-[10px]">
              <h1 className="font-semibold text-[#344767] text-[1.2em] ml-[10px]  tracking-[-0.025em]">Active Users</h1>
              <h2 className="font-semibold text-[#344767] text-[.8em] ml-[10px]  tracking-[-0.025em]">(+23%) than last week</h2>
            </div>

            <div className="w-full max-w-[400px] m-auto h-auto flex text-left mt-[10px]">
            <div className="w-full max-w-[100px] p-[5px] h-auto ">
                <div className="flex items-center">
                  <div className="w-[20px] h-[20px] rounded-[4px] bg-gradient-to-r from-[#a36ed8] to-[#ff0080]"></div>
                  <h2 className="ml-[5px] text-[#344767] font-medium text-[.8em]">Users</h2>
                </div>
                <div className="">
                  <h1 className="text-[2em] text-[#344767] font-semibold mb-[5px]">36K</h1>
                  <ProgressBar />
                </div>
              </div> 
              <div className="w-full max-w-[100px] p-[5px] h-auto ">
                <div className="flex items-center">
                  <div className="w-[20px] h-[20px] rounded-[4px] bg-gradient-to-r from-[#a36ed8] to-[#ff0080]"></div>
                  <h2 className="ml-[5px] text-[#344767] font-medium text-[.8em]">Users</h2>
                </div>
                <div className="">
                  <h1 className="text-[2em] text-[#344767] font-semibold mb-[5px]">36K</h1>
                  <ProgressBar />
                </div>
              </div> <div className="w-full max-w-[100px] p-[5px] h-auto ">
                <div className="flex items-center">
                  <div className="w-[20px] h-[20px] rounded-[4px] bg-gradient-to-r from-[#a36ed8] to-[#ff0080]"></div>
                  <h2 className="ml-[5px] text-[#344767] font-medium text-[.8em]">Users</h2>
                </div>
                <div className="">
                  <h1 className="text-[2em] text-[#344767] font-semibold mb-[5px]">36K</h1>
                  <ProgressBar />
                </div>
              </div> <div className="w-full max-w-[100px] p-[5px] h-auto ">
                <div className="flex items-center">
                  <div className="w-[20px] h-[20px] rounded-[4px] bg-gradient-to-r from-[#a36ed8] to-[#ff0080]"></div>
                  <h2 className="ml-[5px] text-[#344767] font-medium text-[.8em]">Users</h2>
                </div>
                <div className="">
                  <h1 className="text-[2em] text-[#344767] font-semibold mb-[5px]">36K</h1>
                  <ProgressBar />
                </div>
              </div>
            
            </div>

          </div> */}

      </div>

    </>
  )
}

export default Dashboard;