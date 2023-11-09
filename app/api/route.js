// export async function getServerSideProps() {
// 	try {
// 		const response = await axios.get(
// 			'https://chrisj-inventory-backend.onrender.com/api/v1/products',
// 		);
// 		const data = response.data;
// 		return {
// 			props: { data },
// 		};
// 	} catch (error) {
// 		console.error('Error fetching data:', error);
// 		return {
// 			props: { data: [] }, // Provide an empty array or appropriate default data
// 		};
// 	}
// }

export async function GET() {
	const res = await fetch(
		'https://chrisj-inventory-backend.onrender.com/api/v1/products',
		{
			headers: {
				'Content-Type': 'application/json',
				// 'API-Key': process.env.DATA_API_KEY,
			},
		},
	);
	const data = await res.json();

	return Response.json({ data });
}
