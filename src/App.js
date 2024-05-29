// App.js
import React, { useState, useEffect } from 'react';
import Dashboard from './Dashboard';
import data from './data.json'; // Import your data source

function App() {
  return (
    <div className=''>
      
                
      <Dashboard data={data} /> {/* Pass the data prop */}
  
      <div className='flex pl-96 relative pt-96 ml-80 -z-[2] mt-2'> <img src="b9.png" className='h-56 mb-2 mt-96 ml-96 w-[60%]'/> </div>
     
    </div>
  );
}

export default App;



