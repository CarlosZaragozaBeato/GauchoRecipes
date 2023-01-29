
import {useState, FormEvent} from 'react'
import axios from 'axios'
const CreateRecipeForm = () =>{


const [nombre, setNombre] = useState<string>("")
const [kcal, setKcal] = useState<number>(0)


async function crear (){
    await axios({
      method: 'post',
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      },
      url: 'http://localhost:8085/api/recetas/create',
      data: {
        nombre:nombre,
        kcal:kcal       
      }
  });

  }   
   const prevent = (e: FormEvent) => {
    e.preventDefault();
  };


    return (
        <div className="sm:w4/5 md:w-2/5 bg-light_green_color m-5">
        <div className="bg-white_color p-5 h-5" >

        </div>
  
        <div className="p-5">
          <h3 className="text-2xl mb-5 font-bold">Propiedades</h3>

          <form className="w-full md:pl-10 s:pl-0 flex justify-between sm:flex-col " onSubmit={prevent}>


          <p className="text-xl py-1">
              Nombre:{" "}
              <input type="text" value={nombre} onChange={(event)=>setNombre(event.target.value)} className="text-black_color font-semibold border-2 outline-0 w-2/5 text-center"/>
            </p>

            <p className="text-xl py-1">
              kcal: <input type="text" value={kcal} onChange={(event)=>(setKcal(parseInt(event.target.value)))} className="text-black_color font-semibold border-2 outline-0 w-20 text-center "/>
            </p>
  
  

          <div className="flex justify-center gap-5 sm:mt-10">
              <button onClick={crear} className="bg-green_color px-5 py-2 w-2/5 opacity-60 hover:opacity-100 rounded-sm border-2 border-black_color">CREAR</button>
          </div>
          </form>
        </div>
      </div>

    );

}

export default CreateRecipeForm;