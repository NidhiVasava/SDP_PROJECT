import { useContext, useState } from "react";
import { authContext } from './../../context/AuthContext';
import MyBooking from "./MyBooking";
import Profile from "./profile";
import useGetProfile from '../../hooks/useFetchData';
import { BASE_URL } from "../../config";
import Loading from "../../components/Loader/Loading";
import Error from "../../components/Error/Error";

const MyAccount = () => {
  const { dispatch } = useContext(authContext);
  const [activeTab, setActiveTab] = useState('bookings');
  const {
    data: userData,
    loading,
    error,
  } = useGetProfile(`${BASE_URL}/users/profile/me`);

  console.log(userData,"userdata")

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  return (
 <section>
      <div className="max-w-[1170px] px-5 mx-auto">
        {loading && !error && <Loading />}
        {error && !loading && <Error errMessage={error} />}

        {!loading && !error && (
          <div className="grid md:grid-cols-3 gap-10">
            <div className="pb-[50px] px-[30px] rounded-md">
              <div className="flex items-center justify-center">
                <figure className="w-[100px] h-[100px] rounded-full border-2 border-solid border-primaryColor">
                  <img src={userData.photo} alt="" className="w-full h-full rounded-full" />
                </figure>
              </div>

              <div className="text-center mt-4">
                <h3 className="text-[18px] leading-[30px] text-headingColor font-bold">
                  {userData.name}
                </h3>
                <p className="text-textColor text-[15px] leading-6 font-medium">
                  {userData.email}
                </p>
                <p className="text-textColor text-[15px] leading-6 font-medium">
                  Blood Type:
                  <span className="ml-2 text-headingColor text-[22px] leading-8">
                    {userData.bloodType}
                  </span>
                </p>
              </div>
              <div className="mt-[50px] md:mt-[100px]">
                <button onClick={handleLogout}
                  className="w-full bg-[#181A1E] p-3 text-[16px] leading-7 rounded-md text-white">
                  Logout
                </button>
                <button className="w-full bg-red-600 mt-4 p-3 text-[16px] leading-7 rounded-md text-white ">
                  Delete account
                </button>
              </div>
            </div>
            <div className="md:col-span-2 md:px-[30px]">
            <div>
            <button
                    onClick={() => setActiveTab('bookings')}

  className={`${
    activeTab === "bookings" && "bg-primaryColor font-normal"
  } p-2 mr-5 px-5 rounded-md font-semibold text-[16px] leading-7 border border-solid border-primaryColor text-blue`}
>
  My Bookings
</button>
<button
 onClick={() => setActiveTab('settings')}
  className={`${
    activeTab === "settings" && "bg-primaryColor  font-normal"
  } py-2 px-5 rounded-md font-semibold text-[16px] leading-7 border border-solid border-primaryColor text-blue`}
>
  Profile Settings
</button>

            </div>     

              {activeTab === "bookings" && <MyBooking />}
              {activeTab === "settings" && <Profile user={userData}/>}
            </div>
          </div>
        )}
      </div>
      </section>
  );
};

export default MyAccount;




/*import React from "react";

const MyAccount = () => {
  return <div>
    MyAccount
  </div>
};
 
export default MyAccount;*/



/*import {useContext, useState} from "react";

import { authContext } from './../../context/AuthContext';
import MyBooking from "./MyBooking";
import Profile from "./profile";

import useGetProfile from '../../hooks/useFetchData';
import { BASE_URL } from "../../config";

import Loading from "../../components/Loader/Loading";
import Error from "../../components/Error/Error";


const MyAccount = () => {
  const {dispatch} = useContext(authContext);
  const [tab,setTab] = useState('bookings');

  const {
    data:userData,
     loading,
     error,
    } = useGetProfile('${BASE_URL}/users/profile/me');

  console.log(userData,"userData");


  const handleLogout = ()  =>{
    dispatch({type: "LOGOUT"});
  };
  return (

     <section>
        <div className="max-w-[1170px] px-5 mx-auto">
          {  loading && !error && <Loading />}

          {error && !loading && <Error errMessage={error}/>}


     {
      !loading && !error && (<div className="grid md:grid-cols-3 gap-10">
      <div className="pb-[50px] px-[30px] rounded-md">
        <div className="flex items-center justify-center">
          <figure className="w-[100px] h-[100px] rounded-full border-2 border-solid border-primaryColor">
            <img src={userData.photo} alt="" className="w-full h-full rounded-full" />
          </figure>
        </div>

        <div className="text-center mt-4">
          <h3 className="text-[18px] leading-[30px] text-headingColor font-bold">
           {userData.name}
          </h3>
          <p className="text-textColor text-[15px] leading-6 font-medium">
           {userData.email}
          </p>
          <p className="text-textColor text-[15px] leading-6 font-medium">
            Blood Type:
            <span className="ml-2 text-headingColor text-[22px] leading-8">
              {userData.bloodType}
            </span>
          </p>
        </div>
        <div className="mt-[50px] md:mt-[100px] ">
          <button onClick={handleLogout} 
          className="w-full bg-[#181A1E] p-3 text-[16px] leading-7 rounded-md text-white">
            Logout
            </button>
          <button className="w-full bg-red-600 mt-4 p-3 text-[16px] leading-7 rounded-md text-white ">
            Delete account
            </button>
        </div>
      </div>
      <div className="md:col-span-2 md:px-[30px]">
        <div>
          <button onCanPlay={()=> setTab('bookings')} 
          className={'${tab === "settings" && "bg-primaryColor text-white font-normal"} p-2 mr-5 px-5 rounded-md text-headingColor font-semibold text-[16px] leading-7 border border-solid border-primaryColor'}
          >
            My Bookings
            </button>
          <button onCanPlay={()=> setTab('settings')}
           className={' ${ tab ==="settings" && "bg-primaryColor text-white font-normal" } py-2 px-5 rounded-md text-headingColor font-semibold text-[16px] leading-7 border border-solid border-primaryColor ' }
         >
         Profile Settings
         </button>
        </div>

  {tab === "bookings" && <MyBooking/>}
        {tab === "settings" && <Profile user={userData}/>}
      </div>
    </div>
    ) }
    </div>
     </section>
  );
};
 

export default MyAccount;*/
