import { useState, useEffect } from 'react';
import GetData from '../data/ApiCall';

function Stocks() {

  const [stocks, setStocks] = useState([]);

  const FetchData = async () => {
    const response = await GetData()
    setStocks(response)
    console.log(stocks)

  }

  useEffect(() => {
    FetchData()
  }, [])


  return (
    <div>
      {stocks.map((stock) => {
        return (
          <div className='Stocks'>
            <h1 className='Symbol'>{stock.symbol}</h1>
            <h6 className='CompanyName'>{stock.companyName}</h6>
            <h1 className='LatestPrice'>{stock.latestPrice}</h1>
            <h4 className='ChangePercent'>{stock.changePercent}</h4>
          </div>


        )
      })}

    </div>
  )
}



export default Stocks;

