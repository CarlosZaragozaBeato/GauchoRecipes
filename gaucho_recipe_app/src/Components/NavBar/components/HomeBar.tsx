import '../styles/NavBar.css';
import recipeBook from '../../../static/images/recipe_book.png';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../../utils/Routes';
import { RecipesContext } from '../../../Context/Context';
import {useContext} from 'react';
import { cards } from '../../../pages/Home/Home';
import NavItem from './NavItem';
const HomeBar = () => {

    const { route } = useContext(RecipesContext);


    return (
        <nav className={`nav_styles ${route===ROUTES.HOME?`nav`:`nav_extra`}`}>
            <div  className='navbar'>            
            {route!==ROUTES.HOME?(
                <div className='nav_extra_container'>
                    {cards.map((item)=>(
                            <NavItem nombre={item.nombre}
                                     route={item.route}
                                     image={item.image}
                                     color={item.color}
                                     key={item.color}/>
                    ))}
                </div>):("")}

                <Link to={ROUTES.HOME}>
                    <img src={recipeBook} alt="logo app" className='logo_app'/>
                </Link>


            </div>
        </nav>
    );
  };
  export default HomeBar;