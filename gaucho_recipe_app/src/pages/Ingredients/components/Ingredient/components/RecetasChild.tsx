import { Link } from "react-router-dom";
import { RecipesContext } from "../../../../../Context/Context";
import { Recetas } from "../../../../../model/Recetas";
import recipeImg from '../../../../../static/images/recipe_book.png' 
import { ROUTES } from "../../../../../utils/Routes";
import {useContext} from 'react'

const RecetasChild = ({kcal, nombre, recetaId}:Recetas
) => {

    const {setRecetaId} = useContext(RecipesContext)


    return (
        <Link to={ROUTES.RECIPE} onClick={()=>setRecetaId(recetaId)} className="flex flex-col items-center  min-w-max w-1/6  justify-center p-5 bg-header_card_color rounded-2xl opacity-60 hover:opacity-100">
            <img src={recipeImg} alt="recipe" className="w-20 h-20"/>
            <h3 className="text-xl font-bold">{nombre}</h3>
        </Link>

    );

}
export default RecetasChild;