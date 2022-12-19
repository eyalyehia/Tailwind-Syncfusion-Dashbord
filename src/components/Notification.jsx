import React from 'react'
import { useStateContext } from '../contexts/ContextProvider'
import { MdOutlineCancel } from 'react-icons/md';
import { chatData } from '../data/dummy'
import Button from './Button';


function Notification() {

  const { handleClickOff , currentColor } = useStateContext()
  
  return (
    <div className='w-96 min-h-content border absolute top-20 right-20 bg-white dark:bg-secondary-dark-bg dark:text-white'>
    <div className='flex justify-between items-center
        p-4 ml-4'>
        <p className='font-semibold text-xl'>Notifictions</p>
        <button
        type='button'
        onClick={()=> handleClickOff('notification')}
        style={{ color: 'rgb(153,171,180)' , borderRadius: '50%' }}
        className='hover:drop-shadow-xl hover:bg-light-gray p-3 text-2xl'
        >
           <MdOutlineCancel />
       </button>
        </div>
        <div className='mt-4 w-64 mx-auto'>
          {chatData.map((item,index)=>(
            <div className='flex justify-between items-center border-b-2 mb-4' key={index}>
            <div className='w-16 mr-4'>
              <img src={item.image}  className='rounded-full' />
            </div>
            <div className='text-left w-full'>
             <p className='font-semibold'>{item.message}</p>
             <p className='text-gray-600 dark:text-gray-400 text-sm'>{item.desc}</p>
             <p className='text-gray-600 dark:text-gray-400 mb-2'>{item.time}</p>
            </div>
            </div>
          ))}
          <div className='mb-4'>
          <Button
          width='full'
          color='white'
          bgColor={currentColor}
          text='See all Notification'
          borderRadius='10px'
          size='md'
          />
          </div>
          </div>
          </div>
  )
}

export default Notification
