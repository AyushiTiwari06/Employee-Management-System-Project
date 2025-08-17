import React from 'react'

function Header({data}) {

  const logOut = ()=>{
    localStorage.setItem("LoggedInUser",'');
    // relaod the page where LoggedInuser is empty
    window.location.reload();
  }

  return (

    <header className="w-full bg-gray-900 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Left Section - Logo/Brand */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-indigo-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
            {data.name[0]}
          </div>
          <h1 className="text-xl font-semibold text-white">My Dashboard</h1>
        </div>

        {/* Center Section - Greeting */}
        <div className="text-gray-100 text-lg font-medium">
          Hello, <span className="font-semibold text-indigo-400">{data.name}</span>
        </div>

        {/* Right Section - Profile & Logout */}
        <div className="flex items-center gap-4">
          {/* Avatar */}
          <img
            src={data.avtarUrl}
            alt="User Avatar"
            className="w-10 h-10 rounded-full border border-gray-700"
          />

          {/* Logout Button */}
          <button
          onClick={logOut}
          className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white font-medium rounded-lg shadow transition-all">
            Log out
          </button>
        </div>
      </div>
    </header>
  );
}


export default Header