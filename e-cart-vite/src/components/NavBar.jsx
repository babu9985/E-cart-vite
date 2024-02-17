import React from 'react'

const NavBar = () => {
  return (
    <div className='navsection'>
      <div className="title">
        <h2>E-Mart</h2>
      </div>
      <div className="search">
        <input type="text" placeholder='search' />
      </div>
      <div className="user">
        <div className="userdetail">Sign In/Sign Up</div>
        <div className="cart">Cart</div>
      </div>
    </div>
  )
}

export default NavBar
