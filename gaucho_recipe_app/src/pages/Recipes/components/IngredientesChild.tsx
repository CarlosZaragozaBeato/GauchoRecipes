import { Link } from "react-router-dom";
import { RecipesContext } from "../../../Context/Context";
import { Ingredientes } from "../../../model/Ingredientes";
import ingredientImage from '../../../static/images/ingredients.png';
import { ROUTES } from "../../../utils/Routes";
import {useContext} from 'react'


const IngredientesChild = ({ingredienteId,
    tipo,nombre,kcal,proteinas,grasas,hidratosCarbono,calcio,magnesio,potasio,fosforo}:Ingredientes)=> {

        const {setIngredientId} = useContext(RecipesContext)


    return (
        
        <Link 
        to={{
            pathname:ROUTES.INGREDIENT}} 
            onClick={()=>setIngredientId(ingredienteId)} className="flex flex-col items-center  w-48   justify-center py-5 px-0 bg-header_card_color rounded-2xl opacity-60 hover:opacity-100">

            <img src={ingredientImage} alt={nombre}/>
            <h1>{nombre}</h1>

        </Link>
    )

}
export default IngredientesChild;