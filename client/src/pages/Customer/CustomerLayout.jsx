import React from 'react';
import { Search, Bell,ChevronDown } from 'lucide-react';
import '../../styles/Customer/CustomerLayout.css';

const CustomerLayout = ({children}) => {
  return (
    <div className='CustomerLayout'>
      <header>
        <div className='navbar-container'>
          <div className='navbar-content'>
            <div className='navbar-wrapper'>

              <div className='logo'>
                <span className='logo-text'>< a href=''>CropCircle</a></span>
              </div>

              <div className='search-container'>
                <div className='search-wrapper'>
                  <Search className='search-icon'/>
                  <input type="text" placeholder='Search for products, customers, etc..' className='search-input'/>
                </div>
              </div>

              <div className='nav-right'>
                <button className='notification-button'>
                  <Bell className='notification-icon' />
                </button>  
                <div className='profile'>
                  <div className='profile-content'>
                    <span className='profile-text'>IA</span>
                  </div>
                  <span className='username'>Ideation Axis</span>
                  <ChevronDown className='dropdown-icon'/>
                </div>  
              </div>
            </div>
          </div>
        </div>
      </header>
      <main>
        {children}
      </main>
      <footer>
        <p>Copyright © 2020 Your Company</p>
      </footer>
      </div>
  )
}

export default CustomerLayout