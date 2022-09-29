import React, {useContext} from 'react';
import { AppContext } from '../context/AppContext';
import closeIcon from '../assets/icons/icon_close.png'
import '../styles/OrderItem.scss';

const OrderItem = ({ product, indexValue }) => {
	const { removeFromCart } = useContext(AppContext)
	const handleRemove = () => {
		removeFromCart(indexValue)
	}
	return (
		<div className="OrderItem">
			<figure>
				<img src={product.images[0]} alt={product.title} />
			</figure>
			<p>{product.title}</p>
			<p>${product.price}</p>
			<img src={closeIcon} alt="close" onClick={handleRemove}/>
		</div>
	);
}

export default OrderItem;