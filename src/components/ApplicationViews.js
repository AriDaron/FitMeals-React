import React from "react"
import { Route } from "react-router-dom"
import { Meal } from "./meal/Meal.js"
import { MealList } from "./meal/MealList.js"
import { CurrentCartItemList } from "./order/OrderCart.js"
import { OrderList } from "./order/OrderList.js"
import { PaymentMethodForm } from "./profile/PaymentMethodForm.js"
import { PaymentTypeList } from "./profile/PaymentTypes.js"
import { ProfileMain } from "./profile/profileMain.js"

export const ApplicationViews = () => {
    return <>
        <main  classname="main" style={{
            margin: "5rem 2rem",
            lineHeight: "1.75rem"
        }}>
            <Route exact path="/meals/:mealId(\d+)">
                <Meal/>
            </Route>
            <Route exact path="/meals">
                <MealList />
            </Route>
            <Route exact path="/orders">
                <OrderList />
            </Route>
            <Route exact path="/cart">
                <CurrentCartItemList />
            </Route>
            <Route exact path="/myprofile/myprofile">
                <ProfileMain />
            </Route>
            <Route exact path="/paymentTypes">
                <PaymentTypeList />
            </Route>
            <Route exact path="/paymentTypes/new">
                <PaymentMethodForm />
            </Route>

        </main>
    </>
}