import { Link } from "react-router-dom";
import  { typeCards }  from "../Home";

import CSS from 'csstype';

export default function HomeCard({nombre, route, image, color}:typeCards) {
  
    const styles: CSS.Properties = {
        backgroundColor: color
      };

    return (
        <Link to={route} className="link_homecard_container">
            <div style={styles} 
                 className="justify-between  flex-col flex items-center p-5 rounded-lg opacity-60 hover:opacity-100 gap-5" >
                <img src={image} alt={`${nombre}`} className="w-20 "/>
                <p className="font-bold text-2xl text-black_color">{nombre}</p>
            </div>
        </Link>
    )
  }
