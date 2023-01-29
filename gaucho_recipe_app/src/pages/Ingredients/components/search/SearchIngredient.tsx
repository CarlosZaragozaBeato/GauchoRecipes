import { FormEvent, useContext } from "react";
import { RecipesContext } from "../../../../Context/Context";

const SearchIngredient = () => {
  const {
    setFiltro,
    setListaIngredientesFiltrada,
    listaIngredientes,
    filtro,
  } = useContext(RecipesContext);

  const prevent = (e: FormEvent) => {
    e.preventDefault();
  };

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setFiltro(event.target.value);
  }

  function filtrarLista() {
    setListaIngredientesFiltrada(
      listaIngredientes.filter((item) => {
        return item.nombre.toLowerCase() === filtro.toLowerCase();
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

export default SearchIngredient;
