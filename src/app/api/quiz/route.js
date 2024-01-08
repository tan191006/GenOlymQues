export async function POST (request){
	// get topic from request body
	const body = await request.json();
	const { topic: topics = [] } = body;

	return new Response(JSON.stringify({topics: topics}), {
			headers: { 'content-type': 'application/json' },
	});
} 
