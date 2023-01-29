import {createContext} from 'react';
import { Ingredientes } from '../model/Ingredientes';
import { Recetas } from '../model/Recetas';


export interface tipos {
    route: string,
    setRoute:(c: string) => void,
    listaRecetas: Recetas[] | [],
    setListaRecetas:(rct:Recetas[])=>void,
    listaRecetasFiltrada: Recetas[] | [],
    setListaRecetasFiltrada:(rct:Recetas[])=>void,
    listaIngredientes:Ingredientes[] | [], 
    setListaIngredientes:(ing:Ingredientes[]) => void,
    listaIngredientesFiltrada:Ingredientes[],
    setListaIngredientesFiltrada:(ing:Ingredientes[])=>void,
    filtro:String,
    setFiltro:(c: string) => void,
    ingredientId:number | null,
    setIngredientId:(c: number ) => void,
    recetaId:number | null,
    setRecetaId:(c: number ) => void,
    filtroReceta:String,
    setFiltroReceta:(c: string) => void,
    ingredienteElegido:Ingredientes[],
    setIngredienteElegido:(ing:Ingredientes[])=>void,
}

let initialState:tipos = {
    route: '',
    setRoute: ()=>{},
    listaRecetas: [],
    setListaRecetas:()=>{},
    listaRecetasFiltrada: [],
    setListaRecetasFiltrada:()=>{},
    listaIngredientes:[],
    setListaIngredientes:()=>{},
    listaIngredientesFiltrada:[],
    setListaIngredientesFiltrada:()=>{},
    filtro:"",
    setFiltro:()=>{},
    ingredientId:-1,
    setIngredientId:()=>{},
    recetaId:-1,
    setRecetaId:()=>{},
    filtroReceta:"",
    setFiltroReceta:()=>{},
    ingredienteElegido:[],
    setIngredienteElegido:()=>{}
}




export const RecipesContext = createContext<typeof initialState>(initialState);
