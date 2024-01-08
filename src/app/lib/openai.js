import OpenAI from 'openai';

import {
	getWarmUpRoutePrompt
} from './prompt';

const API_KEY = process.env.OPENAI_API_KEY;

const openai = new OpenAI({
	apiKey: API_KEY,
});

const getPrompt = (topics, round) => {
	const promptMap = {
		"WARM_UP": getWarmUpRoutePrompt
	};

	return promptMap[round](topics);
}

export const genQuestion = async (topics, round) => {
	// get prompt 
	const prompt = getPrompt(topics, round);

	// gen response from openAI
	const chatCompletion = await openai.chat.completions.create({
		messages: [{
			role: 'user',
			content: prompt,
		}],
		model: 'gpt-4',
		temperature: 1,
	});

	const responseText = chatCompletion.choices[0].message.content;

	// process response to get json data
	const firstOpenBraceIndex = responseText.indexOf('{');
	const lastCloseBraceIndex = responseText.lastIndexOf('}');

	const responseJson = responseText.substring(firstOpenBraceIndex, lastCloseBraceIndex + 1);
	return JSON.parse(responseJson);
};
