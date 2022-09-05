import React from 'react';
import ProductInfo from '../components/ProductInfo';
//assets
import closeIcon from '../assets/icons/icon_close.png'
import '../styles/ProductDetail.scss';

const ProductDetail = () => {
	return (
		<aside className="ProductDetail">
			<div className="ProductDetail-close">
				<img src={closeIcon} alt="close" />
			</div>
			<ProductInfo />
		</aside>
	);
}

export default ProductDetail;