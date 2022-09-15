import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Menu.scss';

const Menu = ({ hideMenu }) => {
	return (
		<div className="Menu-background" onClick={hideMenu}>
			<div className="Menu">
				<ul>
					<li>
						<a href="/" className="title">My orders</a>
					</li>
					<li>
						<a href="/">My account</a>
					</li>
					<li>
						<a href="/">Sign out</a>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default Menu;