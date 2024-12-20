import { useState } from "react"
import Context from "./Context.jsx";


export default function Hero() {
    const [ingredients, setIngredients] = useState([])
    const [recipe, setRecipe] = useState(false)
    const listOfIngredients = ingredients.map((everyIngredient) => {
        return <li key={everyIngredient}>{everyIngredient}</li>
    })


    function handleSubmit(event) {
        event.preventDefault()
        const data = new FormData(event.currentTarget)
        const newIngredient = data.get("newIngredient")
        if (ingredients.includes(newIngredient) === false) {
            setIngredients((prevIngredients) => newIngredient !== '' ? [...prevIngredients, newIngredient] : [...prevIngredients])
        }
        else alert("add unique ingredients")
        event.currentTarget.reset()

    }
    return (
        <> 
            <main className="flex items-center justify-center  min-h-96 flex-col gap-5">
                <div className="text-slate-300 text-4xl font-Right px-8 lg:px-2 text-center lg:text-6xl leading-relaxed">Generate your next recipe by entering ingredients below.</div>
                <div className="flex items-center justify-between">
                    <form action="" onSubmit={handleSubmit} className=" rounded-lg flex  justify-around gap-2 lg:gap-6  flex-wrap" >
                        <input type="text" name="newIngredient" placeholder="Enter your recipes " className="  p-2  bg-opacity-0 bg-emerald-950 rounded-lg border-2 border-gray-400 text-emerald-950 hover:bg-slate-200 focus:bg-slate-200  hover:ease-in transition duration-200 focus:outline-none  w-full " />
                        <input type="submit" value="+ ingridients" className="  bg-slate-300 p-2 px-4 text-gray-900 rounded-lg hover:ease-in duration-100 transition hover:bg-emerald-900 cursor-pointer hover:text-slate-200  " />
                    </form>
                </div>

                {ingredients.length > 0 ? <Context listOfIngredients = {listOfIngredients } ingredients = {ingredients}  /> : null}

            </main >
        </>
    )
}