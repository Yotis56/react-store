import React from 'react';
//assets
import yardSaleLogo from '../assets/logos/logo_yard_sale.svg'
//styles
import '../styles/NewPassword.scss';

const NewPassword = () => {
	return (
		<div className="NewPassword">
			<div className="NewPassword-container">
				<img src={yardSaleLogo} alt="logo" className="new-password__logo" />
				<h1 className="title">Create a new password</h1>
				<p className="subtitle">Enter a new passwrd for your account</p>
				<form action="/" className="form">
					<label htmlFor="password" className="label">Password</label>
					<input type="password" id="password" placeholder="*********" className="input input-password" />
					<label htmlFor="new-password" className="label">Password</label>
					<input type="password" id="new-password" placeholder="*********" className="input input-password" />
					<input type="submit" value="Confirm" className="primary-button login-button" />
				</form>
			</div>
		</div>
	);
}

export default NewPassword;