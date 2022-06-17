export const getMeals = () => {
    return fetch("http://localhost:8000/meals", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
           
        }
    })
        .then(response => response.json())
}

export const get_single_meal = (mealId) => {
    return fetch(`http://localhost:8000/meals/${mealId}`, {
        headers: {
            "Authorization": `Token ${localStorage.getItem("auth_token")}`,
            "Content-Type": "application/json"
        }
    })
        .then(res => res.json())
}

export const addToOrder = mealId => {
    return fetch (`http://localhost:8000/meals/${mealId}/add_to_order`,{
        method: 'POST',
        headers: {
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
        }
    })
}


