import React from 'react'
import { Header } from '../../components'
import { colorMappingData  , rangeColorMapping } from '../../data/dummy';
import {ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, ColumnSeries, Category, Tooltip, Legend, RangeColorSettingsDirective } from '@syncfusion/ej2-react-charts';
import { useStateContext } from '../../contexts/ContextProvider'


function ColorMapping() {

  const { currentMode } = useStateContext()

  return (
    <div className=' dark:bg-secondary-dark-bg m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
    <Header category='Chart' title='Color Mapping' /> 
    <ChartComponent
    tooltip={{enable:true}}
    primaryXAxis={{valueType:'Category' , title: 'Mounths' , majorGridLines: {width : 0}}}
    primaryYAxis= {{lineStyle: {width : 0} ,labelFormat:'{value}°C', title: 'Temperature' 
  ,majorTickLines: { width: 0 },minorTickLines: {width: 0} }}
    chartArea={{border: {width:0}}}
    legendSettings={{ mode: 'Range', background: 'white' }}
    background={currentMode === 'Dark' ? '#33373E' : '#fff'}

    >
      <Inject services={[Category ,Legend, Tooltip , ColumnSeries]} />
      <SeriesCollectionDirective>
      <SeriesDirective
      dataSource={colorMappingData[0]}
      name='USA'
      xName='x'
      yName='y'
      type='Column'
      cornerRadius={{
        topLeft: 10,
        topRight: 10,
      }}
      />
      </SeriesCollectionDirective>
      <RangeColorSettingsDirective>
        {rangeColorMapping.map((item,index)=> <RangeColorSettingsDirective key={index} {...item} />)}
      </RangeColorSettingsDirective>
    </ChartComponent>

    </div>
  )
}

export default ColorMapping