import { Ingredientes } from "../../../../../model/Ingredientes";
import {FormEvent, useState, useContext} from 'react';
import axios from "axios";
import { useNavigate } from "react-router";
import { RecipesContext } from "../../../../../Context/Context";


const IngredientTypeForm = ({
  ingredienteId,
  tipo,
  nombre,
  kcal,
  proteinas,
  grasas,
  hidratosCarbono,
  calcio,
  magnesio,
  potasio,
  fosforo,
}: Ingredientes) => {



  const {setListaIngredientesFiltrada} = useContext(RecipesContext)



    const [tipoForm, setTipoForm] = useState<string>(tipo)
    const [nombreForm, setNombreForm] = useState<string>(nombre)
    const [kcalForm, setKcalForm] = useState<number>(kcal)
    const [proteinasForm, setProteinasForm] = useState<number>(proteinas)
    const [grasasForm, setGrasasForm] = useState<number>(grasas)
    const [hidratosCarbonoForm, setHidratosCarbonoForm] = useState<number>(hidratosCarbono)
    const [calcioForm, setCalcioForm] = useState<number>(calcio)
    const [magnesioForm, setMagnesioForm] = useState<number>(magnesio)
    const [potasioForm, setPotasioForm] = useState<number>(potasio)
    const [fosforoForm, setFosforoForm] = useState<number>(fosforo)


    const prevent = (e: FormEvent) => {
      e.preventDefault();
    };
  

    async function actualizar (){
      await axios({
        method: 'put',
        url: 'http://localhost:8085/api/ingredientes/update',
        data: {
            ingredienteId: ingredienteId,
            tipo: tipoForm,
            nombre: nombreForm,
            kcal: kcalForm,
            proteinas: proteinasForm,
            grasas: grasasForm,
            hidratosCarbono: hidratosCarbonoForm,
            calcio: calcioForm,
            magnesio: magnesioForm,
            potasio: potasioForm,
            fosforo: fosforoForm
        }
    });
  
    }

async function borrar(){
  await axios({
    method: 'DELETE',
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    },
    url: `http://localhost:8085/api/ingredientes/delete/${ingredienteId}`});

    goBack();
    setListaIngredientesFiltrada([])
  }

	const navigate = useNavigate();
	const goBack = () => {
		navigate(-1);
	}



  return (
    <div className="w-5/5 bg-light_green_color m-5">
      <div className="bg-white_color p-5" >
        <h2 className="text-2xl font-semibold sm:flex-col md:flex-row flex">
          Nombre:<input type="text" value={nombreForm} onChange={(event)=>(setNombreForm(event.target.value))} className="text-black_color font-semibold border-2 w-2/5 md:w-2/5 sm:w-full sm:my-5 md:my-0  text-center ml-2 outline-0"/>
        </h2>
        <p className="font-extrabold">{tipo}</p>
      </div>

      <div className="p-5">
        <h3 className="text-2xl mb-5 font-bold">Propiedades</h3>

        <form className="w-full md:pl-10 s:pl-0 flex justify-between sm:flex-col md:flex-row" onSubmit={prevent}>
        <div className="">
          <p className="text-xl py-1">
            kcal: <input type="text" value={kcalForm} onChange={(event)=>(setKcalForm(parseInt(event.target.value)))} className="text-black_color font-semibold border-2 outline-0 w-20 text-center "/>
          </p>

          <p className="text-xl py-1">
            proteinas:{" "}
            <input type="text" value={proteinasForm} onChange={(event)=>setProteinasForm(parseInt(event.target.value))} className="text-black_color font-semibold border-2 outline-0 w-10 text-center"/>
          </p>

          <p className="text-xl py-1">
            grasas:{" "}            
            <input type="text"  value={grasasForm} onChange={(event)=>setGrasasForm(parseInt(event.target.value))}className="text-black_color font-semibold border-2 outline-0  w-10 text-center"/>
          </p>

          <p className="text-xl py-1">
            Hidratos de Carbono:{" "}
            <input type="text"  value={hidratosCarbonoForm} onChange={(event)=>setHidratosCarbonoForm(parseInt(event.target.value))} className="text-black_color font-semibold border-2 outline-0 w-10 text-center"/>
          </p>

          <p className="text-xl py-1">
            calcio:{" "}
            <input type="text"  value={calcioForm} onChange={(event)=>setCalcioForm(parseInt(event.target.value))} className="text-black_color font-semibold border-2 outline-0  w-10 text-center"/>
          </p>

          <p className="text-xl py-1">
            magnesio:{" "}
            <input type="text"  value={magnesioForm} onChange={(event)=>setMagnesioForm(parseInt(event.target.value))} className="text-black_color font-semibold border-2 outline-0 w-10 text-center"/>
          </p>

          <p className="text-xl py-1">
            potasio:{" "}
            <input type="text"  value={potasioForm} onChange={(event)=>setPotasioForm(parseInt(event.target.value))} className="text-black_color font-semibold border-2 outline-0 w-10 text-center"/>
          </p>

          <p className="text-xl py-1">
            fosforo:{" "}
            <input type="text"  value={fosforoForm} onChange={(event)=>setFosforoForm(parseInt(event.target.value))} className="text-black_color font-semibold border-2 outline-0  w-10 text-center"/>
          </p>
        </div>
        <div className="flex flex-col gap-5 sm:mt-10">
            <button onClick={borrar} className="bg-green_color px-5 py-2 opacity-60 hover:opacity-100 rounded-sm border-2 border-black_color">Borrar</button>
            <button onClick={actualizar} className="bg-green_color px-5 py-2 opacity-60 hover:opacity-100 rounded-sm border-2 border-black_color">Actualizar</button>
        </div>
        </form>
      </div>
    </div>
  );
};
export default IngredientTypeForm;
