'use client';

import {
	Box,
	Flex,
	Avatar,
	HStack,
	Text,
	IconButton,
	Button,
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
	MenuDivider,
	useDisclosure,
	useColorModeValue,
	Stack,
	Heading,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

// interface Props {
// 	children;
// }

const Links = ['Products', 'Orders'];

const NavLink = (props) => {
	const { children } = props;

	return (
		<Box
			as='a'
			px={2}
			py={1}
			rounded={'md'}
			_hover={{
				textDecoration: 'none',
				bg: useColorModeValue('gray.200', 'gray.700'),
			}}
			href={'#'}>
			{children}
		</Box>
	);
};

export default function Simple() {
	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<>
			<Box
				bg={useColorModeValue('white', 'gray.900')}
				px={4}
				textColor={'gray.900'}
				borderBottom={'1px'}
				borderColor={'green.400'}>
				<Flex
					h={16}
					alignItems={'center'}
					justifyContent={'space-between'}>
					<HStack spacing={8} alignItems={'center'}>
						<Box>
							<Heading as={'h2'} textColor={'green.400'}>
								Chrisj
							</Heading>
						</Box>
					</HStack>
					<HStack
						as={'nav'}
						spacing={4}
						fontSize={'2xl'}
						display={{ base: 'none', md: 'flex' }}>
						{Links.map((link) => (
							<NavLink key={link}>{link}</NavLink>
						))}
					</HStack>
				</Flex>
			</Box>
		</>
	);
}
