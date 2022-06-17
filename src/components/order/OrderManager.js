export const getOrders = () => {
    return fetch("http://localhost:8000/orders", {
        headers: {
            "Authorization": `Token ${localStorage.getItem("auth_token")}`

        }
    })
        .then(response => response.json())
}


export const getCurrentOrder = (id) => {
    return fetch("http://localhost:8000/orders/current", {
        headers: {
            "Authorization": `Token ${localStorage.getItem("auth_token")}`

        }
    })
        .then(response => response.json())
}

export const removeFromOrder = (mealsId) => {
    return fetch (`http://localhost:8000/meals/${mealsId}/remove_from_order`,{
        method: 'DELETE',
        headers: {
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
        }
    })
}

export const getPaymentMethods = () => {
    return fetch("http://localhost:8000/paymentTypes", {
        headers: {
            "Authorization": `Token ${localStorage.getItem("auth_token")}`

        }
    })
        .then(response => response.json())
}

export const updatePaymentMethod = (orderId, paymentMethod) => {
    return fetch(`http://localhost:8000/orders/${orderId}`, {
        method: "PUT",
        headers: {
            "Authorization": `Token ${localStorage.getItem("auth_token")}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(paymentMethod)
    })
}
export const completeOrder = (order) => {
    return fetch(`http://localhost:8000/orders/${order.id}/complete`, {
        method: "PUT",
        headers: {
            "Authorization": `Token ${localStorage.getItem("auth_token")}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(order)
    })
}