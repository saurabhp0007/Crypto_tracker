import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import axios from 'axios';
import { useEffect, useState } from 'react';
import CoinPage from './Components/CoinPage';
import Navbar from './Components/Navbar';
import Coin from './routes/Coin';

function App() {
  const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false&locale=en'
  const [coins, setcoins] = useState([])
  useEffect(() => {
    axios.get(url).then((response) => {
      setcoins(response.data)
      console.log(response.data[0])
    }).catch((error) => {
      console.log(error)
    }, [])
  })


  return (

    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<CoinPage coins={coins} />} />
        <Route path='/coin' element={<Coin />}>
          <Route path=':coinId' element={<Coin />} />
        </Route>
      </Routes>

    </>

  );
}

export default App;
