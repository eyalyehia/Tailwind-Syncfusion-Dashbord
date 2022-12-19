import React from 'react';
import { useStateContext } from '../contexts/ContextProvider';
import { MdOutlineCancel } from 'react-icons/md';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import Button from './Button';
import { cartData } from '../data/dummy'

function Cart() {

  const { currentColor , handleClickOff} = useStateContext()
  return (
    <div className='bg-half-transparent w-screen
    fixed nav-item top-0 right-0'>
      <div className='float-right h-screen dark:text-gray-200
      dark:bg-secondary-dark-bg
       w-400 bg-white dark:[#484B52]'>
        <div className='flex justify-between items-center
        p-4 ml-4'>
        <p className='font-semibold text-xl'>Shopping Cart</p>
        <button
        type='button'
        onClick={()=> handleClickOff('cart')}
        style={{ color: 'rgb(153,171,180)' , borderRadius: '50%' }}
        className='hover:drop-shadow-xl hover:bg-light-gray p-3 text-2xl'
        >
           <MdOutlineCancel />
       </button>
        </div>
        <div className='mt-4 text-center'>
          {cartData.map((item,index) => (
            <div key={index} className='border-b-1 flex justify-evenly mb-2'>
              <img className='w-24 mt-4 mb-4' src={item.image} />  
              <div className='flex flex-col items-center'>
             <p className='font-semibold dark:text-white'>{item.name}</p>
             <p className='text-gray-400'>{item.category}</p>
              <span className='font-semibold mb-2'>{item.price}</span>
             <div className='border flex items-center ml-2 cursor-pointer text-xl p-0.5 hover:drop-shadow-xl rounded-xl'>
              <span className='mr-1 border-r-1 text-red-400'><AiOutlineMinus /></span>
              <span className='text-green-400'>0</span>
              <span className='ml-1 border-l-1 text-green-400'><AiOutlinePlus /></span>
              </div>
             </div>
             </div>


          ))}
        </div>
         <div className='flex flex-wrap p-4 ml-4 justify-between'>
          <div>
          <p className='text-xl mb-4 text-gray-400'>Sub Total</p>
          <p className='text-xl  text-gray-400'>Total</p>
          </div>
          <div>
          <p className='mb-4'>$890</p>
          <p>$890</p>
          </div>
        </div>
        <div className='mt-4 text-center'>
        <Button
        color='white'
        bgColor={currentColor}
        text='Place Order'
        size='md'
        width='80'
        borderRadius='10px'  />
        </div>
        </div>
      </div>
  )
}

export default Cart