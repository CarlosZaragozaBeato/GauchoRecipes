import axios from "axios";
import { useContext, useEffect} from "react";
import { Link, Route } from "react-router-dom";
import { RecipesContext } from "../../../Context/Context";
import { Ingredientes } from "../../../model/Ingredientes";
import { ROUTES } from "../../../utils/Routes";



const IngredientType = ({ingredienteId,
    tipo,nombre,kcal,proteinas,grasas,hidratosCarbono,calcio,magnesio,potasio,fosforo}:Ingredientes) => {
    
    
        const {setIngredientId} = useContext(RecipesContext)
    
    
        return (
        <>
            <Link 
                to={{
                    pathname:ROUTES.INGREDIENT}} 
                    onClick={()=>setIngredientId(ingredienteId)}
                 className="sm:w-5/5  md:w-2/5 lg:w-1/5 bg-red m-5 opacity-60 hover:opacity-100">
                <div className="bg-white_color p-5">
                    <h2 className="text-2xl font-semibold">Nombre: <span className="text-black_color">{nombre}</span></h2>
                    <p className="font-extrabold">{tipo}</p>
                </div>

                <div className="p-5">
                <h3 className="text-2xl mb-5 font-bold
                ">Propiedades</h3>

                    <div className="">
                        <p className="text-xl py-1">kcal: <span className="text-black_color font-semibold">{kcal}</span></p>
                        
                        <p className="text-xl py-1">proteinas: <span className="text-black_color font-semibold">{proteinas}</span></p>

                        <p className="text-xl py-1">grasas: <span className="text-black_color font-semibold">{grasas}</span></p>

                        <p className="text-xl py-1">Hidratos de Carbono: <span className="text-black_color font-semibold">{hidratosCarbono}</span></p>
 
                        <p className="text-xl py-1">calcio: <span className="text-black_color font-semibold">{calcio}</span></p>

                        <p className="text-xl py-1">magnesio: <span className="text-black_color font-semibold">{magnesio}</span></p>

                        <p className="text-xl py-1">potasio: <span className="text-black_color font-semibold">{potasio}</span></p>

                        <p className="text-xl py-1">fosforo: <span className="text-black_color font-semibold">{fosforo}</span></p>
                </div>

                </div>

            </Link>
        </>)
}

export default IngredientType