import { genQuestion } from "@/app/lib/openai";

export async function POST (request){
	// get topic from request body
	const body = await request.json();
	const { topic: topics = [], round = '' } = body;

	const openAIResponse = await genQuestion(topics, round);
	const res = {
		topics,
		...openAIResponse,
	};

	return new Response(JSON.stringify(res), {
		headers: { 'content-type': 'application/json' },
	});
} 
