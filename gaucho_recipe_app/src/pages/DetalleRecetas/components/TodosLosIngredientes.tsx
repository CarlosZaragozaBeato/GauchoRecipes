import { Ingredientes } from "../../../model/Ingredientes";
import { useState, useContext, FormEvent } from "react";
import ingredientImg from "../../../static/images/ingredients.png";
import { RecipesContext } from "../../../Context/Context";
import axios from 'axios'


const TodosLosIngredientes = () => {
  const [cantidad, setCantidad] = useState<number>(0);



  const {setIngredienteElegido, ingredienteElegido, listaIngredientes, recetaId } = useContext(RecipesContext);





  const config = {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    },
    withCredentials: false,
  };







  async function update (){
    await axios({
      method: 'put',
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      },
      url: 'http://localhost:8085/api/detallerecetas/update',
      params: { 
        cantidad: 42,
        detalleId:1} 
  });
}



async function deleteRecipe(){
    await axios({
      method: 'delete',
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      },
      url: `http://localhost:8085/api/recetas/detallerecetas/302`,
  });
  }   
   const prevent = (e: FormEvent) => {
    e.preventDefault();
  };




  async function create(){

        await axios({
            method: 'post',
            url: 'http://localhost:8085/api/detallerecetas/create',
            params:{
                cantidad:1,
                recetaId: 1,
                ingredienteId:2
            }
            
        });
    
  }



  return (
    <>
      {listaIngredientes.length !== 0 ? (
        <div>
          <div className=" py-20 px-5">
            <h2 className="text-xl">Todos los Ingredientes</h2>
            <div className="flex justify-between flex-wrap my-10">
              {listaIngredientes.map((item) => (
                <div
                  onClick={() => setIngredienteElegido([item])}
                  className={`bg-light_orange_color py-5 px-10 rounded-xl flex flex-col justify-center items-center 
          ${
            ingredienteElegido.length != 0
              ? item.ingredienteId === ingredienteElegido[0].ingredienteId
                ? "opacity-100"
                : "opacity-50"
              : ""
          } cursor-pointer`}
                >
                  <img src={ingredientImg} alt={item.ingredienteId + ""} />
                  <h3>{item.nombre}</h3>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-end items-end bg-green_color w-fit p-5 rounded-lg ml-5">
            <div className="flex flex-col gap-2">
              <p>
                {ingredienteElegido.length !== 0
                  ? "Ingrediente: " + ingredienteElegido[0].nombre
                  : ""}
              </p>
              <button
                onClick={create}
                className="text-black_color font-semibold border-2 outline-0 px-2 bg-light_green_color  text-center "
              >
                Insertar
              </button>

              <button
                onClick={update}
                className="text-black_color font-semibold border-2 outline-0 px-2 bg-light_green_color  text-center "
              >
                Actualizar
              </button>

              <button
                onClick={deleteRecipe}
                className="text-black_color font-semibold border-2 outline-0 px-2 bg-red  text-center"
              >
                Eliminar
              </button>
            </div>

            <div className="flex flex-col items-end px-5 justify-center gap-2">
              <h2 className="text-xl">Cantidad</h2>
              <input
                type="text"
                value={cantidad}
                disabled
                onChange={(event) => setCantidad(parseInt(event.target.value))}
                className="text-black_color font-semibold border-2 outline-0 w-20 text-center "
              />
              <div className="flex gap-1">
                <button
                  onClick={() => setCantidad(cantidad + 1)}
                  className="text-black_color font-semibold border-2 outline-0 px-2 bg-light_green_color  text-center "
                >
                  +1
                </button>
                <button
                  onClick={() => setCantidad(cantidad > 0 ? cantidad + -1 : 0)}
                  className="text-black_color font-semibold border-2 outline-0 px-2 bg-red  text-center"
                >
                  -1
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default TodosLosIngredientes;
