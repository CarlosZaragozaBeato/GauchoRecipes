import axios from "axios";
import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { RecipesContext } from "../../Context/Context";
import { ROUTES } from "../../utils/Routes";
import IngredientType from "./components/IngredientType";
import SearchIngredient from "./components/search/SearchIngredient";

const Ingredients = () => {
  const {
    listaIngredientes,
    setListaIngredientes,
    setRoute,
    listaIngredientesFiltrada,
  } = useContext(RecipesContext);

  setRoute(ROUTES.INGREDIENTS);

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
      .get("http://localhost:8085/api/ingredientes/all", config)
      .then((response) => {
        setListaIngredientes(response.data);

      })
      .catch((e) => {});
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <main className="w-5/5">
      <div className="flex justify-between w-full sm:flex-col md:flex-row">
        <Link
          to={ROUTES.CREATE_INGREDIENT}
          className="bg-black_color text-red font-semibold self-center  px-5 py-2 md:ml-2 sm:mb-5 md:mb-0 rounded-md opacity-60 hover:opacity-100"
        >
          CREATE
        </Link>
        <SearchIngredient />
      </div>

      <div className="sm:flex-col md:flex-row flex flex-wrap justify-center">
        {listaIngredientesFiltrada.length === 0
          ? listaIngredientes.map((item) => (
              <IngredientType
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
                tipo={item.tipo}
              />
            ))
          : listaIngredientesFiltrada.map((item) => (
              <IngredientType
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
                tipo={item.tipo}
              />
            ))}
      </div>
    </main>
  );
};
export default Ingredients;
