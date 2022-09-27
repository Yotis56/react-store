import React, { useContext } from 'react';
//components
import { AppContext } from '../context/AppContext';
import OrderItem from '../components/OrderItem';
//assets
import flechita from '../assets/icons/flechita.svg'
import '../styles/MyOrder.scss';

const MyOrder = ({ setToggle }) => {
	const { state } = useContext(AppContext)
	const handleClickBackground = () => {
		setToggle(false)
	}
	const sumTotal = () => {
		const reducer = (accumulator, currentValue) => accumulator + currentValue.price
		const sum = state.cart.reduce(reducer, 0)
		return sum
	}
	return (
		<>
			<div className="myOrder-background" onClick={handleClickBackground}></div>
			<aside className="MyOrder">
				<div className="title-container">
					<img src={flechita} alt="arrow" />
					<p className="title">My order</p>
				</div>
				<div className="my-order-content">
					{ 
						state.cart.map( product => (
							<OrderItem product={product} key={`orderItem-${product.id}`}/>
						) )
					}
					<div className="order">
						<p>
							<span>Total</span>
						</p>
						<p>${sumTotal()}</p>
					</div>
					<button className="primary-button">
						Checkout
					</button>
				</div>
			</aside>
		</>
	);
}

export { MyOrder };