import React, {useContext} from "react";

import './styles/Home.css';

import { RecipesContext } from "../../Context/Context";
import { ROUTES } from "../../utils/Routes";

import imgRecipe from '../../static/images/recipe_book.png';
import imgIngredients from '../../static/images/ingredients.png';
import HomeCard from "./components/HomeCard";



const Home = () => {

  const { setRoute} = useContext(RecipesContext);

  setRoute(ROUTES.HOME)

  return (
    <main className="main">  
      <div className="home_card_container">
        {cards.map((item)=>(
          <>
            {<HomeCard nombre={item.nombre}
                      route={item.route}
                      image={item.image}
                      color={item.color}
                      key={item.color}/>}
          </>
        ))}
      </div>
    </main>
  );
};
export default Home;

export interface typeCards {
  nombre:string,
  route: string,
  image: string,
  color:string
}

export let cards:typeCards[] = [
    
  {
    nombre:"RECETAS",
    route:ROUTES.RECIPES,
    image:imgRecipe,
    color:'#FFC4C4'
  },
  {
    nombre:"INGREDIENTES",
    route:ROUTES.INGREDIENTS,
    image: imgIngredients,
    color:'#DFF6FF'
  }      
]