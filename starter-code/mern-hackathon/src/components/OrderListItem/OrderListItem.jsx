import React from 'react'
import './OrderListItem.css'

export default function OrderListItem({orders, order, setPastOrder, index}) {
  
  function handleClick() {
    setPastOrder(orders[index])
  }

  return (
    <div onClick={handleClick} className="OrderListItem">
        <div>
          <div>
            Order Id: <span className="smaller">{order.orderId}</span>
          </div>
          <div className="smaller">
            <p>{order.createdAt.toLocaleString()}</p>
          </div>
          <div className="align-rt">
            <div>
              {order.orderTotal}
            </div>
            <div className="smaller">
              <p>{order.totalQty}</p>
            </div>
          </div>
        </div>
    </div>
  )
}
