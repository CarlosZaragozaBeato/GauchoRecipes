import { RecipesContext } from "../../Context/Context";
import { useContext, useEffect } from "react";
import { ROUTES } from "../../utils/Routes";
import axios from "axios";
import RecetasChild from "../Ingredients/components/Ingredient/components/RecetasChild";
import { Link } from "react-router-dom";
import SearchRecipe from "./components/SearchRecipe";

const Recipes = () => {
  const { setRoute, listaRecetas, listaRecetasFiltrada, setListaRecetas } =
    useContext(RecipesContext);

  setRoute(ROUTES.RECIPES);

  const config = {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    },
    withCredentials: false,
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  async function getData() {
    await axios
      .get("http://localhost:8085/api/recetas/all", config)
      .then((response) => {
        setListaRecetas(response.data);
      })
      .catch((e) => {});
  }

  

  useEffect(() => {
    getData();
  }, []);

  return (
    <main className="">
      <div className="flex justify-between sm:flex-col md:flex-row sm:my-5">
        
          <Link
            to={ROUTES.CREATE_RECIPE}
            className="bg-black_color text-red font-semibold self-center  px-5 py-2 md:ml-2 sm:mb-5 md:mb-0 rounded-md opacity-60 hover:opacity-100">
            CREATE
          </Link>

        <SearchRecipe />
      </div>

      <div className="flex flex-row flex-wrap gap-5 h-fit items-center justify-center mt-20">
        {
        listaRecetasFiltrada.length===0?
        listaRecetas.map((item) => (
          <RecetasChild
          key={item.recetaId}
            kcal={item.kcal}
            nombre={item.nombre}
            recetaId={item.recetaId}
          />
        )):
        listaRecetasFiltrada.map((item) => (
          <RecetasChild
          key={item.recetaId}
            kcal={item.kcal}
            nombre={item.nombre}
            recetaId={item.recetaId}
          />
        ))}
      </div>
    </main>
  );
};
export default Recipes;
