import React from 'react'
import './OrderListItem.css'

export default function OrderListItem({orders, order, setPastOrder, index}) {
  
  function handleClick() {
    setPastOrder(orders[index])
  }

  return (
    <div onClick={handleClick} className="OrderListItem">
        <p>Order Id: {order.orderId}</p>
        <p>{order.createdAt.toLocaleString()}</p>
        <p>{order.orderTotal}</p>
        <p>{order.totalQty}</p>
    </div>
  )
}
