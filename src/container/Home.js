import { useState, useRef, useEffect } from 'react';
import { Link, Route, Routes } from 'react-router-dom';

import { HiMenu } from 'react-icons/hi';
import { AiFillCloseCircle } from 'react-icons/ai';
import logo from '../assets/Share-Pics-logos_black.png';

import { userQuery } from '../utils/data';
import { Sidebar, UserProfile } from '../components';
import { client } from '../client';
import Pins from './Pins';
import { fetchUser } from '../utils/fetchUser';

const Home = () => {
  const [toggleSidebar, setToggleSidebar] = useState(false);
  const [user, setUser] = useState();
  const scrollRef = useRef(null);
  //* this will fetch the data of user from localStorage (Login file) ---
  const userInfo = fetchUser();

  useEffect(() => {
    const query = userQuery(userInfo?.googleId);

    client.fetch(query).then((data) => {
      setUser(data[0]);
    });
  }, []);

  useEffect(() => {
    scrollRef.current.scrollTo(0, 0);
  }, []);

  return (
    <div className='flex bg-gray-50 md:flex-row flex-col h-screen transaction-height duration-75 ease-out'>
      <div className='hidden md:flex h-screen flex-initial'>
        <Sidebar user={user && user} />
      </div>
      <div className='flex md:hidden flex-row'>
        <div className='p-2 w-full flex flex-row justify-between items-center shadow-md'>
          <HiMenu
            fontSize={35}
            className='cursor-pointer'
            onClick={() => setToggleSidebar(true)}
          />
          <Link to='/'>
            <img src={logo} width='145px' alt='logo' />
          </Link>

          {/* //*this will get data of user from localStorage ---  */}
          <Link to={`user-profile/${user?._id}`}>
            <img src={user?.image} width='145px' alt='logo' />
          </Link>
        </div>
        {toggleSidebar && (
          <div className='fixed w-4/5 bg-white h-screen overflow-y-auto shadow-md z-10 animate-slide-in'>
            <div className='absolute w-full flex justify-end item-center p-2'>
              <AiFillCloseCircle
                fontSize={30}
                className='cursor-pointer'
                onClick={() => setToggleSidebar(false)}
              />
            </div>
            <Sidebar user={user && user} closeToggle={setToggleSidebar} />
          </div>
        )}
      </div>
      <div className='pb-2 flex-1 h-screen overflow-y-scroll' ref={scrollRef}>
        <Routes>
          <Route path='/user-profile/:userId' element={<UserProfile />} />
          <Route path='/*' element={<Pins user={user && user} />} />
        </Routes>
      </div>
    </div>
  );
};

export default Home;
