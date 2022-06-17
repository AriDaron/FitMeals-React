import React from "react";
import { useHistory } from "react-router"

export const ProfileMain = () => {
    const history = useHistory();
    return (
        <>
            <h1 className="profileHeader">My Profile</h1>
            <div className="profileLinks">
                    <div className="paymentButton">
                        <button className="button" onClick={() => history.push('/paymentTypes')}>View/Edit Payment Method</button>
                    </div>
                    <div className="orderButton">
                        <button className="button" onClick={() => history.push('/orders')}>View My Order</button>
                    </div>
            </div>
        </>
    )
}