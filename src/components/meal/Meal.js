//responsible for rendering individual meals 

import React, { useEffect, useState } from "react"
import { useParams} from "react-router"
import { useHistory } from "react-router-dom"
import { addToOrder, get_single_meal } from "./MealManager"

export const Meal = () => {
    const [meal, setMeal] = useState({})  // State variable for current meal object
    const { mealId } = useParams()  // Variable storing the route parameter

    //this useEffect runs only when the mealId route param changed 
    useEffect(
        () => {
            get_single_meal(mealId)
                .then((data) => {
                    setMeal(data) //sets state when data come back fro API
                })
        },
        []  
    )
    const addMeal = (event) => {
        addToOrder(meal.id).then(()=>history.push("/cart"))
     }
 const history= useHistory()
    return (
        <>
        <div className="meal">
            <h2>Meal Details </h2>
            <section className="meal">
                <div className="meal_name">{meal.name} ${meal.price}</div>
                 <img className="meal_img" src= {meal.imageURL} />
                <h3 className="meal_nutrition">{meal.nutrition}</h3>
            </section>
            <button onClick={addMeal}> Add to cart </button>

            </div>
        </>
    )
}