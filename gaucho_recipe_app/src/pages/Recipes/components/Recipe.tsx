import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { RecipesContext } from "../../../Context/Context";
import { Ingredientes } from "../../../model/Ingredientes";
import { Recetas } from "../../../model/Recetas";
import { ROUTES } from "../../../utils/Routes";
import IngredientesChild from "./IngredientesChild";
import RecipeForm from "./RecipeForm";

const Recipe = () => {
  const { recetaId, listaRecetas, setRecetaId,setListaRecetas} = useContext(RecipesContext);


  const navigate = useNavigate();
  const goBack = () => {
      navigate(-1);
  }

const [rct, setRct] = useState<Recetas[]>([]);
const [listaIngredientesFilteredByRecetaId,setListaRecetasFilteredByIngredientId] = useState<Ingredientes[]>([])



  useEffect(() => {

    if(recetaId===null){
      goBack();
    }
 
    getIngredient();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);


useEffect(()=>{
  getData()
},[rct])


  async function getIngredient() {
    getRecipes()
    setRct(listaRecetas.filter((item) => {
        return item.recetaId === recetaId;
      }))
  }


  async function getRecipes() {
    await axios
      .get("http://localhost:8085/api/recetas/all", config)
      .then((response) => {
        setListaRecetas(response.data);
      })
      .catch((e) => {});
  }




  async function getData() {

    if (rct.length!==0){
      await axios
      .get(`http://localhost:8085/api/detallerecetas/recetaId/${rct[0].recetaId}`, config)
      .then((response) => {
        if(response.data.length !== 0){
          setListaRecetasFilteredByIngredientId(response.data)
        }
      })
      .catch((e) => {});
    } 
  }

  const config = {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    },
    withCredentials: false,
  };

  return (
    <main className=" flex flex-col justify-between">
      <div className="flex sm:flex-col md:flex-row items-center justify-between">
        {rct.length!==0?<RecipeForm kcal={rct[0].kcal}
                    nombre={rct[0].nombre}
                    recetaId={rct[0].recetaId} />:""}
        <Link to={ROUTES.DETALLE_RECETAS} onClick={()=>setRecetaId(rct[0].recetaId)} className="bg-black_color h-fit px-10 py-5 rounded-md border-2 font-bold text-white_color opacity-60
         hover:opacity-100 m-10">DETALLE RECETAS</Link>
      </div>

      <div className="flex flex-wrap mt-10 mx-10 gap-5 md:justify-start sm:justify-center pb-5">
      {listaIngredientesFilteredByRecetaId.length !==0 ?listaIngredientesFilteredByRecetaId!.map(item=> (
              <IngredientesChild
                    key={item.ingredienteId}
                    calcio={item.calcio}
                    fosforo={item.fosforo}
                    grasas={item.grasas}
                    hidratosCarbono={item.hidratosCarbono}
                    ingredienteId={item.ingredienteId}
                    kcal={item.kcal}
                    magnesio={item.magnesio}
                    nombre={item.nombre}
                    potasio={item.potasio}
                    proteinas={item.proteinas}
                    tipo={item.tipo}/>
          )):""}


      </div>
    </main>
  );
};

export default Recipe;
