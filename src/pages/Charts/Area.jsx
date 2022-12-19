import React from 'react';
import { Header } from '../../components';
import { ChartComponent , SeriesCollectionDirective , SeriesDirective ,
  Inject , Legend , SplineAreaSeries,
  DateTime} from '@syncfusion/ej2-react-charts';
  import { areaCustomSeries , areaPrimaryYAxis , areaPrimaryXAxis} from '../../data/dummy';
  import { useStateContext } from '../../contexts/ContextProvider'


function Area() {

  const { currentMode } = useStateContext()

  return (
    <div className=' dark:bg-secondary-dark-bg m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
    <Header category='Area' title='Inflation Rate in Percentage' />
    <ChartComponent
    id='area-chart'
    height='420px'
    primaryXAxis={areaPrimaryXAxis}
    primaryYAxis={areaPrimaryYAxis}
    chartArea={{border: { width: 0 }}}
    background={currentMode === 'Dark' ? '#33373E' : '#fff'}
    >
      <Inject services={[SplineAreaSeries , DateTime , Legend]} />
      <SeriesCollectionDirective>
      {areaCustomSeries.map((item,index)=>
      <SeriesDirective key={index} {...item} />)}
      </SeriesCollectionDirective>
    </ChartComponent>

    </div>
  )
}

export default Area