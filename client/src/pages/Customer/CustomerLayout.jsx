import React, { useEffect, useRef } from 'react';
import { useState } from 'react';
import { Search, Bell,ChevronDown, ChevronUp,Home, User,ShoppingCart, HelpCircle, LogOut, UserCheck,Store, Icon} from 'lucide-react';


const CustomerLayout = ({children}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [Notification, setNotification] = useState(1);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) =>{
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)){
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);
        
  const handleNotification = () => {setNotification(prev => prev + 1)};

  const menuItems = [
    {Icon: Home, label: 'Home', href: 'homepage'},
    {Icon:ShoppingCart, label: 'Cart', href: 'Cartitems'},
    {Icon: Store, label: 'Orders', href: 'Orders'},
    {Icon: User, label: 'Profile', href: 'profile'},
    {Icon: HelpCircle, label: 'Help Center', href: 'help'},
    {Icon: LogOut, label: 'Logout', href: 'logout', className: 'text-red-600 hover:bg-red-50'},
  ];
  
  return (
    <div className='min-h-screen flex flex-col bg-gray-50'> 
      <header className='bg-white border-b border-gray-200 sticky top-0 z-50'>
        <div className='w-full bg-green-200 border-b'>
          <div className='max-w-7xl mx-auto px-0 py-2'>
            <div className='max-w-7xl max-auto sm:px-0 flex items-center justify-between'>

              {/*logo */}
              <div className='flex items-center pr-10 '>
              < a href='Homepage'><button className='flex items-center gap-2 p-2 hover:bg-green-300 rounded-lg transition-colors' href='Homepage'>
                <div className='w-10 h-10 bg-green-100 rounded-full flex items-center justify-center'>
                  <span className='text-green-700 text-2xl items-center'>CC</span>
                </div>
                  <span className='text-xl font-semibold text-gray-700 hidden sm:block'>CropCircle</span>
                </button></a>
              </div>
              {/*Search Bar */}
              <div className='flex-1 max-w-3xl mx-4 ml-auto sm:w-auto'>
                <div className='flex items-center bg-gray-50 border border-gray-300 rounded-xl p-2 w-full sm:w-auto'>
                  <input type="text" placeholder='Search for products, customers, etc..' className='w-full bg-transparent border-none p-2 text-gray-950 text-sm focus:outline-none'/>
                <button className="text-zinc-950 ml-1">
                  <Search size={20}/>
                </button>
                </div>
              </div>

              {/*Right Section of the navigation Bar*/}
              <div className='flex items-right gap-4 ml--7 mr-auto pr-8'>
                <button className='relative p-2 text-gray-600 hover:bg-green-300 rounded-s-md transition-colors'>
                  <Bell className='w-5 h-5 text-gray-700' />
                  {Notification > 0 && (
                    <span className='absolute top-0 right-0 transform translate-x-1/3 -translate-y-1/3 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center'>
                       {Notification} 
                    </span>
                  )}
                </button>  
                <button className='relative p-2 text-gray-600 hover:bg-green-300 rounded-s-md transition-colors'>
                <a href='Cartitems'><ShoppingCart className='w-5 h-5 text-gray-700' />
                  {Notification > 0 && (
                    <span className='absolute top-0 right-0 transform translate-x-1/3 -translate-y-1/3 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center'>
                       {Notification} 
                    </span>
                  )}</a> 
                </button> 
                {/* User Menu*/}  
                <div className='relative' ref={dropdownRef}>
                  <button onClick={() => setIsOpen(!isOpen)}
                    className='flex items-center gap-2 p-2 hover:bg-green-300 rounded-lg transition-colors'
                    >
                      <div className='w-8 h-8 bg-green-100 rounded-full flex items-center justify-center'>
                        <span className='text-green-700'></span>
                        <UserCheck/>
                      </div>
                      <span className='text-gray-700 font-medium hidden sm:block' >Hi, Ideation Axis</span>
                      {isOpen ? (
                        <ChevronUp className='w-6 h-6 text-gray-700 hidden sm:block' />)
                      : (
                        <ChevronDown className='w-6 h-6 text-gray-700 hidden sm:block' />)  
                      }
                  </button>
                  {/*Dropdown Menu*/}
                  <div className={`
                    absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 transform transform-all duration-200 ease-in-out
                    ${isOpen ? 'opacity-100 scale-100': 'opacity-0 scale-95 pointer-events-none'}
                    `}
                  >
                    <div className='p-2 border-b border-gray-200'>
                      <p className='text-sm text-gray-700'>Signed in as</p>
                      <p className='text-sm font-medium text-gray-900'>User@IdeationAxis.com</p>
                    </div>
                    <div className='py-1'>
                      {menuItems.map((item,index) => (
                        <a 
                          key={index} href={item.href}
                          className={`
                            flex items-center px-4 py-2 text-sm text-gray-700
                            hover:text-green-600 transition-colors
                            ${item.className || ''}
                          `}
                        >
                          <item.Icon className='w-5 h-5 text-gray-600 mr-2' />
                          {item.label}
                        </a>
                      ))}
                    </div>                    
                  </div>
                </div>
            </div>
          </div>
          </div>
        </div>
      </header>

      <main className='flex-1'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
          {children}
        </div>        
      </main>
      
      <footer className='max-w border-t border-gray-200'>
        <div className='mx-auto'>
          <div className=' flex justify-between items-center w-full px-8 -mx-4'>
            <div>
              <h2 className='text-lg font-bold text-gray-800'> Contacts</h2>
              <p className='text-gray-600'>Phone: 123-456-7890</p>
              <p className='text-gray-600'>Email: 123@example.com</p>
            </div>
            <div>
              <h2 className='text-lg font-bold text-gray-800'>Site Links</h2>
              <ul>
                <li><a href='homepage' className='text-gray-600 hover:text-green-600'>Home</a></li>
                <li><a href='Cartitems' className='text-gray-600 hover:text-green-600'>Cart</a></li>
                <li><a href='Orders' className='text-gray-600 hover:text-green-600'>Orders</a></li> 
              </ul>
            </div>
          </div>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6'> 
            <p className='text-center text-gray-600 font-bold'>
              © {new Date().getFullYear()} CropCircle | All Rights Reserved
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CustomerLayout;