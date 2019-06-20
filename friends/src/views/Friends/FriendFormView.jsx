import React, { useState } from 'react';
import { Input, Button } from '../../components/Form';

export const FriendFormView = () => {
	const [form, setFormValues] = useState({
		name: '',
		email: '',
		age: '',
		errors: {}
	});

	const inputChange = (field, value) => {
		setFormValues({
			...form,
			[field]: value
		});
	};

	const AddNewFriend = () => {
		console.log('login');
	};

	return (
		<form>
			<Input
				value={form.name}
				name="name"
				placeholder="Enter Friend name..."
				inputChange={inputChange}
				type="text"
				error={form.errors.name}
			/>

			<Input
				value={form.email}
				name="email"
				placeholder="Enter Friend email..."
				inputChange={inputChange}
				type="text"
				error={form.errors.email}
			/>

			<Input
				value={form.age}
				name="password"
				placeholder="Enter Friend age..."
				inputChange={inputChange}
				type="text"
				error={form.errors.age}
			/>
			<Button buttonText="Add Friend" onclick={AddNewFriend} type="button" />
		</form>
	);
};
