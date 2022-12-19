import React from 'react';
import { Header , Pie as PieChart } from '../../components'
import { pieChartData } from '../../data/dummy'

function Pie() {

  return (
    <div className=' dark:bg-secondary-dark-bg m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
    <Header category='Chart' title='Pie Chart' />
    <PieChart  dataSorces={pieChartData} legendVisiblity height="full" />

    </div>
  )
}

export default Pie