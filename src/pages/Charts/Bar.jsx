import React from 'react'
import { Header } from '../../components'
import { ChartComponent  , SeriesCollectionDirective , SeriesDirective  ,Category,DataLabel,
  Inject , Legend 
  , Tooltip , ColumnSeries} from '@syncfusion/ej2-react-charts';
  import { barCustomSeries , barPrimaryYAxis , barPrimaryXAxis} from '../../data/dummy';
  import { useStateContext } from '../../contexts/ContextProvider'

function Bar() {
  const { currentMode } = useStateContext()

  return (
    <div className=' dark:bg-secondary-dark-bg m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
     <Header category='Bar' title='Inflation Rate Bar' />
     <ChartComponent
          id="charts"
          primaryXAxis={barPrimaryXAxis}
          primaryYAxis={barPrimaryYAxis}
          chartArea={{ border: { width: 0 } }}
          tooltip={{ enable: true }}
          background={currentMode === 'Dark' ? '#33373E' : '#fff'}
          legendSettings={{background:currentMode === 'Dark' ? '#33373E' : '#fff'}}

        >
          <Inject services={[ColumnSeries, Legend, Tooltip, Category, DataLabel]} />
          <SeriesCollectionDirective>
            {barCustomSeries.map((item, index) => <SeriesDirective key={index} {...item} />)}
          </SeriesCollectionDirective>
        </ChartComponent>
    </div>
  )
}

export default Bar