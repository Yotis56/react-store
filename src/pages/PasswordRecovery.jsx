import React from 'react';
//assets
import yardSaleLogo from '../assets/logos/logo_yard_sale.svg'
//styles
import '../styles/passwordRecovery.scss';

const PasswordRecovery = () => {
	return (
		<div className="PasswordRecovery">
			<div className="PasswordRecovery-container">
				<img src={yardSaleLogo} alt="logo" className="PasswordRecovery-logo" />
				<h1 className="title">Password recovery</h1>
				<p className="subtitle">Inform the email address used to create your account</p>
				<form action="/" className="form">
					<label htmlFor="email" className="label">Email address</label>
					<input type="text" id="email" className="input input-email" />
					<input type="submit" value="Confirm" className="primary-button login-button" />
				</form>
			</div>
		</div>
	);
}

export {PasswordRecovery};