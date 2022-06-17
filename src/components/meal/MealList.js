import React, { useEffect, useState } from "react"
import { getMeals } from "./MealManager.js"
import "./MealList.css"

export const MealList = (props) => {
    const [meals, setMeals] = useState([])
    const loadMeals = () => {
        getMeals().then(data => setMeals(data))

    }

    useEffect(() => {
        loadMeals()
    }, [])

    return (
        <>
        
            <h2>Meals Catalog </h2>
        <article className="meal_list">
            {
                meals.map(meal => {
                    return <section key={`meal--${meal.id}`} className="meals">
                       <div className="meal">
                        <div >{meal.name}  </div>
                        <a href={`/meals/${meal.id}`}> <img className="meal_img" src= {meal.imageURL} /> </a>
                        <div > ${meal.price}</div>
                        </div>
                    </section>
                })
            }
        </article>
        </>
    )
}