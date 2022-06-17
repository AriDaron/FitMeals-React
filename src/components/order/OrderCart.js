import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import { completeOrder, getCurrentOrder, getPaymentMethods, removeFromOrder, updatePaymentMethod } from "./OrderManager.js"


export const CurrentCartItemList = (props) => {
    const [cartItems, setCartItems] = useState({})
    const [paymentMethod, setPaymentMethod] = useState([])
    const [selectedPaymentMethod, setSelectedPaymentMethod]= useState({})

    const loadCartItems = () => {
        getCurrentOrder(cartItems.id).then(data => setCartItems(data))

    }


    useEffect(() => {
        getPaymentMethods()
            .then(data => setPaymentMethod(data))
    }, []
    )
    useEffect(() => {
        loadCartItems()
    }, []
    )

    const removeMeal = (id) => {
        removeFromOrder(id).then(data => loadCartItems(data))
    }
    const history = useHistory()
    return (
        <>
            <article className="orders">
                <h1>My Cart</h1>
                <fieldset key={`cartItem--${cartItems.id}`} className="cartItem">
                    {cartItems.meals?.map((meal) => {
                        return <div key={`meal--${meal.id}`}>
                            {meal.name} ${meal.price}
                            <button onClick={() => { removeMeal(meal.id) }}> remove </button>
                        </div>
                    }
                    )}
                    <div className="order__date">Subtotal= ${cartItems.total}  </div>
                    <h3>Total Items: {cartItems.meals?.length}</h3>
                </fieldset>
                <fieldset>
                    Payment Method:  
                    <select className="payment" id="payment"
                        //onChange set a copy of the paymentlist  to paymentMethod
                        onChange={
                            (evt) => {
                                setSelectedPaymentMethod(evt.target.value)
                            }
                        }>
                        <option value="0">--Select a Payment Method--</option>
            //then map through list of payment methods to display in dropdown
                        {
                            paymentMethod.map(payment => {
                                return <option
                                    className="payment"
                                    value={payment.id}
                                    key={payment.id}>{payment.card_type}</option>
                            })
                        }
                    </select>
                </fieldset>
                <button type="submit"
                onClick={evt => {
                    // Prevent form from being submitted
                    evt.preventDefault()

                    const Order = {
                        id:cartItems.id,
                        paymentTypeId: selectedPaymentMethod
,
                    }

                    // Send POST request to your API
                    completeOrder(Order)
                        .then(() => history.push("/orders"))
                }}
                className="btn btn-primary">Submit</button>
            </article>
        </>
    )
}