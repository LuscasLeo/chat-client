import React, { FormEvent, useRef } from 'react';
import { Container } from './styles';

const Login: React.FC = () => {

	const formRef = useRef<HTMLFormElement>();

	const submitLogin = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const [username, password] = [event.currentTarget.elements['username'].value, event.currentTarget.elements['password'].value];
		alert(`Logging with ${username} and ${password}`);
	};

	return (
		<Container>
			<>
				<h5>Hello Folk!</h5>
				<h6>Please identify yourself!</h6>
				<form ref={formRef} onSubmit={submitLogin}>
					<input type="text" name="username" id="username"/>
					<input type="password" name="password" id="password"/>
					<button type="submit">Log in</button>
				</form>
			</>
		</Container>
	);
};


export default (Login);
