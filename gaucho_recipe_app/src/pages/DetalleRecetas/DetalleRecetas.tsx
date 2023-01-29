import { RecipesContext } from "../../Context/Context";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import ingredientImg from "../../static/images/ingredients.png";
import { Ingredientes } from "../../model/Ingredientes";
import IngredientesDeLaReceta from "./components/IngredientesDeLaReceta";
import TodosLosIngredientes from "./components/TodosLosIngredientes";

const DetalleRecetas = () => {
  const { recetaId, listaIngredientes, setListaIngredientes } =
    useContext(RecipesContext);

  useEffect(() => {
      getIngredients(); 
  }, []);

  async function getIngredients() {
    await axios
      .get("http://localhost:8085/api/ingredientes/all", config)
      .then((response) => {
        setListaIngredientes(response.data);
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
    <main className="flex flex-col justify-between pb-5">

        {listaIngredientes.length !== 0?(
            <>
                <IngredientesDeLaReceta/>
                <TodosLosIngredientes />
            </>
        ):("")}

    </main>
  );
};
export default DetalleRecetas;
