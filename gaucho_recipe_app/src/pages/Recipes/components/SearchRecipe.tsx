import { RecipesContext } from "../../../Context/Context";

import {useContext, FormEvent} from 'react'

const SearchRecipe = () => {
    const {
      setFiltroReceta,
      setListaRecetasFiltrada,
      listaRecetas,
      filtroReceta,
    } = useContext(RecipesContext);
  
    const prevent = (e: FormEvent) => {
      e.preventDefault();
    };
  
    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
      setFiltroReceta(event.target.value);
    }
  
    function filtrarLista() {
      setListaRecetasFiltrada(
        listaRecetas.filter((item) => {
          return item.nombre.toLowerCase() === filtroReceta.toLowerCase();
        })
      );
    }
  
    return (
      <>
        <form
          className="flex flex-wrap flex-shrink justify-end  pr-5"
          onSubmit={prevent}
        >
          <button
            onClick={filtrarLista}
            className="bg-red text-black_color py-2.5 px-5 font-semibold opacity-50 transition-opacity duration-300 hover:opacity-100"
          >
            Search
          </button>
          <input
            type="text"
            className="outline-none p-2.5"
            onChange={handleChange}
          />
        </form>
      </>
    );
  };
  
  export default SearchRecipe;
  