import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addFriend } from '../../redux/actions';
import { Input, Button } from '../../components/Form';

const FriendFormView = props => {
	const { addFriend } = props;
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
		const newFriend = {
			name: form.name,
			email: form.email,
			age: parseInt(form.age, 10)
		};
		addFriend(newFriend).then(res => {
			setFormValues({
				name: '',
				email: '',
				age: '',
				errors: {}
			});

			// Redirect to all friends page
			props.history.push('/friends');
		});
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
				name="age"
				placeholder="Enter Friend age..."
				inputChange={inputChange}
				type="text"
				error={form.errors.age}
			/>
			<Button buttonText="Add Friend" onclick={AddNewFriend} type="button" />
		</form>
	);
};

export default connect(null, { addFriend })(FriendFormView);
