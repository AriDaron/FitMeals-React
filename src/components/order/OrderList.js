import React, { useEffect, useState } from "react"
import { getOrders } from "./OrderManager.js"

export const OrderList = (props) => {
    const [orders, setOrders] = useState([])
    const loadOrders = () => {
        getOrders().then(data => setOrders(data))
    }
    useEffect(() => {
        loadOrders()
    }, [])
    return (
        <article className="orders">
            {
                orders.map(order => {
                    return <section key={`order--${order.id}`} className="order">
                        <fieldset className="order__date">
                            <div>Order Date: {order.completed_on}  </div>
                            <div> Total:  ${order.total}</div>
                            <div> Meals:{order.meals.map(meal=> meal.name)}</div>
                            <div> Payment Method:  {order.payment_type.card_type} {order.payment_type.obscured_num}</div>
                        </fieldset>
                    </section>
                })
            }
        </article>
    )
}