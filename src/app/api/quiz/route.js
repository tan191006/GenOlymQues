import { genQuestion } from "@/app/lib/openai";

export async function POST (request){
	// get topic from request body
	const body = await request.json();
	const { topic: topics = [] } = body;

	const res = {
		topics,
		questions: genQuestion(topics),
	};

	return new Response(JSON.stringify(res), {
		headers: { 'content-type': 'application/json' },
	});
} 
