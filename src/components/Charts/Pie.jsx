import React from 'react';
import { AccumulationChartComponent , AccumulationSeriesCollectionDirective
,AccumulationSeriesDirective,AccumulationLegend , Inject, AccumulationDataLabel, AccumulationTooltip, PieSeries, tooltipRender  } from '@syncfusion/ej2-react-charts';
import { useStateContext } from '../../contexts/ContextProvider'


function Pie({ dataSorces , height ,legendVisiblity}) {
const { currentMode } = useStateContext()
  
  return (
 <AccumulationChartComponent
 id='pie-charts'
 tooltip={{enable:true}}
 legendSettings={{visible:legendVisiblity , background:'white'}}
 background={currentMode === 'Dark' ? '#33373E' : '#fff'}
 height={height}
 >
  <Inject services={[AccumulationLegend,AccumulationTooltip , PieSeries , AccumulationDataLabel]} />
  <AccumulationSeriesCollectionDirective>
   <AccumulationSeriesDirective
     dataSource={dataSorces}
      startAngle={0}
  endAngle={360}
   xName='x'
 yName='y' 
 radius='70%'
  innerRadius="40%" 
  explode
 explodeOffset="10%"
 explodeIndex={2}
  dataLabel={{
  visible: true,
  name: 'text',
  position: 'Inside',
  font: {
    fontWeight: '600',
    color: '#fff',
  },
}}>
   </AccumulationSeriesDirective>
  </AccumulationSeriesCollectionDirective>
 </AccumulationChartComponent>
  )
}

export default Pie