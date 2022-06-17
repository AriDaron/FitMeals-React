export const deletePaymentMethod= (id)=>{
    return fetch (`http://localhost:8000/paymentMethods/${id}`,{
        method: 'DELETE',
        headers: {
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
        }
    })
}

export const EditPaymentMethod = (paymentType) => {
    return fetch(`http://localhost:8000/paymentTypes/${paymentType.id}`, {
        method: "PUT",
        headers: {
            "Authorization": `Token ${localStorage.getItem("auth_token")}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(paymentType)
    })
}
export const getPaymentTypes = () => {
    return fetch("http://localhost:8000/paymentTypes", {
        headers: {
            "Authorization": `Token ${localStorage.getItem("auth_token")}`

        }
    })
        .then(response => response.json())

}
export const createPaymentMethod = (paymentType) => {
    return fetch("http://localhost:8000/paymentTypes", {
        method: "POST",
        headers: {
            "Authorization": `Token ${localStorage.getItem("auth_token")}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(paymentType)
    })
        .then(getPaymentTypes)
}