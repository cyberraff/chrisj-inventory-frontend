import Image from 'next/image';
import { Box, Heading } from '@chakra-ui/react';
import Hero from './components/Hero';

export default function Home() {
	return (
		<main>
			<Box>
				<Hero />
			</Box>
		</main>
	);
}
