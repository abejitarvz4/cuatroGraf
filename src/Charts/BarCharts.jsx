import React, {useState, useEffect } from 'react'
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale } from 'chart.js'
import { Bar } from 'react-chartjs-2'

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale
)

const Barchart = () => {

    const [chart, setChart]=useState([])
    var baseURL= "https://api.coinranking.com/v2/coins?limit=10"
    var proxiURL= 'https://cors-anywhere.herokuapp.com/'
    var apiKey= "coinrankinge569d10bf4a2d37c72763624f466024121f24721b52b9c6d"

    useEffect(() => {
      const fetchCoins= async () => {
        await fetch(`${proxiURL}${baseURL}`,{
          method: 'GET',
          headers: {
            'content-Type': 'application/json',
            'x-access-token': `${apiKey}`,
            'Access-Control-Allow-Origin': '*'
        }
        }).then((response)=> {
          response.json().then((json)=>{
            console.log(json)
            setChart(json.data)
          })
        }).catch(error => {
          console.log(error)
        
        })
      }
      fetchCoins()
    }, [baseURL, proxiURL, apiKey])

    var data= {
        labels: chart?.coins?.map(x=> x.name),
        datasets: [{
          label: `${chart?.coins?.lenght} available`,
          data: chart?.coins?.map(x=> x.price),
          borderWidth: 1,
          backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)'],
          borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)']
        }]
      }
    var options= {
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true
          }
        },
        Legends:{
            labels:{fontSize: 24}
        }
      }

  return (
    <div>
      <Bar 
        height={400}
        data={data}
        options={options}/>
    </div>
  )
}

export default Barchart
