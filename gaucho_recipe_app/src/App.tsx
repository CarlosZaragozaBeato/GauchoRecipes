import React,{useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ROUTES } from './utils/Routes';
import { RecipesContext, tipos } from './Context/Context';
import NavBar from './Components/NavBar/NavBar';
import Home from './pages/Home/Home';
import Error from './pages/Error/Error';
import Recipes from './pages/Recipes/Recipes';
import { Recetas } from './model/Recetas';
import Ingredients from './pages/Ingredients/Ingredients';
import { Ingredientes } from './model/Ingredientes';
import Ingredient from './pages/Ingredients/components/Ingredient/Ingredient';
import CreateIngredient from './pages/Ingredients/components/create/CreateIngredient';
import CreateRecipe from './pages/Recipes/components/CreateRecipe';
import Recipe from './pages/Recipes/components/Recipe';
import DetalleRecetas from './pages/DetalleRecetas/DetalleRecetas';


function App() {
  const [route, setRoute] = useState<string>(ROUTES.HOME)
  const [listaRecetas,setListaRecetas] = useState<Recetas[]>([])
  const [listaRecetasFiltrada,setListaRecetasFiltrada] = useState<Recetas[]>([])
  const [listaIngredientes, setListaIngredientes] = useState<Ingredientes[]>([])
  const [listaIngredientesFiltrada,setListaIngredientesFiltrada] = useState<Ingredientes[]>([])
  const [filtro,setFiltro] = useState<string>("")
  const [filtroReceta,setFiltroReceta] = useState<string>("")
  const [ingredientId, setIngredientId] = useState<number | null>(null)
  const [recetaId, setRecetaId] = useState<number | null>(null)
  const [ingredienteElegido,setIIngredienteElegido] = useState<Ingredientes[]>([])

  let valores:tipos = {
    route:route,
    setRoute:setRoute,
    listaRecetas:listaRecetas,
    setListaRecetas:setListaRecetas,
    listaRecetasFiltrada:listaRecetasFiltrada,
    setListaRecetasFiltrada:setListaRecetasFiltrada,
    listaIngredientes:listaIngredientes,
    setListaIngredientes:setListaIngredientes,
    listaIngredientesFiltrada:listaIngredientesFiltrada,
    setListaIngredientesFiltrada:setListaIngredientesFiltrada,
    filtro:filtro,
    setFiltro:setFiltro,
    ingredientId:ingredientId,
    setIngredientId:setIngredientId,
    recetaId:recetaId,
    setRecetaId:setRecetaId,
    filtroReceta:filtroReceta,
    setFiltroReceta:setFiltroReceta,
    ingredienteElegido:ingredienteElegido,
    setIngredienteElegido:setIIngredienteElegido
  }

  return (
    <>
      <Router>
        <RecipesContext.Provider value={valores}> 
          <NavBar/>
          <Routes>
            <Route path={ROUTES.HOME} element={<Home/>}/>
            <Route path={ROUTES.RECIPES} element={<Recipes/>}/>
            <Route path={ROUTES.INGREDIENTS} element={<Ingredients/>}/>
            <Route path={ROUTES.INGREDIENT} element={<Ingredient/>}/>
            <Route path={ROUTES.CREATE_INGREDIENT} element={<CreateIngredient/>}/>
            <Route path={ROUTES.CREATE_RECIPE} element={<CreateRecipe/>}/>
            <Route path={ROUTES.RECIPE} element={<Recipe/>}/>
            <Route path={ROUTES.DETALLE_RECETAS} element={<DetalleRecetas/>}/>
            <Route path="*" element={<Error/>} />
          </Routes>
        </RecipesContext.Provider>
      </Router>
    </>
  );
}

export default App;
