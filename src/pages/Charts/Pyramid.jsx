import React from 'react';
import { Header } from '../../components';
import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, Inject, AccumulationLegend, PyramidSeries, AccumulationTooltip, AccumulationDataLabel } from '@syncfusion/ej2-react-charts';
import { PyramidData } from '../../data/dummy';
import { useStateContext } from '../../contexts/ContextProvider'




function Pyramid() {

  const { currentMode } = useStateContext()


  return (
    <div className=' dark:bg-secondary-dark-bg m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
    <Header category='Pyramid' title='Inflation Rate Pyramid' />
    <AccumulationChartComponent
    id='pyramid-chart'
    tooltip={{enable:true}}
    background={currentMode === 'Dark' ? '#33373E' : '#fff'}
   legendSettings={{background:'white'}}
   
    >
      <Inject services={[PyramidSeries , AccumulationLegend , AccumulationTooltip ,AccumulationDataLabel]} />
      <AccumulationSeriesCollectionDirective>
      <AccumulationSeriesDirective
      dataSource={PyramidData}
      xName='x'
      yName='y'
      type='Pyramid'
      width='45%'
      height='80%'
      neckWidth="15%"
      gapRatio={0.03}
      explode
      emptyPointSettings={{ mode: 'Drop', fill: 'red' }}
      dataLabel={{
        visible: true,
        position: 'Inside',
        name: 'text',
      }}
      >

      </AccumulationSeriesDirective>
      </AccumulationSeriesCollectionDirective>
    </AccumulationChartComponent>

    </div>
  )
}

export default Pyramid