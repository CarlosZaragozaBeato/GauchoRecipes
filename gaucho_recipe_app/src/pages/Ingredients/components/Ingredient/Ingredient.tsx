import { RecipesContext } from "../../../../Context/Context";
import { useContext, useEffect, useState } from "react";
import { Ingredientes } from "../../../../model/Ingredientes";
import IngredientType from "../IngredientType";
import axios from "axios";
import { Recetas } from "../../../../model/Recetas";
import { useNavigate } from "react-router";
import RecetasChild from "./components/RecetasChild";
import IngredientTypeForm from "./components/IngredientTypeForm";

const Ingredient = () => {
  const { ingredientId, listaIngredientes, setListaIngredientes } = useContext(RecipesContext);

  const [ing, setIng] = useState<Ingredientes[]>([]);
  const [listaRecetasFilteredByIngredientId,setListaRecetasFilteredByIngredientId] = useState<Recetas[]>([])


	const navigate = useNavigate();
	const goBack = () => {
		navigate(-1);
	}

  const config = {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    },
    withCredentials: false,
  };



  useEffect(() => {

    if(ingredientId===null){
      goBack();
    }

    getIngredients()
    console.log(ing)
  },[]);

useEffect(()=>{
  getData()
},[ing])



  async function getIngredients() {
    await axios
      .get("http://localhost:8085/api/ingredientes/all", config)
      .then((response) => {
        setListaIngredientes(response.data);
        setIng(listaIngredientes.filter((item) => {
          return item.ingredienteId === ingredientId;
        }))
      })
      .catch((e) => {})
      .finally(()=>{
   
      });
  }


  async function getData() {

    if (ing.length!==0){
      await axios
      .get(`http://localhost:8085/api/detallerecetas/ingredienteId/${ing[0].ingredienteId}`, config)
      .then((response) => {
        if(response.data.length !== 0){
          setListaRecetasFilteredByIngredientId(response.data)
        }
      })
      .catch((e) => {});
    } 
  }


  return (
    <>
     {ing.length !== 0? (
        <main className="flex flex-col items-center">

        <div className="sm:w-full sm:0 md:w-3/5  md:m5 md:flex-row sm:flex-col">
            <IngredientTypeForm
                key={ing[0].ingredienteId}
                calcio={ing[0].calcio}
                fosforo={ing[0].fosforo}
                grasas={ing[0].grasas}
                hidratosCarbono={ing[0].hidratosCarbono}
                ingredienteId={ing[0].ingredienteId}
                kcal={ing[0].kcal}
                magnesio={ing[0].magnesio}
                nombre={ing[0].nombre}
                potasio={ing[0].potasio}
                proteinas={ing[0].proteinas}
                tipo={ing[0].tipo}/>
        </div>

        <div className="flex flex-wrap mt-10 mx-10">
          {listaIngredientes.length !==0 ?listaRecetasFilteredByIngredientId!.map(item=> (
              <RecetasChild kcal={item.kcal}
                            nombre={item.nombre}
                            recetaId={item.recetaId}/>
          )):""}

        </div>
        </main>

    
     ):(<h1>LOADING</h1>)}
    </>
  );
};

export default Ingredient;
