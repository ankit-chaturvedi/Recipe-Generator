import { HfInference } from "@huggingface/inference";

const API_key = "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";

const hf = new HfInference(API_key);
const SYSTEM_PROMPT = " you are a recipe generator. The user will give you at least 4 recipes from which you have to genearte a recipe. you can add a few basic ingredients. Return the recipe in markdown file format but do not mention the word markdown to the user. headings should be larger than content"


export async function getRecipeFromMistral(ingredients) {
    const ingredientsString = ingredients.join(", ")
    try {
        const response = await hf.chatCompletion({
            model: "mistralai/Mixtral-8x7B-Instruct-v0.1",
            messages: [
                {role: "system", content: SYSTEM_PROMPT},
                {
                    role: "user",
                    content: `I have ${ingredientsString}. Please give me a recipe you'd recommend I make!`
                },
            ],
            max_tokens: 1024,
        })
        return response.choices[0].message.content
    } catch (err) {
        console.error(err.message.content)
    }
}
