import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import estilos from "./CartWidget.module.css";

const CartWidgetComponent = () =>{
    return(
        <div className={estilos.container}>
            <FontAwesomeIcon icon={faCartShopping} className={estilos.icon}/>
            <span>10</span> 
        </div>
    )
}

export default CartWidgetComponent;