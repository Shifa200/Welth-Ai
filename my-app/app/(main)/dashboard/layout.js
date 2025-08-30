import React from 'react';
import DashboardPage from './page';
import { BarLoader }  from "react-spinners";
import { Suspense } from "react";


const DashboardLayout = () => {
  return (
    <div className="px-5">
        <h1 className='text-6xl font-bold bg-gradient-to-r from-blue-500 to-purple-400 bg-clip-text text-transparent mb-5'>Dashboard</h1>
    

    {/* Dashboard Page */}
    <Suspense
     fallback={<BarLoader className='mt-4' width={"100%"} color='#9333ea' />}
     >
          <DashboardPage/>
    </Suspense>
   
    </div>
  )
};

export default DashboardLayout;