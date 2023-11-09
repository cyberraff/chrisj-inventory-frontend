'use client';
import LoginForm from '../components/LoginForm';

const LoginPage = () => {
	const handleLogin = (data) => {
		// Store the token and user data in local storage or cookies
		localStorage.setItem('token', data.token);
		// Optionally, save the user object to state or context for easy access
		// setUser(data.user);
	};

	return (
		<div>
			<h2>Login</h2>
			<LoginForm onLogin={handleLogin} />
		</div>
	);
};

export default LoginPage;

// // export default function Login() {
// // 	return <div>Enter</div>;
// // }

// 'use client';

// import {
// 	Flex,
// 	Box,
// 	FormControl,
// 	FormLabel,
// 	Input,
// 	Checkbox,
// 	Stack,
// 	Button,
// 	Heading,
// 	Text,
// 	useColorModeValue,
// } from '@chakra-ui/react';
// import axios from 'axios';
// import { useState } from 'react';
// import { useRouter } from 'next/navigation';

// export default function Login() {
// 	const [formData, setFormData] = useState({ name: '', email: '' });
// 	const [response, setResponse] = useState('');
// 	const [loggedIn, setLoggedIn] = useState(false);
// 	const router = useRouter();

// 	const handleInputChange = (e) => {
// 		const { name, value } = e.target;
// 		setFormData({ ...formData, [name]: value });
// 	};

// 	const handleSubmit = async (e) => {
// 		// e.preventDefault();
// 		try {
// 			const response = await axios.post(
// 				'https://chrisj-inventory-backend.onrender.com/api/v1/auth/login',
// 				formData,
// 			);
// 			setResponse(response.data.message); // Assuming your API sends a message upon success.
// 			if (response.status === 200) {
// 				setLoggedIn(true);

// 				// Redirect the user to the dashboard page
// 				router.push('/dashboard');
// 			}
// 			console.log(response);
// 		} catch (error) {
// 			setResponse('Error: ' + error.message);
// 		}
// 	};

// 	return (
// 		<Flex
// 			minH={'90vh'}
// 			align={'center'}
// 			justify={'center'}
// 			bg={useColorModeValue('gray.50', 'gray.800')}>
// 			<Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
// 				<Stack align={'center'}>
// 					<Heading fontSize={'4xl'}>Sign in to your account</Heading>
// 				</Stack>
// 				<Box
// 					rounded={'lg'}
// 					bg={useColorModeValue('white', 'gray.700')}
// 					boxShadow={'lg'}
// 					p={8}>
// 					<Stack spacing={4}>
// 						<form action={handleSubmit} method='post'>
// 							<FormControl id='email'>
// 								<FormLabel>Email address</FormLabel>
// 								<Input
// 									type='email'
// 									name='email'
// 									placeholder='Email'
// 									value={formData.email}
// 									onChange={handleInputChange}
// 								/>
// 							</FormControl>
// 							<FormControl id='password'>
// 								<FormLabel>Password</FormLabel>
// 								<Input
// 									type='password'
// 									name='password'
// 									placeholder='Password'
// 									value={formData.password}
// 									onChange={handleInputChange}
// 								/>
// 							</FormControl>

// 							<Button
// 								bg={'green.400'}
// 								color={'white'}
// 								_hover={{
// 									bg: 'green.500',
// 								}}
// 								type='submit'>
// 								Sign in
// 							</Button>
// 						</form>
// 					</Stack>
// 				</Box>
// 				<Box fontSize={'lg'}>{response}</Box>
// 			</Stack>
// 		</Flex>
// 	);
// }

// // const loginAccount = async (formData) => {
// // 	// 'use server';

// // 	// const name = formData.get('name');
// // 	const email = formData.get('email');
// // 	const password = formData.get('password');

// // 	try {
// // 		const response = await fetch(
// // 			'https://chrisj-inventory-backend.onrender.com/api/v1/auth/login',
// // 			{
// // 				method: 'POST',
// // 				body: formData,
// // 			},
// // 		);

// // 		if (response.ok) {
// // 			const responseData = await response.json();
// // 			console.log('Form submitted:', responseData);
// // 		} else {
// // 			console.error('Error:', response.status, response);
// // 		}
// // 	} catch (error) {
// // 		console.error('Error:', error);
// // 	}

// // try {
// // 	const response = await axios.post(
// // 		'https://chrisj-inventory-backend.onrender.com/api/v1/auth/login',
// // 		{ email: email, password: password },
// // 		{
// // 			headers: {
// // 				'Content-Type': 'multipart/form-data', // Important for sending form data
// // 			},
// // 		},
// // 	);

// // 	console.log('Form submitted:', response.data);
// // } catch (error) {
// // 	console.error('Error:', error);
// // }

// // const { data } = await axios.post(
// // 	'https://chrisj-inventory-backend.onrender.com/api/v1/auth/login',
// // 	{
// // 		email: email,
// // 		password: password,
// // 	},
// // 	{
// // 		headers: {
// // 			'Content-Type': 'multipart/form-data',
// // 		},
// // 	},
// // );

// // 	console.log({ email, password });
// // };
