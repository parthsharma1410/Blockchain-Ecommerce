import React, { useState, useEffect } from 'react'
import getBlockchain from './ethereum'
import './App.css';
import Store from './Store'
import Navigation from './Navbar'

function App() {

  const [paymentProcessor, setPaymentProcessor] = useState(undefined)
  const [dai, setDai] = useState(undefined)

  useEffect(() => {
    const init = async () => {
      const { paymentProcessor, dai } = await getBlockchain()
      setPaymentProcessor(paymentProcessor);
      setDai(dai)
    }
    init();
  }, [])

  if(typeof window.ethereum === 'undefined') {
    return (
      <div className='container'>
        <div className='col-sm-12'>
          <h3 className='heading'>Our Products</h3>
          <p>Please install the latest version of metamask</p>
        </div>
      </div>
    )
  }

  return (
    <div className="App">
      <Navigation />
      <div className='container'>
        <div className='col-sm-12'>
          <h3 className='heading'>Our Products</h3>
          <Store paymentProcessor = {paymentProcessor} dai = {dai} />
        </div>
      </div>
    </div>
  );
}

export default App;
