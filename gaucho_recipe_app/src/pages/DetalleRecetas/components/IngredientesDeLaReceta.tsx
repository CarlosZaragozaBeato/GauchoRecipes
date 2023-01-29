import { RecipesContext } from "../../../Context/Context";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Ingredientes } from "../../../model/Ingredientes";
import ingredientImg from "../../../static/images/ingredients.png"
const IngredientesDeLaReceta = () => {
  const { recetaId,setIngredienteElegido, ingredienteElegido } = useContext(RecipesContext);
  const [
    listaIngredientesFilteredByRecetaId,
    setListaRecetasFilteredByIngredientId,
  ] = useState<Ingredientes[]>([]);

  useEffect(()=>{
    getData()
  },[]);

  async function getData() {
    await axios
      .get(
        `http://localhost:8085/api/detallerecetas/recetaId/${recetaId}`,
        config
      )
      .then((response) => {
        if (response.data.length !== 0) {
          setListaRecetasFilteredByIngredientId(response.data);
        }
      })
      .catch((e) => {});
  }

  const config = {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    },
    withCredentials: false,
  };

  return (
    <div>
      <div>
        <h1 className="my-10 mx-5">Ingredientes en la RECETAS</h1>
        <div className="flex mx-10 my-5 gap-5 flex-wrap">
            {
                listaIngredientesFilteredByRecetaId.length !==0?
                listaIngredientesFilteredByRecetaId.map(item=>(
                    <div
                    onClick={() => setIngredienteElegido([item])}
                    className={`bg-light_orange_color py-5 px-10 rounded-xl flex flex-col justify-center items-center 
            ${
              ingredienteElegido.length !== 0
                ? item.ingredienteId === ingredienteElegido[0].ingredienteId
                  ? "opacity-100"
                  : "opacity-50"
                : ""
            } cursor-pointer`}
                  >
                    <img src={ingredientImg} alt={item.ingredienteId + ""} />
                    <h3>{item.nombre}</h3>
                  </div>
                )):("")
           
            }

        </div>
      </div>
    </div>
  );
};
export default IngredientesDeLaReceta;
