import React from 'react'
import { Header } from '../../components'
import { Stacked as StackedComponenet } from '../../components'

function Stacked() {
  return (
    <div className=' dark:bg-secondary-dark-bg m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
    <Header category='Chart' title='Inflation Rate Stacked' /> 
   <div className='flex justify-center'>
    <StackedComponenet width='50%' height='100%' />
    </div>
    </div>
  )
}

export default Stacked