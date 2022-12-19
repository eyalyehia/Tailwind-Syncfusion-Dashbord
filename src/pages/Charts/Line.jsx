import React from 'react'
import { Header, LineChart } from '../../components'

function Line() {
  return (
    <div className=' dark:bg-secondary-dark-bg m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
    <Header category='Chart' title='Inflation Rate' /> 
    <LineChart />
    </div>
  )
}

export default Line