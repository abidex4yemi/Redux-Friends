import React, { useState } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { login } from '../../redux/actions';
import { Input, Button } from '../../components/Form';

const Login = props => {
	// get login from action creators
	const { login } = props;

	//form state
	const [form, setFormValues] = useState({
		username: '',
		password: '',
		errors: {}
	});

	const inputChange = (field, value) => {
		setFormValues({
			...form,
			[field]: value
		});
	};

	const handleLogin = () => {
		const credentials = {
			username: form.username,
			password: form.password
		};

		login(credentials).then(res => {
			setFormValues({
				username: '',
				password: '',
				errors: {}
			});

			// if logged in successful redirect to friends list
			if (localStorage.getItem('token')) {
				props.history.push('/friends');
			}
		});
	};

	return (
		<main>
			<StyledContainer>
				<StyledForm>
					<h2>login</h2>
					<form>
						<Input
							value={form.username}
							name="username"
							placeholder="Enter username..."
							inputChange={inputChange}
							type="text"
							error={form.errors.username}
						/>

						<Input
							value={form.password}
							name="password"
							placeholder="Enter password..."
							inputChange={inputChange}
							type="password"
							error={form.errors.password}
						/>
						<Button buttonText="login" onclick={handleLogin} type="button" />
					</form>
				</StyledForm>
			</StyledContainer>
		</main>
	);
};

export default connect(null, { login })(Login);

const StyledContainer = styled.div`
	width: 80%;
	margin: 0 auto;
	display: flex;
	justify-content: center;
`;

const StyledForm = styled.div`
	width: 350px;
	border: 1px solid red;
	padding: 2rem;
`;
