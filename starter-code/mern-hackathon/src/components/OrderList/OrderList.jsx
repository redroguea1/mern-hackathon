import React from 'react'
import OrderListItem from '../OrderListItem/OrderListItem'
import './OrderList.css'

export default function OrderList({orders, setPastOrder}) {
  console.log(orders)
  // KOLBI take our orderItems and make an array of objects and put that array in our return
  // cannot access key property so adding an index value. 
  const orderItems = orders.map((order, index) => (
    <OrderListItem  key={index} orders={orders} order={order} setPastOrder={setPastOrder} index={index}/>
    ))
    return (
    <div className="OrderList">
        {orderItems}
    </div>
  )
}

