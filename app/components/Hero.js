'use client';

import Head from 'next/head';
import {
	Box,
	Heading,
	Container,
	Text,
	Button,
	Stack,
	Icon,
	useColorModeValue,
	createIcon,
} from '@chakra-ui/react';
import Link from 'next/link';

export default function CallToActionWithAnnotation() {
	return (
		<>
			<Container maxW={'3xl'}>
				<Stack

					textAlign={'center'}
					spacing={{ base: 8, md: 14 }}
					py={56}>
					<Heading
						fontWeight={600}
						fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
						lineHeight={'110%'}>
						ChrisJ <br />
						<Text  color={'green.400'}>
							Super Market
						</Text>
					</Heading>
					<Text color={'gray.500'} fontSize={'2xl'}>
						Your one stop shop for all your grocery needs. etcetera
					</Text>
					<Stack
						direction={'column'}
						spacing={3}
						align={'center'}
						alignSelf={'center'}
						position={'relative'}>
						<Link href={'login'}>
							<Button
								w={'56'}
								h={'12'}
								textDecoration={'none'}
								textColor={'white'}
								fontSize={'2xl'}
								colorScheme={'green'}
								bg={'green.400'}
								rounded={'full'}
								px={6}
								_hover={{
									bg: 'green.500',
								}}>
								Login
							</Button>
						</Link>
					</Stack>
				</Stack>
			</Container>
		</>
	);
}
