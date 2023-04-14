import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './OrderHistoryPage.css';
import Logo from '../../components/Logo/Logo';
import UserLogOut from '../../components/UserLogOut/UserLogOut';
import OrderList from '../../components/OrderList/OrderList';
import OrderDetail from '../../components/OrderDetail/OrderDetail';
import * as ordersAPI from '../../utilities/orders-api'

export default function OrderHistoryPage({ user, setUser }) {

  const [orders, setOrders] = useState([]);

  
  useEffect(function() {
    async function getPreviousOrders() {
      const orders = await ordersAPI.getOrderHistory();
      setOrders(orders);
    }
    // getPreviousOrders()
  }, [])
  
  //rendered UI

  return (
    <main className="OrderHistoryPage">
      <aside>
        <Logo />
        <Link to="/orders/new" className="button btn-sm">NEW ORDER</Link>
        <UserLogOut user={user} setUser={setUser} />
      </aside>
      {/* Render an OrderList component (needs to be coded) */}
      <OrderList />
      {/* Render the existing OrderDetail component */}
      <OrderDetail />
    </main>
  );
}