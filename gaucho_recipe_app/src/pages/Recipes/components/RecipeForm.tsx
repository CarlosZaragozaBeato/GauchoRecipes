import axios from "axios";
import { useState, FormEvent, useContext } from "react";
import { useNavigate } from "react-router";
import { RecipesContext } from "../../../Context/Context";
import { Recetas } from "../../../model/Recetas";

const RecipeForm = ({nombre,kcal,recetaId}:Recetas) => {
  
  
  
    const [nombreForm, setNombre] = useState<string>(nombre)
    const [kcalForm, setKcal] = useState<number>(kcal)
    


    const {setListaIngredientesFiltrada} = useContext(RecipesContext)
    
	const navigate = useNavigate();
	const goBack = () => {
		navigate(-1);
	}


    async function update (){
        await axios({
          method: 'put',
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
          },
          url: 'http://localhost:8085/api/recetas/update',
          data: {
            recetaId:recetaId,
            nombre:nombreForm,
            kcal:kcalForm       
          }
      });
    }
          async function deleteRecipe(){
        await axios({
          method: 'delete',
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
          },
          url: `http://localhost:8085/api/recetas/delete/${recetaId}`,
      });
      goBack();
      setListaIngredientesFiltrada([])
      }   
       const prevent = (e: FormEvent) => {
        e.preventDefault();
      };
  
  
  
    return (
    <div className="sm:w5/5 md:w-2/5 bg-light_green_color m-5">
      <div className="bg-white_color p-5 h-5"></div>

      <div className="p-5">
        <h3 className="text-2xl mb-5 font-bold">Propiedades</h3>

        <form
          className="w-full md:pl-10 s:pl-0 flex justify-between sm:flex-col "
          onSubmit={prevent}
        >
          <p className="text-xl py-1">
            Nombre:{" "}
            <input
              type="text"
              value={nombreForm}
              onChange={(event) => setNombre(event.target.value)}
              className="text-black_color font-semibold border-2 outline-0 md:w-2/5 sm:3/5 text-center"
            />
          </p>

          <p className="text-xl py-1">
            kcal:{" "}
            <input
              type="text"
              value={kcalForm}
              onChange={(event) => setKcal(parseInt(event.target.value))}
              className="text-black_color font-semibold border-2 outline-0 w-20 text-center "
            />
          </p>

          <div className="flex justify-center flex-col gap-5 sm:mt-10">
            <button
              onClick={update}
              className="bg-green_color px-5 py-2 sm:w3/5 md:w-fit opacity-60 hover:opacity-100 rounded-sm border-2 border-black_color font-bold text-xl"
            >
              ACTUALIZAR
            </button>

            <button
              onClick={deleteRecipe}
              className="bg-green_color px-5 py-2 sm:w3/5 md:w-fit opacity-60 hover:opacity-100 rounded-sm border-2 border-black_color font-bold text-xl"
            >
              BORRAR
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default RecipeForm;
