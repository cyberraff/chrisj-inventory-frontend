import {
	Flex,
	Box,
	FormControl,
	FormLabel,
	Input,
	Checkbox,
	Stack,
	Button,
	Heading,
	Text,
	useColorModeValue,
} from '@chakra-ui/react';
import axios from 'axios';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const LoginForm = ({ onLogin }) => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const [formData, setFormData] = useState({ name: '', email: '' });
	const [response, setResponse] = useState('');
	const [loggedIn, setLoggedIn] = useState(false);
	const router = useRouter();

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleLogin = async () => {
		try {
			const response = await fetch(
				'https://chrisj-inventory-backend.onrender.com/api/v1/auth/login',
				{
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: formData,
				},
			);
			console.log(formData);

			if (response.ok) {
				const data = await response.json();
				onLogin(data); // Pass the user and token to a parent component
			} else {
				console.error('Login failed');
			}
		} catch (error) {
			console.error('Error:', error);
		}
	};

	return (
		// <div>
		// 	<input
		// 		type='text'
		// 		placeholder='Username'
		// 		value={username}
		// 		onChange={(e) => setUsername(e.target.value)}
		// 	/>
		// 	<input
		// 		type='password'
		// 		placeholder='Password'
		// 		value={password}
		// 		onChange={(e) => setPassword(e.target.value)}
		// 	/>
		// 	<button onClick={handleLogin}>Login</button>
		// </div>
		<Flex
			minH={'90vh'}
			align={'center'}
			justify={'center'}
			bg={useColorModeValue('gray.50', 'gray.800')}>
			<Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
				<Stack align={'center'}>
					<Heading fontSize={'4xl'}>Sign in to your account</Heading>
				</Stack>
				<Box
					rounded={'lg'}
					bg={useColorModeValue('white', 'gray.700')}
					boxShadow={'lg'}
					p={8}>
					<Stack spacing={4}>
						<form action={handleLogin}>
							<FormControl id='email'>
								<FormLabel>Email address</FormLabel>
								<Input
									type='email'
									name='email'
									placeholder='Email'
									value={formData.email}
									onChange={handleInputChange}
									required
								/>
							</FormControl>
							<FormControl id='password' mt='2'>
								<FormLabel>Password</FormLabel>
								<Input
									type='password'
									name='password'
									placeholder='Password'
									value={formData.password}
									onChange={handleInputChange}
									required
								/>
							</FormControl>

							<Button
								mt='4'
								bg={'green.400'}
								color={'white'}
								_hover={{
									bg: 'green.500',
								}}
								type='submit'>
								Sign in
							</Button>
						</form>
					</Stack>
				</Box>
				<Box fontSize={'lg'}>{response}</Box>
			</Stack>
		</Flex>
	);
};

export default LoginForm;
