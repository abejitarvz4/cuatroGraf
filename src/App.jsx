import Barchart from './Charts/BarCharts.jsx'
import Donutchart from './Charts/DonutChart.jsx'
import Linechart from './Charts/LineChart.jsx'
import Piechart from './Charts/PieChart.jsx'
import './App.css'

function App() {
  return (
    <>
      <div className='body'>
          <Barchart />
          <Donutchart />
          <Linechart />
          <Piechart />
      </div>
    </>
  )
}

export default App
