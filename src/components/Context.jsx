import {getRecipeFromMistral} from "../huggingfaceModel.js"
import remarkGfm from 'remark-gfm';
import Markdown from 'react-markdown'
import {useState} from "react";
export default function Context(props){
    const [recipe , setRecipe] = useState("")
     async function handleRecipe(){
        const recipeResponse =  await getRecipeFromMistral(props.ingredients)
         console.log(recipeResponse)
         setRecipe(recipeResponse)
    }

    return(
        <>
            <ul className="text-slate-300 list-disc md:text-2xl flex flex-wrap gap-8 justify-center px-10 w-full items-start lg:items-center ">
                {props.listOfIngredients}
            </ul>
            {props.ingredients.length >= 4 ?< section className="bg-emerald-800 min-w-80 rounded-md flex h-20 items-center justify-around">
                <h3 className="text-slate-300">Ready to get your recipe</h3>
                <button onClick={handleRecipe} className="hover:bg-blue-400 transition bg-slate-300 duration-100 py-2 px-6 rounded-md">Go</button>
                </section> : undefined}

            <Markdown remarkPlugins={[remarkGfm]} className= "text-slate-300 mark flex flex-col gap-5 items-center justify-center m-8">
                {recipe ? recipe : null}
            </Markdown>

        </>
)
}