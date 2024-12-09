import React from 'react'
import Order from './Order'
import Earning from './Earning'

const OrderDetils = () => {
  return (
    <div className="mt-4">
        <div className="item flex gap-8">
          <div className="order-area w-1/2 bg-white rounded-lg">
             <Order/>
          </div>
          <div className="earning-area w-1/2 bg-white rounded-lg">
             <Earning/>
          </div>
        </div>
    </div>
  )
}

export default OrderDetils