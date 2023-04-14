import React from 'react'

export default function OrderListItem() {
  return (
    <div>
        <p>Order Id: {order.orderId}</p>
        <p>{order.createdAt.toLocaleString()}</p>
        <p>{order.orderTotal}</p>
        <p>{order.totalQty}</p>
    </div>
  )
}
