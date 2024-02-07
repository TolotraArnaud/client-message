import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className="logo">Chat test</span>
      <div className="user">
        <img src="https://images.pexels.com/photos/7675398/pexels-photo-7675398.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
        <span>Jean</span>
        <button className='btn'>Logout</button>
      </div>
    </div>
  )
}

export default Navbar