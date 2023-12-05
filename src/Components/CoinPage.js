import React from 'react'
import CoinItem from './CoinItem';
import './CoinPage.css'
import { Link } from 'react-router-dom';
import Coin from '../routes/Coin';

const CoinPage = (props) => {
  return (
    <div className='container'>
        <div>
            <div className='heading'>
               <p>#</p>
               <p className='coin-name'>Coins</p>
               <p>Price</p>
               <p>24h</p>
               <p className='hide-mobile'>Volume</p>
               <p className='hide-mobile'>Mkt Cap</p>

            </div>

            {props.coins.map(coins =>{
                return (
                    <Link to={`/coin/${coins.id}`} key = {coins.id} element={<Coin />}>
                    <CoinItem coins={coins} />
                    </Link>
                   
                );
            })}
        </div>
    </div>
  )
}

export default CoinPage