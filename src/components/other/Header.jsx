import React from 'react'

function Header(props) {
  
  const logOut = ()=>{
    localStorage.setItem("LoggedInUser",'');
    // relaod the page where LoggedInuser is empty
    window.location.reload();
  }

  return (
    <div className="flex items-end justify-between">
        
        <h1 className="text-2xl font-medium text-white">Hello <br /> <span className='text-3xl font-semibold'>Ayushi</span></h1>
        <button onClick={logOut} className='bg-red-500 text-white px-3 py-2 rounded-sm text-lg font-medium'>Log out</button>
    </div>
  )
}

export default Header