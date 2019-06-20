import React, { useState } from 'react';
import { Input, Button } from '../../components/Form';

export const Login = () => {
	const [form, setFormValues] = useState({
		username: '',
		password: '',
		errors: ''
	});

	const inputChange = (field, value) => {
		setFormValues({
			...form,
			[field]: value
		});
	};

	const login = () => {
		console.log('login');
	};

	return (
		<form>
			<Input
				value={form.username}
				name="username"
				placeholder="Enter username..."
				inputChange={inputChange}
				type="text"
				error={form.errors.name}
			/>

			<Input
				value={form.password}
				name="password"
				placeholder="Enter password..."
				inputChange={inputChange}
				type="password"
				error={form.errors.password}
			/>
			<Button buttonText="login" onclick={login} type="button" />
		</form>
	);
};
