import React from 'react'
import { useStateContext } from '../contexts/ContextProvider'
import { MdOutlineCancel } from 'react-icons/md';
import avatar from '../data/avatar.jpg';
import { userProfileData  } from '../data/dummy'
import Button from './Button';
import { icons } from 'react-icons';

function UserProfile() {

const {handleClickOff , currentColor} = useStateContext()

  return (
    <div className='w-96 min-h-content border absolute top-20 right-10 bg-white dark:bg-secondary-dark-bg dark:text-white'>
    <div className='flex justify-between items-center
        p-4 ml-4'>
        <p className='font-semibold text-xl'>User Profile</p>
        <button
        type='button'
        onClick={()=> handleClickOff('userProfile')}
        style={{ color: 'rgb(153,171,180)' , borderRadius: '50%' }}
        className='hover:drop-shadow-xl hover:bg-light-gray p-3 text-2xl'
        >
           <MdOutlineCancel />
       </button>
        </div>
        <div className='flex items-center justify-center mx-auto mt-2 mb-2 border-b-1 p-4'>
          <div>
            <img 
            className='rounded-full w-24 mr-6'
            src={avatar}
            alt='UserProfile'
            />
          </div>
          <div className='text-left'>
            <p className='font-semibold text-xl'>Michael Roberts</p>
            <p className='text-sm text-gray-500'>Administrator</p>
            <p className='text-sm text-gray-500'>info@shop.com</p>
          </div>
        </div>
        <div className='w-64 mx-auto'>
         {userProfileData.map((item,index) => (
          <div className='flex items-center p-4 border-b-1 mb-4' key={index}>
           <div className='mr-4 text-xl'>
             <Button
             text={item.icon}
             bgColor={item.iconBg}
             color={item.iconColor}
             borderRadius='10px'
             size='md'
             width='20'
             
             />
            
           </div>
           <div>
            <p className='font-semibold'>{item.title}</p>
            <p className='text-gray-500 text-sm'>{item.desc}</p>
           </div>
            </div>
         ))}
         </div>
         <div className='w-80 mx-auto mb-4'>
         <Button
         bgColor={currentColor}
         text='Logout'
         color='white'
         width='full'
         size='md'
         borderRadius='10px'
         />
         </div>
        </div>
  )
}

export default UserProfile