import React , {useEffect} from 'react';
import {AiOutlineMenu} from 'react-icons/ai';
import { FiShoppingCart } from 'react-icons/fi';
import { BsChatLeft } from 'react-icons/bs';
import { RiNotification3Fill } from 'react-icons/ri';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import avatar from '../data/avatar.jpg';
import { Cart , Chat , Notification , UserProfile } from '.';
import { useStateContext } from '../contexts/ContextProvider';

const NavButton = ({title , customFunc , icon , color , dotColor}) => (
<TooltipComponent content={title} position='BottomCenter'>
<button type='button'
 onClick={customFunc}
  style={{ color }}
  className='relative text-xl rounded-full p-3 hover:bg-light-gray'>
  <span style={{background: dotColor}}
  className='absolute inline-flex rounded-full h-2 w-2 right-2 top-2' />
  {icon}
</button>
</TooltipComponent>
)

function Navbar() {
  const {  setActiveMenu ,
     handleClick , isClicked  , screenSize,
     setScreenSize , currentColor , handleClickOff } = useStateContext()

     useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth)
    
    window.addEventListener('resize',handleResize)
    handleResize()
    
    window.removeEventListener('resize',handleResize);
      
     },[])

     useEffect(()=>{
      if(screenSize <= 900){
        setActiveMenu(false)
      }
      else{
        setActiveMenu(true)
      }
     },[screenSize])

     
  return (
    <div className='flex justify-between'>
  
      <NavButton
       title='Menu'
       customFunc={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)}
       icon={<AiOutlineMenu />}
       color={currentColor} /> 

      <div className='flex'>
      <NavButton
       title='Cart'
       customFunc={() => handleClick('cart')}
       icon={<FiShoppingCart />}
       color={currentColor} /> 
   
      <NavButton
       title='Chat'
       dotColor='#03C9D7'
       customFunc={() => handleClick('chat')}
       icon={<BsChatLeft />}
       color={currentColor} />

      <NavButton
       title='Notification'
       dotColor='#03C9D7'
       customFunc={() => handleClick('notification')}
       icon={<RiNotification3Fill />}
       color={currentColor} />

      <TooltipComponent
       content='Profile'
       position='BottomCenter'>
       <div
        className='flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg'
        onClick={() => handleClick('userProfile')}>
          <img
          className='rounded-full w-8 h-8'
          src={avatar} />
         <p>
          <span className='text-gray-400 text-14'>Hi, </span> {' '}
          <span className='text-gray-400 text-14 font-bold ml-1'>Michel</span>
         </p>
       </div>
      </TooltipComponent>
        </div>
        {isClicked.cart && <Cart /> }
        {isClicked.chat && <Chat /> }
        {isClicked.notification && <Notification /> }
        {isClicked.userProfile && <UserProfile /> }
    </div>
  )
}

export default Navbar