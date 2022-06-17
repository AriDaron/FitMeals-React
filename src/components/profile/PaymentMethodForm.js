import React, { useState, useEffect } from "react"
import { useHistory } from 'react-router-dom'
import { createPaymentMethod } from "./ProfileManager"



export const PaymentMethodForm = () => {
    const history = useHistory()
    const [paymentType, setPaymentType] = useState([])

    /*
        Since the input fields are bound to the values of
        the properties of this state variable, you need to
        provide some default values.
    */


        const changePaymentMethodState = (evt) => {
            // TODO: Complete the onChange function
            const copy = { ...currentPaymentType }
            copy[evt.target.name] = evt.target.value
            setCurrentPaymentType(copy)
        }


    const [currentPaymentType, setCurrentPaymentType] = useState({
        cardType:"",
        cardNumber:""
    })

    return (
        <form className="paymentTypeForm">
            <h2 className="paymentTypeForm__title">Register New PaymentType</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="title">Card Name : </label>
                    <input type="text" name="cardType" required autoFocus className="form-control"
                        value={currentPaymentType.cardType}
                        onChange={changePaymentMethodState}
                    />
                </div>
            </fieldset>
            <fieldset>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="title">Card Number: </label>
                    <input type="text" name="cardNumber" required autoFocus className="form-control"
                        value={currentPaymentType.cardNumber}
                        onChange={changePaymentMethodState}
                    />
                </div>
            </fieldset>
           
            <button type="submit"
                onClick={evt => {
                    // Prevent form from being submitted
                    evt.preventDefault()

                    const paymentType = {
                        cardType: currentPaymentType.cardType,
                        cardNumber: currentPaymentType.cardNumber,
                    }

                    // Send POST request to your API
                    createPaymentMethod(paymentType)
                        .then(() => history.push("/paymentTypes"))
                }}
                className="btn btn-primary">Create</button>
        </form>
    )
}