import { Link } from "react-router-dom";
import { ROUTES } from "../../../../utils/Routes";
import { FormEvent, useState } from "react";
import axios from "axios";

const CreateIngredient = () => {
  const [tipoForm, setTipoForm] = useState<string>("");
  const [nombreForm, setNombreForm] = useState<string>();
  const [kcalForm, setKcalForm] = useState<number>();
  const [proteinasForm, setProteinasForm] = useState<number>();
  const [grasasForm, setGrasasForm] = useState<number>();
  const [hidratosCarbonoForm, setHidratosCarbonoForm] = useState<number>();
  const [calcioForm, setCalcioForm] = useState<number>();
  const [magnesioForm, setMagnesioForm] = useState<number>();
  const [potasioForm, setPotasioForm] = useState<number>();
  const [fosforoForm, setFosforoForm] = useState<number>();

  const prevent = (e: FormEvent) => {
    e.preventDefault();
  };


  async function create(){
    if (nombreForm!.length>0){
        await axios({
            method: 'post',
            url: 'http://localhost:8085/api/ingredientes/create',
            data: {
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
  }



  return (
    <main>
      <form className="grid place-items-center" onSubmit={prevent}>
        <div className="lg:w-2/6 md:w-4/6 sm-5/6 bg-light_green_color m-5">
          <div className="bg-white_color p-5">
            <h2 className="text-2xl font-semibold sm:flex-col md:flex-row flex">
              Nombre:
              <input
                type="text"
                value={nombreForm}
                onChange={(event) => setNombreForm(event.target.value)}
                className="text-black_color font-semibold border-2 w-2/5 md:w-2/5 sm:w-full sm:my-5 md:my-0  text-center ml-2 outline-0"
              />
            </h2>
            <p className="text-l mt-2 font-semibold sm:flex-col md:flex-row flex">
                Tipo:
            <input
              type="text"
              value={tipoForm}
              onChange={(event) => setTipoForm(event.target.value)}
              className="text-black_color font-semibold border-2  md:w-1/5 sm:w-full sm:my-5 md:my-0  text-center ml-2 outline-0"
            />
            </p>
          </div>

          <div className="p-5">
            <h3 className="text-2xl mb-5 font-bold">Propiedades</h3>

            <form
              className="w-full md:pl-10 s:pl-0 flex justify-between sm:flex-col md:flex-row"
              onSubmit={prevent}
            >
              <div className="">
                <p className="text-xl py-1">
                  kcal:{" "}
                  <input
                    type="text"
                    value={kcalForm}
                    onChange={(event) =>
                      setKcalForm(parseInt(event.target.value))
                    }
                    className="text-black_color font-semibold border-2 outline-0 w-10 text-center "
                  />
                </p>

                <p className="text-xl py-1">
                  proteinas:{" "}
                  <input
                    type="text"
                    value={proteinasForm}
                    onChange={(event) =>
                      setProteinasForm(parseInt(event.target.value))
                    }
                    className="text-black_color font-semibold border-2 outline-0 w-10  text-center"
                  />
                </p>

                <p className="text-xl py-1">
                  grasas:{" "}
                  <input
                    type="text"
                    value={grasasForm}
                    onChange={(event) =>
                      setGrasasForm(parseInt(event.target.value))
                    }
                    className="text-black_color font-semibold border-2 outline-0  w-10 text-center"
                  />
                </p>

                <p className="text-xl py-1">
                  Hidratos de Carbono:{" "}
                  <input
                    type="text"
                    value={hidratosCarbonoForm}
                    onChange={(event) =>
                      setHidratosCarbonoForm(parseInt(event.target.value))
                    }
                    className="text-black_color font-semibold border-2 outline-0 w-10 text-center"
                  />
                </p>

                <p className="text-xl py-1">
                  calcio:{" "}
                  <input
                    type="text"
                    value={calcioForm}
                    onChange={(event) =>
                      setCalcioForm(parseInt(event.target.value))
                    }
                    className="text-black_color font-semibold border-2 outline-0  w-10 text-center"
                  />
                </p>

                <p className="text-xl py-1">
                  magnesio:{" "}
                  <input
                    type="text"
                    value={magnesioForm}
                    onChange={(event) =>
                      setMagnesioForm(parseInt(event.target.value))
                    }
                    className="text-black_color font-semibold border-2 outline-0 w-10 text-center"
                  />
                </p>

                <p className="text-xl py-1">
                  potasio:{" "}
                  <input
                    type="text"
                    value={potasioForm}
                    onChange={(event) =>
                      setPotasioForm(parseInt(event.target.value))
                    }
                    className="text-black_color font-semibold border-2 outline-0 w-10 text-center"
                  />
                </p>

                <p className="text-xl py-1">
                  fosforo:{" "}
                  <input
                    type="text"
                    value={fosforoForm}
                    onChange={(event) =>
                      setFosforoForm(parseInt(event.target.value))
                    }
                    className="text-black_color font-semibold border-2 outline-0  w-10 text-center"
                  />
                </p>
              </div>
              <div className="flex flex-col gap-5 sm:mt-10">
                <button onClick={create} className="bg-green_color px-5 py-2 opacity-60 hover:opacity-100 rounded-sm border-2 border-black_color">
                  CREAR
                </button>
       
              </div>
            </form>
          </div>
        </div>
      </form>
    </main>
  );
};

export default CreateIngredient;
