import { typeCards } from "../../../pages/Home/Home";
import CSS from 'csstype';
import { Link } from "react-router-dom";


const NavItem = ({nombre,route,image,color}:typeCards) => {

    const styles: CSS.Properties = {
        backgroundColor: color
      };

    return (
        <Link to={route}>
            <div style={styles} className="nav_extra_item">
                <img src={image} alt={nombre}/>
                <p>{nombre}</p>
            </div>

        </Link>
    );
  };
  export default NavItem;