import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom";
import { getPaymentMethods } from "../order/OrderManager";
import { deletePaymentMethod, EditPaymentMethod } from "./ProfileManager";

export const PaymentTypeList = (props) => {
    const [paymentTypes, setPaymentTypes] = useState([])
    const loadPaymentTypes = () => {
        getPaymentMethods().then(data => setPaymentTypes(data))
    }
    useEffect(() => {
        loadPaymentTypes()
    }, [])

    const history = useHistory()
    return (
        <article className="paymentTypes">
            <button onClick={()=>{
                 history.push({ pathname: "/paymentTypes/new" })
            }}>
                Register New Payment Method 
            </button>
            {
                paymentTypes.map(paymentType => {
                    return <section key={`paymentType--${paymentType.id}`} className="paymentType">
                        <div className="paymentType__date"> Card Name: {paymentType.card_type}  </div>
                        <div className="paymentType__total"> Card Number:  {paymentType.obscured_num}</div>
                        <button onClick={() => { deletePaymentMethod(paymentType.id) }}> Delete </button>

                    </section>
                })
            }
        </article>
    )
}
getPaymentMethods()