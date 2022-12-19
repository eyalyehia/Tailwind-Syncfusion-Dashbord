import React from 'react'
import { Header } from '../../components'
import { ChartComponent , SeriesCollectionDirective , SeriesDirective ,
  Inject, Crosshair, CandleSeries  , HiloSeries
  , Tooltip , DateTime} from '@syncfusion/ej2-react-charts';
  import { financialChartData } from '../../data/dummy';

  import { useStateContext } from '../../contexts/ContextProvider'


function Financial() {

  const { currentMode } = useStateContext()

  return (
    <div className=' dark:bg-secondary-dark-bg m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
    <Header category='Chart' title='Inflation Rate' /> 
      <ChartComponent
      id='financial-chart'
      primaryXAxis={{valueType:'DateTime' , labelFormat:'yMMM' , title:'Month'}}
      title='AAPL Historical'
      primaryYAxis={{title:'Price'}}
      tooltip={{enable:true}}
      background={currentMode === 'Dark' ? '#33373E' : '#fff'}
      crosshair={{enable:true}}

      >
        <Inject services={[CandleSeries , Crosshair, DateTime , Tooltip , HiloSeries]} />
        <SeriesCollectionDirective>
         <SeriesDirective
          dataSource={financialChartData}
          type='Candle'
          xName='x'
          yName='low'
          low='low'
          high='high'
          open='open'
          close='close'
          >

         </SeriesDirective>
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  )
}

export default Financial