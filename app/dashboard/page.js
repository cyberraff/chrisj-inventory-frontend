import { Box, Center, Grid, GridItem, HStack, VStack } from '@chakra-ui/react';
import Link from 'next/link';

export default function Dashboard() {
	const linkss = [
		{ name: 'Products', url: '/products' },
		{ name: 'Orders', url: '/products' },
		{ name: 'Update Product', url: '/products' },
		{ name: 'Users', url: '/products' },
	];
	return (
		<Box>
			<Box>
				<Grid
					mx={'auto'}
					my={20}
					h={'40rem'}
					w={'50rem'}
					templateRows='repeat(2, 1fr)'
					templateColumns='repeat(2, 1fr)'
					gap={4}>
					{linkss.map((link) => (
						<GridItem key={link} bg='green.100' rounded='xl'>
							<Center
								h={'100%'}
								fontSize={'4xl'}
								fontWeight={'bold'}>
								<Link href={link.url}>{link.name}</Link>
							</Center>
						</GridItem>
					))}
				</Grid>
			</Box>
		</Box>
	);
}
