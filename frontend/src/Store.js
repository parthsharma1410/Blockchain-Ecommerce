import React from 'react'
import { ethers } from 'ethers'
import axios from 'axios'
import tenet from './img/tenet.jfif'
import fivepointsomeone from './img/fivepointsomeone.jpg'
import percyjackson from './img/percyjackson.jfif'

const API_URL = 'http://localhost:4000'

const ITEMS = [
    {
        id: 1,
        price: ethers.utils.parseEther('10')
    },
    {
        id:2,
        price: ethers.utils.parseEther('20')
    },
    {
        id:3,
        price: ethers.utils.parseEther('5')
    }
]

function Store({ paymentProcessor, dai}) {

    const buy = async item => {
        const response1 = await axios.get(`${API_URL}/api/getPaymentId/${item.id}`)
        const tx1 = await dai.approve(paymentProcessor.address, item.price)
        await tx1.wait()

        const tx2 = await paymentProcessor.pay(item.price, response1.data.paymentId)
        await tx2.wait()

        await new Promise(resolve => setTimeout(resolve, 5000))

        const response2 = await axios.get(`${API_URL}/api/getItemUrl/${response1.data.paymentId}`)
        console.log(response2)
        alert(response2.data.url)
    }

    return (
        <ul className='flexbox'>
            
            <li className='product'>
                <img src={tenet} />
               <div className='description'>TENET</div>
                <strong><h5>10 DAI</h5></strong>
                <button type='button' className='btngetstarted' onClick={() => buy(ITEMS[0])} >
                    Buy
                </button>
            </li>
            
            <li className='product'>
                <img src={fivepointsomeone} />
               <div className='description'>FIVE POINT SOMEONE</div>
                <strong><h5>20 DAI</h5></strong>
                <button type='button' className='btngetstarted' onClick={() => buy(ITEMS[1])} >
                    Buy
                </button>
            </li>

            <li className='product'>
                <img src={percyjackson} />
               <div className='description'>PERCY JACKSON</div>
                <strong><h5>5 DAI</h5></strong>
                <button type='button' className='btngetstarted' onClick={() => buy(ITEMS[2])} >
                    Buy
                </button>
            </li>
        </ul>
    )
}

export default Store;