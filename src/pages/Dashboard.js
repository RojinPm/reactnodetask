import { useEffect, useState } from 'react';
import { FaBell, FaCog, FaEnvelope, FaFileInvoice, FaFileUpload, FaSearch, FaSignOutAlt, FaUser } from 'react-icons/fa';
import { FaRegBell } from "react-icons/fa6";
import { HiMenuAlt3, HiViewGrid } from 'react-icons/hi';
import { RxAvatar } from "react-icons/rx";
import { Link } from 'react-router-dom';
import LogoImg from '../assets/images/Logo.png';
import ContentSection from '../components/content';
const Dashboard = () => {

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
      if (window.innerWidth >= 1024) {
        setSidebarOpen(true);
      } else {
        setSidebarOpen(false);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

 
 

  return (
    <div className="flex h-screen overflow-x-hidden">
      
    <div
      className={`bg-gray-900 text-white shadow-md flex flex-col justify-between ${
        sidebarOpen ? 'w-72' : 'w-0'
      } duration-300 fixed z-10 h-screen`}
    >
      <div className={`px-4 ${sidebarOpen ? 'block' : 'hidden'}`}>
       
        <div className="flex items-center justify-between py-6">
          <Link to='/' className="flex items-center">
            <img src={LogoImg} alt="Logo" className="w-full ml-5 h-16" />
           
          </Link>
          <HiMenuAlt3 className="cursor-pointer lg:hidden text-white" onClick={() => setSidebarOpen(!sidebarOpen)} />
        </div>

       
        <nav>
      <div className="space-y-8">

        <div>
          <h2 className="text-xs font-light text-white mb-4 uppercase">Main</h2>
          <ul className="space-y-2">
            <li>
              <Link to="#" className="flex items-center px-4 py-1 rounded-md">
                <HiViewGrid className="w-6 h-6 text-white" />
                <span className="ml-4 font-extralight text-sm text-white">Dashboard</span>
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-xs font-light text-white mb-4 uppercase">manage</h2>
          <ul className="space-y-2">
            <li>
              <Link to="#" className="flex items-center px-4 py- rounded-md">
                <FaFileUpload className="w-3 h-3 text-white" />
                <span className="ml-4 text-sm font-medium text-white">Inbox</span>
              </Link>
            </li>
            <li>
              <Link to="#" className="flex items-center px-4 py- rounded-md">
                <FaFileInvoice className="w-3 h-6 text-white" />
                <span className="ml-4 text-sm font-medium text-white">Channels</span>
              </Link>
            </li>
            <li>
              <Link to="#" className="flex items-center px-4 py- rounded-md">
                <FaFileInvoice className="w-3 h-6 text-white" />
                <span className="ml-4 text-sm font-medium text-white">Business Profile</span>
              </Link>
            </li>
            <li>
              <Link to="#" className="flex items-center px-4 py- rounded-md">
                <FaFileInvoice className="w-3 h-6 text-white" />
                <span className="ml-4 text-sm font-medium text-white">Insights</span>
              </Link>
            </li>
          </ul>
        </div>

        
        <div>
          <h2 className="text-xs font-medium text-white mb-4 uppercase">Settings</h2>
          <ul className="space-y-2">
            <li>
              <Link to="#" className="flex items-center px-4 py- rounded-md">
                <FaBell className="w-3 h-6 text-white" />
                <span className="ml-4 text-sm font-medium text-white">Create Roles</span>
              </Link>
            </li>
            <li>
              <Link to="#" className="flex items-center px-4 py- rounded-md">
                <FaCog className="w-3 h-6 text-white" />
                <span className="ml-4 text-sm font-medium text-white">Create Users</span>
              </Link>
            </li>
            <li>
              <Link to="#" className="flex items-center px-4 py- rounded-md">
                <FaCog className="w-3 h-6 text-white" />
                <span className="ml-4 text-sm font-medium text-white">Settings</span>
              </Link>
            </li>
          </ul>
        </div>


       

<div>
 
  <ul className="space-y-2">
    <li>
      <Link to="#" className="flex items-center px-4 py-1 rounded-md">
        <FaUser className="w-4 h-4 text-white" />
        <span className="ml-4 text-sm font-medium text-white">Profile</span>
      </Link>
    </li>
    <li>
      <Link to="#" className="flex items-center px-4 py-1 rounded-md">
        <FaSignOutAlt className="w-4 h-4 text-white" />
        <span className="ml-4 text-sm font-medium text-white">Logout</span>
      </Link>
    </li>
  </ul>
</div>


      </div>
    </nav>



      </div>
    </div>

    
    <div className={`flex-1 flex flex-col ${sidebarOpen ? 'ml-72' : ''}`}>
      
    <div className="gradientBackground shadow-sm shadow-gray-700 flex justify-between items-center p-4 lg:px-8">
          <div className="flex items-center">
            {isMobile && (
              <HiMenuAlt3 className="cursor-pointer h-6 w-6 mr-3 text-white" onClick={() => setSidebarOpen(!sidebarOpen)} />
            )}
            <div className="flex items-center space-x-2">
            <RxAvatar className='h-10 w-10 p-2 border-2 border-red-500 rounded-full bg-black text-white' />
            <div className='flex flex-col'>
            <span className="text-sm font-medium text-white"> Welcome Back, John doe</span>
              <span className="text-sm font-medium text-white">John@gmail.com</span>
            </div>

             
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <FaSearch className="w-6 h-6 cursor-pointer text-white" />
            <div className="relative">
              <FaRegBell className="w-6 h-6 cursor-pointer text-white" />
              <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">3</span>
            </div>
            <FaEnvelope className="w-6 h-6 cursor-pointer text-white" />
            
          </div>
        </div>

    
      <main className="flex-1 p-8">
        
        <ContentSection />
      </main>
    </div>
  </div>
  )
}

export default Dashboard