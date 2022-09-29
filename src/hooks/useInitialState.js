import { useState } from "react";

const initialState = {
    cart: []
}

const useInitialState = () => {
    const [state, setState] = useState(initialState)

    const addToCart = payload => {
        setState({
            ...state,
            cart: [...state.cart, payload]
        })
    }
    const removeFromCart = (payload) => {
        setState({
            ...state,
            cart: state.cart.filter( (item, index) => index !== payload  )
        })
    } 

    return {state, addToCart, removeFromCart}
}

export {useInitialState}