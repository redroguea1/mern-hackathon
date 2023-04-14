import React from 'react'

export default function OrderList({orders}) {
  
  
    return (
    <>
        {orders.map((order, index) => (
        <OrderList key={index} orders={orders} />
      ))}
        <p>Order Id: {order.orderId}</p>
        <p>{order.createdAt.toLocaleString()}</p>
        <p>{order.orderTotal}</p>
        <p>{order.totalQty}</p>
        {orders.map((order, idx) => order ={order} key={idx})}
    </>
  )
}
