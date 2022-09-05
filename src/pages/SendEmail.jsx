import React from 'react';
//assets
import yardSaleLogo from '../assets/logos/logo_yard_sale.svg'
import emailLogo from '../assets/icons/email.svg'
//styles
import '../styles/sendEmail.scss';

const SendEmail = () => {
	return (
		<div className="SendEmail">
			<div className="form-container">
				<img src={yardSaleLogo} alt="logo" className="SendEmail-logo" />
				<h1 className="title">Email has been sent!</h1>
				<p className="subtitle">Please check your inbox for instructions on how to reset the password</p>
				<div className="email-image">
					<img src={emailLogo} alt="email" />
				</div>
				<button className="primary-button login-button">Login</button>
				<p className="resend">
					<span>Didn't receive the email?</span>
					<a href="/">Resend</a>
				</p>
			</div>
		</div>
	);
}

export default SendEmail;