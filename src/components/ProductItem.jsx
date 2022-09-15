import React, { useState } from 'react';
import addToCartIcon from '../assets/icons/bt_add_to_cart.svg'
import '../styles/productItem.scss';

const ProductItem = () => {

	const [cart, setCart] = useState([])
	const handleCart = () => {
	}

	return (
		<div className="ProductItem">
			<img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
			<div className="product-info">
				<div>
					<p>$120,00</p>
					<p>Bike</p>
				</div>
				<figure onClick={handleCart}>
					<img src={addToCartIcon} alt="" />
				</figure>
			</div>
		</div>
	);
}

export default ProductItem;